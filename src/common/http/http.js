'use strict'
/**
 * Created by weiChow on 2020/06/30
 * http
 */

import axios from 'axios'

const axiosHttp = axios.create({
  timeout: 5000
})

// request 拦截器
axiosHttp.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error)
  }
)

// response 拦截器(响应拦截器即异常处理)
axiosHttp.interceptors.response.use(
  response => response,
  error => {
    if (error?.response) {
      switch (error.response.status) {
        case 400:
          console.log('错误请求')
          break
        case 401:
          console.log('未授权，请重新登录')
          break
        case 403:
          console.log('拒绝访问')
          break
        case 404:
          console.log('请求错误,未找到该资源')
          break
        case 405:
          console.log('请求方法未允许')
          break
        case 408:
          console.log('请求超时')
          break
        case 500:
          console.log('服务器端出错')
          break
        case 501:
          console.log('网络未实现')
          break
        case 502:
          console.log('网络错误')
          break
        case 503:
          console.log('服务不可用')
          break
        case 504:
          console.log('网络超时')
          break
        case 505:
          console.log('http版本不支持该请求')
          break
        default:
          console.log(`连接错误${error.response.status}`)
      }
    }
    return Promise.reject(error.response)
  }
)

/**
 * 取消请求源
 */
export const cancelSource = () => {
  const { token, cancel } = axios.CancelToken.source()
  return { cancelToken: token, cancel }
}

/**
 * 获取复杂请求配置
 * @param options
 */
const getComplexRequestConfig = options => {
  return Object.assign(
    {},
    {
      headers: getRequestHeaders(options)
    },
    options
  )
}

/**
 * 获取请求头
 */
function getRequestHeaders(options) {
  const headers = Object.assign(
    {},
    {
      'Content-Type': ''
    },
    options.headers || {}
  )
  switch (options.type) {
    case 'json':
    case 'JSON':
      headers['Content-Type'] = 'application/json'
      break
    case 'form':
    case 'FORM':
      headers['Content-Type'] = 'multipart/form-data'
      break
    default:
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return headers
}

/**
 * get
 */
const get = (url, option) => {
  const promise = new Promise((resolve, reject) => {
    axiosHttp
      .get(url, option)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  // eslint-disable-next-line no-proto
  promise.__proto__.cancel = option.cancel
  return promise
}
/**
 * post
 */
const post = (url, option) => {
  const promise = new Promise((resolve, reject) => {
    axiosHttp.post(url, option).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
  // eslint-disable-next-line no-proto
  promise.__proto__.cancel = option.cancel
  return promise
}
/**
 * 封装patch请求
 */
const patch = (url, option) => {
  const promise = new Promise((resolve, reject) => {
    axiosHttp.patch(url, option).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
  // eslint-disable-next-line no-proto
  promise.__proto__.cancel = option.cancel
  return promise
}

/**
 * 封装put请求
 */
const put = (url, option) => {
  const promise = new Promise((resolve, reject) => {
    axiosHttp.put(url, option).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
  // eslint-disable-next-line no-proto
  promise.__proto__.cancel = option.cancel
  return promise
}
/**
 * 请求
 */
export const http = (url, options) => {
  const { cancelToken, cancel } = cancelSource()
  options.cancelToken = cancelToken
  options.cancel = cancel
  switch (options.method) {
    case 'get':
    case 'GET':
      return get(url, Object.assign({}, { params: options.data || {} }, options))
    case 'post':
    case 'POST':
      return post(url, getComplexRequestConfig(options))
    case 'patch':
    case 'PATCH':
      return patch(url, getComplexRequestConfig(options))
    case 'put':
    case 'PUT':
      return put(url, getComplexRequestConfig(options))
  }
}
