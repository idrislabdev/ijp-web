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
  
        let index = users.findIndex((x:any) => x.id == 1)
        users[index].password = bcrypt.hashSync(user.password, 10);    

  
        await fs.writeFile('src/app/data/users.json', JSON.stringify(users, null, 4));
  
        return NextResponse.json({ status: "success", data:users[index]});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}



