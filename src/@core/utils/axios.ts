import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.BASE_API_URL,
})

axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        //modify the response data here
        return response
    },
    (error) => {
        //handle response error
        return Promise.reject(error);
    }
)

export default axiosInstance;