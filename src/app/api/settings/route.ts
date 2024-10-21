const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');


export async function PATCH(req: Request) {
    try {
        const setting:any = await req.json();
        let file_data = await fs.readFile(process.cwd() + '/src/app/data/settings.json', 'utf8');
        let data = JSON.parse(file_data)
        data.find((x:any) => x.name == setting.name).value = setting.value
        await fs.writeFile('src/app/data/settings.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
