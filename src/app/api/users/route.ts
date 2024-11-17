const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');


export async function POST(req: Request) {
    try {
        const user:any = await req.json();
        let file_data = await fs.readFile(process.cwd() + '/src/app/data/users.json', 'utf8');
        let users = JSON.parse(file_data)

        user.id = uuidv4();
        user.password = bcrypt.hashSync(12345, 10);    
        user.created_at = new Date().toISOString();
        user.updated_at = new Date().toISOString();
        users.push(user)


        await fs.writeFile('src/app/data/users.json', JSON.stringify(users, null, 4));

        return NextResponse.json({ status: "success", data:user});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function GET() {
  try {
    let file_data = await fs.readFile(process.cwd() + '/src/app/data/users.json', 'utf8');
    let data = JSON.parse(file_data)
    return NextResponse.json({ status: "success", data:data});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}


