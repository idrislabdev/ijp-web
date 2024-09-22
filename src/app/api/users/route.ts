const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {  usersRepo } from '@/@core/helpers/users-repo';
const fs = require('fs').promises


// export async function POST(req: NextRequest) {
//     try {
//         const user:any = req.body;

//         // // validate
//         // if (usersRepo.find((x:any) => x.username === user.username))
//         //     throw `User with the username "${user.username}" already exists`;
    
//         // // hash password
//         // user.hash = bcrypt.hashSync(user.password, 10);    
    
//         // usersRepo.create(user);
//         return NextResponse.json({ status: "success", user:req.json()});
//     } catch (e) {
//       console.error(e);
//       return NextResponse.json({ status: "fail", error: e });
//     }
//   }

export async function POST(req: Request) {
    try {
        const user:any = await req.json();

        // // validate
        // if (usersRepo.find((x:any) => x.username === user.username))
        //     throw `User with the username "${user.username}" already exists`;
    
        user.hash = bcrypt.hashSync(user.password, 10);    
        usersRepo.create(user);
        fs.writeFile('src/app/data/users.json', JSON.stringify([user], null, 4));

        return NextResponse.json({ status: "success", user:user});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}