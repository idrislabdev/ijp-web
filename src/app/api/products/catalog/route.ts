const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
import path from "path";

export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();

        if (payload.get("file")) {
          const file = payload.get("file") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/catalogs/products-catalog.pdf`),
            buffer
          );
        }
        return NextResponse.json({ status: "success"});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
