const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/about-us.json', 'utf8');
        let data = JSON.parse(file_data)
        data.strategies[payload.get("lang")].title = payload.get("title")
        data.strategies[payload.get("lang")].contents = JSON.parse(payload.get("contents"))

        if (payload.get("file")) {
          const file = payload.get("file") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(`./public/images/about-us/our-strategy.${file.type.split("/")[1]}`, buffer);

          data.strategies.image_url = `/api/media/about-us/our-strategy.${file.type.split("/")[1]}`
        }


        await fs.writeFile('src/app/dictionaries/about-us.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
