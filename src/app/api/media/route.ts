import { readFile } from "fs/promises";
import path from "path";
import { createReadStream } from 'fs'; // Streaming module for reading

export async function GET() {
    // const headers = new Headers();
    // headers.append("Content-Type", "application/pdf");
    const stream = createReadStream( path.join(process.cwd(), `public/images/home/home-about-2.jpeg`));

    return new Response(stream as any);
}


