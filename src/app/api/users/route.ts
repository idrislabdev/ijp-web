const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {  usersRepo } from '@/@core/helpers/users-repo';
import { promises as fs } from 'fs';

import dataUsers from '@/app/data/users.json'

export async function POST(req: Request) {
    try {
        const user:any = await req.json();

        if (dataUsers.find((x:any) => x.username === user.username))
            throw `User with the username "${user.username}" already exists`;
    
        user.password = bcrypt.hashSync('12345', 10);    
        usersRepo.create(user);

        return NextResponse.json({ status: "success", user:user});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function GET() {
    try {
        // let file_data = await fs.readFile(process.cwd() + '/src/app/data/users.json', 'utf8');
        // let users = JSON.parse(file_data)

        return NextResponse.json({ status: "success", data:dataUsers});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}