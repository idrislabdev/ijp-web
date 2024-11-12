const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/about-us.json', 'utf8');
        let data = JSON.parse(file_data)
        data.market_area[payload.get("lang")].title = payload.get("title")
        data.market_area[payload.get("lang")].subtitle_1 = payload.get("subtitle_1")
        data.market_area[payload.get("lang")].subtitle_2 = payload.get("subtitle_2")
        data.market_area[payload.get("lang")].contents = JSON.parse(payload.get("contents"))

        await fs.writeFile(process.cwd() + '/src/app/dictionaries/about-us.json', JSON.stringify(data, null, 4));
        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
