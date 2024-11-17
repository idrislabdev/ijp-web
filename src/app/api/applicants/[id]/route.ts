const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');
import path from "path";


export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }>}) 
{
    try {
        const paramsId = (await params).id

        let file_data = await fs.readFile(process.cwd() + '/src/app/data/applicants.json', 'utf8');
        let applicants = JSON.parse(file_data)

        let index = applicants.findIndex((x:any) => x.id == paramsId)

        await fs.unlink(
          path.join(process.cwd(), `public/applicants/${applicants[index].id}.pdf`),
        );

        applicants.splice(index, 1)


        await fs.writeFile('src/app/data/applicants.json', JSON.stringify(applicants, null, 4));

        return NextResponse.json({ status: "success", data:applicants});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
