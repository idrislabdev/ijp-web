const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
const { v4: uuidv4 } = require('uuid');


export async function DELETE(req: Request, route: { params: { id: string } }) {
    try {
        let file_data = await fs.readFile(process.cwd() + '/src/app/data/offices.json', 'utf8');
        let offices = JSON.parse(file_data)

        let index = offices.findIndex((x:any) => x.id == route.params.id)
        offices.splice(index, 1)


        await fs.writeFile('src/app/data/offices.json', JSON.stringify(offices, null, 4));

        return NextResponse.json({ status: "success", data:offices});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
