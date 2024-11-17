const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
import path from "path";
const { v4: uuidv4 } = require('uuid');


export async function POST(req: Request) {
  try {
      const payload:any = await req.formData();
      let file_data = await fs.readFile(process.cwd() + '/src/app/data/products.json', 'utf8');
      let products = JSON.parse(file_data)

      const file = payload.get("file") as File;
      let id = uuidv4;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      await fs.writeFile(
        path.join(process.cwd(), `public/products/ijp/${id}.${file.type.split("/")[1]}`),
        buffer
      );

      let product = {
        id : id,
        name: payload.get("name"),
        category: payload.get("category"),
        url : `/api/products/ijp/${id}.${file.type.split("/")[1]}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
      products.push(product)

      await fs.writeFile('src/app/data/products.json', JSON.stringify(product, null, 4));

      return NextResponse.json({ status: "success", data:product});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}

