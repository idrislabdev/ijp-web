const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/contact-us.json', 'utf8');
        let data = JSON.parse(file_data)
        data.info[payload.get("lang")].phone = JSON.parse(payload.get("phone"))
        data.info[payload.get("lang")].email = JSON.parse(payload.get("email"))
        data.info[payload.get("lang")].office = JSON.parse(payload.get("office"))
        data.info[payload.get("lang")].office_hour = JSON.parse(payload.get("office_hour"))

        await fs.writeFile('src/app/dictionaries/contact-us.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
