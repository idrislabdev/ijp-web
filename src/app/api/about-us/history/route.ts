const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/about-us.json', 'utf8');
        let data = JSON.parse(file_data)
        data.histories[payload.get("lang")].title = payload.get("title")
        data.histories[payload.get("lang")].subtitle = payload.get("subtitle")
        data.histories[payload.get("lang")].contents = JSON.parse(payload.get("contents"))

        await fs.writeFile('src/app/dictionaries/about-us.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
