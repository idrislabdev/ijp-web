import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { createReadStream } from 'fs'; // Streaming module for reading
import { promises as fs } from 'fs';

export async function GET(req: Request,  { params }: { params: Promise<{ path: string }>}) {
  try {
    const urlPath = (await params).path
    const stream = createReadStream( path.join(process.cwd(), `public/products/ijp/${urlPath}`));

    return new Response(stream as any);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}

export async function DELETE(req: Request,  { params }: { params: Promise<{ path: string }>}) {
  try {
    const paramsId = (await params).path

    let file_data = await fs.readFile(process.cwd() + '/src/app/data/products.json', 'utf8');
    let products = JSON.parse(file_data)

    let index = products.findIndex((x:any) => x.id == paramsId)

    await fs.unlink(
      path.join(process.cwd(), `public/products/ijp/${products[index].url.split("/")[4]}`),
    );
    
    products.splice(index, 1)
    await fs.writeFile('src/app/data/products.json', JSON.stringify(products, null, 4));

    return NextResponse.json({ status: "success"});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}