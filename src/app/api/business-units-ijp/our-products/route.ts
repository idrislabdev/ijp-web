const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { promises as fs } from 'fs';
import path from "path";


export async function POST(req: Request) {
    try {
        const payload:any = await req.formData();
        let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/ijp.json', 'utf8');
        let data = JSON.parse(file_data)
        data.our_products[payload.get("lang")].title = payload.get("title")
        data.our_products[payload.get("lang")].description = payload.get("description")

        const productsTemp = JSON.parse(payload.get("products"))
        let  products:any = []
        
        productsTemp.forEach((item:any) => {
          let obj = {
            name:item.name,
            description:item.description,
            image_url:item.image_url
          }
          products.push(obj)
        });
        

        if (payload.get("file_1")) {
          const file = payload.get("file_1") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/images/our-products/products-ijp-1.${file.type.split("/")[1]}`),
            buffer
          );
          products[0].image_url  = `/api/media/our-products/products-ijp-1.${file.type.split("/")[1]}`
        }

        if (payload.get("file_2")) {
          const file = payload.get("file_2") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/images/our-products/products-ijp-2.${file.type.split("/")[1]}`),
            buffer
          );
          products[1].image_url  = `/api/media/our-products/products-ijp-2.${file.type.split("/")[1]}`
        }

        if (payload.get("file_3")) {
          const file = payload.get("file_3") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/images/our-products/products-ijp-3.${file.type.split("/")[1]}`),
            buffer
          );
          products[2].image_url  = `/api/media/our-products/products-ijp-3.${file.type.split("/")[1]}`
        }

        if (payload.get("file_4")) {
          const file = payload.get("file_4") as File;
          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
          await fs.writeFile(
            path.join(process.cwd(), `public/images/our-products/products-ijp-4.${file.type.split("/")[1]}`),
            buffer
          );
          products[3].image_url  = `/api/media/our-products/products-ijp-4.${file.type.split("/")[1]}`
        }

        data.our_products.products = products


        await fs.writeFile(process.cwd() + '/src/app/dictionaries/ijp.json', JSON.stringify(data, null, 4));

        return NextResponse.json({ status: "success", data:data});
    } catch (e) {
      console.error(e);
      return NextResponse.json({ status: "fail", error: e });
    }
}
