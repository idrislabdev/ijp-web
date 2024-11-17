const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');


export async function POST(req: Request) {
    try {
        const job:any = await req.json();
        let file_data = await fs.readFile(process.cwd() + '/src/app/data/users.json', 'utf8');
        let jobs = JSON.parse(file_data)

        job.id = uuidv4();
        job.created_at = new Date().toISOString();
        job.updated_at = new Date().toISOString();
        jobs.push(job)


        await fs.writeFile('src/app/data/users.json', JSON.stringify(jobs, null, 4));

        return NextResponse.json({ status: "success", data:job});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function GET() {
  try {
    let file_data = await fs.readFile(process.cwd() + '/src/app/data/users.json', 'utf8');
    let data = JSON.parse(file_data)
    return NextResponse.json({ status: "success", data:data});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}


