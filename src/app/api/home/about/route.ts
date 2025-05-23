const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
import path from "path";

import dataUsers from '@/app/data/users.json'


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/home.json', 'utf8');
        let data = JSON.parse(file_data)
        data.about[payload.get("lang")].title = payload.get("title")
        data.about[payload.get("lang")].subtitle = payload.get("subtitle")
        data.about[payload.get("lang")].description = payload.get("description")

        if (payload.get("file")) {
          const file = payload.get("file") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/images/home/home-about.${file.type.split("/")[1]}`),
            buffer
          );
          data.about.image_url = `/api/media/home/home-about.${file.type.split("/")[1]}`
        }


        await fs.writeFile(process.cwd() + '/src/app/dictionaries/home.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function GET() {
  try {
      let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/home.json', 'utf8');
      let data = JSON.parse(file_data)
      return NextResponse.json({ status: "success", data:data});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}
