const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');

export async function GET() {
  try {
      let file_data = await fs.readFile(process.cwd() + '/src/app/data/offices.json', 'utf8');
      let data = JSON.parse(file_data)
      return NextResponse.json({ status: "success", data:data});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}

export async function PATCH(req: Request) {
    try {
        const office:any = await req.json();
        let file_data = await fs.readFile(process.cwd() + '/src/app/data/offices.json', 'utf8');
        let data = JSON.parse(file_data)
        data.find((x:any) => x.id == office.id).name = office.name
        data.find((x:any) => x.id == office.id).address = office.address
        data.find((x:any) => x.id == office.id).phones = office.phones
        data.find((x:any) => x.id == office.id).faxs = office.faxs
        data.find((x:any) => x.id == office.id).email = office.email
        data.find((x:any) => x.id == office.id).type = office.type
        await fs.writeFile('src/app/data/offices.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
