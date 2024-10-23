const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();

        const file = payload.get("file") as File;
        const uuid = uuidv4;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        await fs.writeFile(`./public/news/${file.name}`, buffer);

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/news/${file.name}`

        return NextResponse.json({ status: "success", url:url});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
