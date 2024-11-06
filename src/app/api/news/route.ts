const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/data/news.json', 'utf8');
        let news = JSON.parse(file_data)

        let slug = payload.get("title").toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
        let url = '';
        if (payload.get("file")) {
          const file = payload.get("file") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(`./public/news/${slug}.${file.type.split("/")[1]}`, buffer);
          url = `${process.env.NEXT_PUBLIC_BASE_URL}/news/${slug}.${file.type.split("/")[1]}`
        }

        let obj = {
          id: uuidv4(),
          title: payload.get("title"),
          slug: slug,
          prolog : payload.get("prolog"),
          content : payload.get("content"),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          thumbnail: url
        };

        news.push(obj)

        await fs.writeFile('src/app/data/news.json', JSON.stringify(news, null, 4));

        return NextResponse.json({ status: "success", data:obj});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function GET() {
  try {
      let file_data = await fs.readFile(process.cwd() + '/src/app/data/news.json', 'utf8');
      let data = JSON.parse(file_data)
      return NextResponse.json({ status: "success", data:data});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}