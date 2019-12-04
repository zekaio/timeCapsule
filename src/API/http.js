import axios from 'axios'
import { Loading, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

let loadingInstance = null // 加载全局的loading

const instance = axios.create({
  timeout: 10000
  // headers: {
  //   token: sessionStorage.getItem('token') || ''
  // }
})
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.get['Content-Type'] = 'application/json'

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    spinner: 'el-icon-loading',
    text: '拼命加载中...',
    background: '#e4eafa'
  })
  return config
}, error => {
  return Promise.reject(new Error(error))
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
  loadingInstance.close()
  if (response.status === 200) {
    return Promise.resolve(response.data)
  } else if (response.status === 404) {
    Message({
      message: '未找到信件',
      type: 'error'
    })
  } else {
    Message({
      message: response.data,
      type: 'error'
    })
    return Promise.reject(new Error(response.data))
  }
}, error => {
  loadingInstance.close()
  if (error) {
    let tips = error
    Message({
      message: tips,
      type: 'error'
    })
    return Promise.reject(error)
  } else {
    Message({
      message: '请求超时, 请刷新重试',
      type: 'error'
    })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})

/**
 * get方法，对应get请求
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时携带的参数
 */
export function get (url, params, config = {}) {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url 请求的url地址
 * @param {Object} data 请求时携带的参数
 */
export function post (url, data, config = {}) {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
