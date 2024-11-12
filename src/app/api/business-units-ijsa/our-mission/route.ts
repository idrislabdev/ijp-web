const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/ijsa.json', 'utf8');
        let data = JSON.parse(file_data)
        data.vission_mission[payload.get("lang")].our_vissions = JSON.parse(payload.get("our_vissions"))
        data.vission_mission[payload.get("lang")].our_missions = JSON.parse(payload.get("our_missions"))
        data.vission_mission[payload.get("lang")].our_strategies = JSON.parse(payload.get("our_strategies"))

        await fs.writeFile(process.cwd() + '/src/app/dictionaries/ijsa.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
