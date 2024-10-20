const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/careers.json', 'utf8');
        let data = JSON.parse(file_data)
        data.office_location[payload.get("lang")].title = payload.get("title")
        data.office_location[payload.get("lang")].subtitle = payload.get("subtitle")
        data.office_location[payload.get("lang")].description = payload.get("description")
        data.office_location[payload.get("lang")].offices = JSON.parse(payload.get("offices"))

        await fs.writeFile('src/app/dictionaries/careers.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
