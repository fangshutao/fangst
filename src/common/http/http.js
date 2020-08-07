'use strict';
/**
 * Created by weiChow on 2020/06/30
 * http
 */
import axios from 'axios';
import { dealError } from './abnormal'; // 异常处理
if (environment === 'dev' && jwtToken) {
  if (jwtToken) {
    Object.keys(jwtToken).map(item => {
      axios.defaults.headers.common[item] = jwtToken[item];
    });
  }
}
const axiosHttp = axios.create({
  timeout: 6000
});

// request 拦截器
axiosHttp.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error);
  }
);

// response 拦截器(响应拦截器即异常处理)
axiosHttp.interceptors.response.use(
  response => response,
  error => {
    if (error?.response) {
      dealError(error); // 错误处理
    }
    return Promise.reject(error.response);
  }
);

/**
 * 取消请求源
 */
export const cancelSource = () => {
  const { token, cancel } = axios.CancelToken.source();
  return { cancelToken: token, cancel };
};

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
  );
};

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
  );
  switch (options.type) {
    case 'json':
    case 'JSON':
      headers['Content-Type'] = 'application/json';
      break;
    case 'form':
    case 'FORM':
      headers['Content-Type'] = 'multipart/form-data';
      break;
    default:
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  return headers;
}

/**
 * get
 */
const get = (url, option) => {
  const promise = new Promise((resolve, reject) => {
    axiosHttp
      .get(url, option)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
  // eslint-disable-next-line no-proto
  promise.__proto__.cancel = option.cancel;
  return promise;
};
/**
 * post
 */
const post = (url, option) => {
  const promise = new Promise((resolve, reject) => {
    axiosHttp.post(url, option.data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
  // eslint-disable-next-line no-proto
  promise.__proto__.cancel = option.cancel;
  return promise;
};
/**
 * 封装patch请求
 */
const patch = (url, option) => {
  const promise = new Promise((resolve, reject) => {
    axiosHttp.patch(url, option.data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
  // eslint-disable-next-line no-proto
  promise.__proto__.cancel = option.cancel;
  return promise;
};

/**
 * 封装put请求
 */
const put = (url, option) => {
  const promise = new Promise((resolve, reject) => {
    axiosHttp.put(url, option.data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
  // eslint-disable-next-line no-proto
  promise.__proto__.cancel = option.cancel;
  return promise;
};
/**
 * 请求
 */
export const http = (url, options) => {
  const { cancelToken, cancel } = cancelSource();
  options.cancelToken = cancelToken;
  options.cancel = cancel;
  switch (options.method) {
    case 'get':
    case 'GET':
      return get(url, Object.assign({}, { params: options.data || {} }, options));
    case 'post':
    case 'POST':
      return post(url, getComplexRequestConfig(options));
    case 'patch':
    case 'PATCH':
      return patch(url, getComplexRequestConfig(options));
    case 'put':
    case 'PUT':
      return put(url, getComplexRequestConfig(options));
  }
};
