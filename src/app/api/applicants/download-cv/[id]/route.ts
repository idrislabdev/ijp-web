import { readFile } from "fs/promises";
import path from "path";


export async function GET(req: Request, route: { params: { id: string } }) {
    // process.cwd() is the root of the Next.js app
    const buffer = await readFile(path.join(process.cwd(), `public/applicants/${route.params.id}.pdf`));

    const headers = new Headers();
    headers.append("Content-Disposition", 'attachment; filename=`cv.pdf`');
    headers.append("Content-Type", "application/pdf");

    return new Response(buffer, {
      headers,
    });
}