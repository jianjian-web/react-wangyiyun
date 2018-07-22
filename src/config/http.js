import axios from 'axios'
console.dir(axios.defaults)
axios.defaults.withCredentials = true
axios.defaults.timeout = 6000
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:4000'
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = '/server'
}

axios.defaults.baseURL = baseUrl
// axios.interceptors.request.use(config => {
//   config.setHeaders([
//   ])
//   return config
// })

// 拦截所有40x的错误
axios.interceptors.response.use(function (res) {
  console.dir(res)
  const status = res.status
  if (status === 200) {
    return res.data
  }else{
    console.log('请求出错', res)
    return
  }
}, function (err) {
  console.dir(err)
})

export {
  axios as default
}