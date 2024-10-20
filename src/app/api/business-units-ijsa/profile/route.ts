const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/ijsa.json', 'utf8');
        let data = JSON.parse(file_data)
        data.profile[payload.get("lang")].title = payload.get("title")
        data.profile[payload.get("lang")].description_1 = payload.get("description_1")
        data.profile[payload.get("lang")].description_2 = payload.get("description_2")
        data.profile[payload.get("lang")].description_3 = payload.get("description_3")
        
        await fs.writeFile('src/app/dictionaries/ijsa.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
