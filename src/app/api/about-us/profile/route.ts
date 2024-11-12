const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
import path from "path";


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/about-us.json', 'utf8');
        let data = JSON.parse(file_data)
        data.profile[payload.get("lang")].title = payload.get("title")
        data.profile[payload.get("lang")].subtitle = payload.get("subtitle")
        data.profile[payload.get("lang")].description_1 = payload.get("description_1")
        data.profile[payload.get("lang")].description_2 = payload.get("description_2")
        data.profile[payload.get("lang")].quote = payload.get("quote")
        data.profile[payload.get("lang")].experience_1 = payload.get("experience_1")
        data.profile[payload.get("lang")].experience_2 = payload.get("experience_2")
        
        if (payload.get("file_1")) {
          const file = payload.get("file_1") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/images/about-us/profile-1.${file.type.split("/")[1]}`),
            buffer
          );
          data.profile.image_1_url = `/api/media/about-us/profile-1.${file.type.split("/")[1]}`
        }

        if (payload.get("file_2")) {
          const file = payload.get("file_2") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/images/about-us/profile-2.${file.type.split("/")[1]}`),
            buffer
          );
          data.profile.image_2_url = `/api/media/about-us/profile-2.${file.type.split("/")[1]}`
        }

        if (payload.get("file_3")) {
          const file = payload.get("file_3") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/images/about-us/profile-3.${file.type.split("/")[1]}`),
            buffer
          );
          data.profile.image_3_url = `/api/media/about-us/profile-3.${file.type.split("/")[1]}`
        }

        await fs.writeFile('src/app/dictionaries/about-us.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
