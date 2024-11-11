const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';

import dataUsers from '@/app/data/users.json'


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/careers.json', 'utf8');
        let data = JSON.parse(file_data)

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function GET() {
  try {
      let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/careers.json', 'utf8');
      let data = JSON.parse(file_data)
      return NextResponse.json({ status: "success", data:data});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}
