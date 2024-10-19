const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/@core/libs/auth";

import dataUsers from '@/app/data/users.json'

export async function POST(req: Request) {
    try {
        const user:any = await req.json();

        const check = dataUsers.find((x:any) => x.username === user.username);
        if (check) {
          const passwordMatches = await bcrypt.compare(user.password, check.password)
          if (passwordMatches) {
            const token = await new SignJWT({
              username: user.username,
            })
              .setProtectedHeader({ alg: "HS256" })
              .setIssuedAt()
              .setExpirationTime("3600s") // Set your own expiration time
              .sign(getJwtSecretKey());
              
              const response = NextResponse.json(
                { success: true },
                { status: 200, headers: { "content-type": "application/json" } }
              );
          
              response.cookies.set({
                name: "token",
                value: token,
                path: "/xadmin",
              });
          
              return response;

          } else {
            return  NextResponse.json({ error: 'Invalid Password' }, { status: 401 })
          }
        } else {
          return  NextResponse.json({ error: 'Username Not Found' }, { status: 404 })
        }
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}

export async function GET() {
    try {
        // let file_data = await fs.readFile(process.cwd() + '/src/app/data/users.json', 'utf8');
        // let users = JSON.parse(file_data)

        return NextResponse.json({ status: "success", user:dataUsers});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}