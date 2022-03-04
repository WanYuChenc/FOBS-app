import request from "@/utils/request";

export const testGet = () => request({
    url: 'captchaImage',
    method: 'GET',
})

export const testPost = (params: any) => request({
    url: '',
    method: 'POST',
    params
})


