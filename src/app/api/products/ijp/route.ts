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
      let id = products.length ? Math.max(...products.map((x:any) => x.id)) + 1 : 1;;
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

      await fs.writeFile('src/app/data/products.json', JSON.stringify(products, null, 4));

      return NextResponse.json({ status: "success", data:product});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");

    let file_data = await fs.readFile(process.cwd() + '/src/app/data/products.json', 'utf8');
    let data = JSON.parse(file_data)
    if (category) {
      data = data.filter((x:any) => x.category == category);
    }
    return NextResponse.json({ status: "success", data:data});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}


