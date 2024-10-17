import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/@core/components/email-template';
import { Resend } from 'resend';
import { promises as fs } from 'fs';
import fs2 from 'fs';
const { v4: uuidv4 } = require('uuid');

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const payload:any = await req.formData();
    const uuid = uuidv4();
    if (payload.get("file")) {
      const file = payload.get("file") as File;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await fs.writeFile(`./public/applicants/${uuid}.pdf`, buffer);

    }

    const filepath = `./public/applicants/${uuid}.pdf`;
    const attachment = fs2.readFileSync(filepath).toString('base64');

    let applicant = {
      id        : uuid,
      job_id    : payload.get("job_id"),
      job_name  : payload.get("job_name"),
      name      : payload.get("name"),
      email     : payload.get("email"),
      phone     : payload.get("phone"),
      address   : payload.get("address"),
      city      : payload.get("city"),
      province  : payload.get("province"),
      created_at: new Date().toISOString();
      updated_at: new Date().toISOString();
    }
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ijpeweb@gmail.com'],
      subject: `Lamaran ${applicant.job_name}`,
      react: EmailTemplate({ obj:applicant }),
      attachments: [
        {
          content: attachment,
          filename: 'cv.pdf',
        },
      ],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    let file_data = await fs.readFile(process.cwd() + '/src/app/data/applicants.json', 'utf8');
    let applicants = JSON.parse(file_data)
    applicants.push(applicant)

    await fs.writeFile('src/app/data/applicants.json', JSON.stringify(applicants, null, 4));

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}