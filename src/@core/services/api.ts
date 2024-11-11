import axiosInstance from "../utils/axios"

export const getDataHome = async () => {
    const resp = await fetch(`${process.env.BASE_API_URL}/api/home/about`)
    return resp
}
