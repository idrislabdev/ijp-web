const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/ijp.json', 'utf8');
        let data = JSON.parse(file_data)
        data.contact[payload.get("lang")].title = payload.get("title")
        data.contact[payload.get("lang")].address = JSON.parse(payload.get("address"))
        data.contact[payload.get("lang")].phone = JSON.parse(payload.get("phone"))
        data.contact[payload.get("lang")].email = JSON.parse(payload.get("email"))

        await fs.writeFile(process.cwd() + '/src/app/dictionaries/ijp.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
