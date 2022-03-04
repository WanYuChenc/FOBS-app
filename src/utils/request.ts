import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 9000
})

request.interceptors.request.use(
    (config:AxiosRequestConfig) => {
        //TODO 添加token信息
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response:AxiosResponse) => {
        const res = response.data
        if (res.code !== 200) {
            //TODO 处理错误请求
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return response.data
        }
    }
)

export default request