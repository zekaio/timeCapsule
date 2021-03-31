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
instance.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      spinner: 'el-icon-loading',
      text: '拼命加载中...',
      background: '#e4eafa'
    })
    return config
  },
  error => {
    return Promise.reject(new Error(error))
  }
)

/** 添加响应拦截器  **/
instance.interceptors.response.use(
  response => {
    loadingInstance.close()
    if (response.status === 200) {
      return Promise.resolve(response.data)
    }
  },
  error => {
    loadingInstance.close()
    let response = error.response
    if (!response) {
      Message({
        message: '服务器无法响应，请稍后再试',
        type: 'error'
      })
    } else {
      switch (response.status) {
        // 未登录
        case 401:
          window.location.href = `https://hemc.100steps.net/2020/wechat/auth?state=${encodeURIComponent(
            window.location.href
          )}`
          // Message({
          //   message: '请先登录',
          //   type: 'error'
          // })
          break
        // 服务器错误
        case 500:
          Message({
            message: '服务器错误，请稍后再试',
            type: 'error'
          })
          break
        default:
          Message({
            message: response.data.message,
            type: 'error'
          })
          break
      }
    }
    return new Promise(() => {})
  }
)

/**
 * get方法，对应get请求
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时携带的参数
 */
export function get(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url 请求的url地址
 * @param {Object} data 请求时携带的参数
 */
export function post(url, data, config = {}) {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
