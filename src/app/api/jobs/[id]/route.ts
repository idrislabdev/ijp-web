const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');


export async function DELETE(req: Request,  { params }: { params: Promise<{ id: string }>}) {
    try {
        const paramsId = (await params).id
        let file_data = await fs.readFile(process.cwd() + '/src/app/data/jobs.json', 'utf8');
        let jobs = JSON.parse(file_data)

        let index = jobs.findIndex((x:any) => x.id == paramsId)
        jobs.splice(index, 1)


        await fs.writeFile('src/app/data/jobs.json', JSON.stringify(jobs, null, 4));

        return NextResponse.json({ status: "success", data:jobs});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function PATCH(req: Request,  { params }: { params: Promise<{ id: string }>}) {
  try {
      const paramsId = (await params).id
      const job:any = await req.json();
      let file_data = await fs.readFile(process.cwd() + '/src/app/data/jobs.json', 'utf8');
      let jobs = JSON.parse(file_data)

      let index = jobs.findIndex((x:any) => x.id == paramsId)
      jobs[index].name = job.name
      jobs[index].position = job.position
      jobs[index].location = job.location
      jobs[index].description = job.description
      jobs[index].jobdescs = job.jobdescs
      jobs[index].status = job.status
      jobs[index].qualifications = job.qualifications
      jobs[index].updated_at = new Date().toISOString();

      await fs.writeFile('src/app/data/jobs.json', JSON.stringify(jobs, null, 4));

      return NextResponse.json({ status: "success", data:jobs[index]});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }>}) {
  try {
    const paramsId = (await params).id
    let file_data = await fs.readFile(process.cwd() + '/src/app/data/jobs.json', 'utf8');
    let data = JSON.parse(file_data)
    let obj = data.find((x:any) => x.id == paramsId)
    return NextResponse.json({ status: "success", data:obj});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}