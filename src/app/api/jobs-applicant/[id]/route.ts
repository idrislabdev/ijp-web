const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');
import path from "path";


export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }>}) {
    try {
        const paramsId = (await params).id
        let file_data = await fs.readFile(process.cwd() + '/src/app/data/applicants.json', 'utf8');
        let jobs = JSON.parse(file_data)

        let index = jobs.findIndex((x:any) => x.id == paramsId)
        const pathString = (process.cwd(), `public/applicants/${jobs[index].id}.pdf`)
        try {
          await fs.unlink(
            path.join(pathString),
          );
        } catch (error) {
          
        }
        jobs.splice(index, 1)


        await fs.writeFile('src/app/data/applicants.json', JSON.stringify(jobs, null, 4));

        return NextResponse.json({ status: "success", data:jobs});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function GET(req: Request,  { params }: { params: Promise<{ id: string }>}) {
  try {
    const paramsId = (await params).id
    let file_data = await fs.readFile(process.cwd() + '/src/app/data/applicants.json', 'utf8');
    let data = JSON.parse(file_data)
    let obj = data.find((x:any) => x.id == paramsId)
    return NextResponse.json({ status: "success", data:obj});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}