import axios from 'axios'
export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
  })
  // 2. axios的请求拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    // console.log(error);
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    return err
  })

  // 3. 发送真正的网络请求
  return instance(config)

}
