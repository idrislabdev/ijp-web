const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';

import path from "path";
export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/home.json', 'utf8');
        let data = JSON.parse(file_data)
        data.our_products[payload.get("lang")].title = payload.get("title")
        data.our_products[payload.get("lang")].subtitle = payload.get("subtitle")
        data.our_products[payload.get("lang")].button_text = payload.get("button_text")

        if (payload.get("file")) {
          const file = payload.get("file") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/catalogs/products-catalog.pdf`),
            buffer
          );
        }

        await fs.writeFile('src/app/dictionaries/home.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
