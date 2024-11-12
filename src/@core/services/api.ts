import axiosInstance from "../utils/axios"
import fs from "fs";
// import matter from "gray-matter";
import { join } from "path";

const dictionaryPath = join(process.cwd(), "_dictionaries");

export const getDataHome = async () => {
    const fullPath = join(dictionaryPath, `home.json`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    let data = JSON.parse(fileContents)
    return data
}
