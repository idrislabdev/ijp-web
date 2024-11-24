const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
import path from "path";

export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/ijsa.json', 'utf8');
        let data = JSON.parse(file_data)
        data.our_products[payload.get("lang")].title = payload.get("title")
        data.our_products[payload.get("lang")].description_1 = payload.get("description_1")
        data.our_products[payload.get("lang")].description_2 = payload.get("description_2")

        const productsTemp = JSON.parse(payload.get("products"))
        let  products:any = []
        
        productsTemp.forEach((item:any) => {
          let obj = {
            name:item.name,
            description:item.description,
            material:item.material,
            long:item.long,
            thick:item.thick,
            color:item.color,
            image_url:item.image_url
          }
          products.push(obj)
        });

        for (let index = 0; index < products.length; index++) {
          if (payload.get(`file_${index+1}`)) {
            const file = payload.get(`file_${index+1}`) as File;
            const arrayBuffer = await file.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);
            await fs.writeFile(
              path.join(process.cwd(), `public/images/our-products/products-ijsa-${index+1}.${file.type.split("/")[1]}`),
              buffer
            );
            products[index].image_url  = `/api/media/our-products/products-ijsa-${index+1}.${file.type.split("/")[1]}`
          }
        }


        data.our_products.products = products


        await fs.writeFile(process.cwd() + '/src/app/dictionaries/ijsa.json', JSON.stringify(data, null, 4));
        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
