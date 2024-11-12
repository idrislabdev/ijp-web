import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { createReadStream } from 'fs'; // Streaming module for reading

export async function GET(req: Request,  { params }: { params: Promise<{ path: string }>}) {
  try {
    const urlPath = (await params).path
    const stream = createReadStream( path.join(process.cwd(), `public/images/our-products/${urlPath}`));

    return new Response(stream as any);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}