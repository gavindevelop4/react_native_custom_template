import { AxiosRequestConfig } from 'axios'
import request from '@/services/axios'

const httpUtils = {
  // get method for api request
  get(url: string, { params, config }: GetMethodArguments = {}) {
    url += this._queryString(params)
    return request.get(url, config)
  },

  // post method for api request
  post(url: string, { params, data, config }: PostMethodArguments = {}) {
    url += this._queryString(params)
    return request.post(url, data ?? {}, config)
  },

  // delete method for api request
  delete(url: string, { params, config }: PostMethodArguments = {}) {
    url += this._queryString(params)
    return request.delete(url, config)
  },

  // mapping query param to url format
  _queryString(params: Record<string, any> | undefined) {
    let queryString = ''

    if (params) {
      for (const key in params) {
        if (Object.prototype.toString.call(params[key]) === '[object Array]') {
          params[key].forEach((item: any) => {
            if (item) {
              queryString += '&' + key + '=' + this.urlEncode(item)
            }
          })
        } else {
          if (params[key] != null && params[key] !== '') {
            queryString += '&' + key + '=' + this.urlEncode(params[key])
          }
        }
      }
      if (queryString.length >= 1) {
        queryString = '?' + queryString.substring(1)
      }
    }
    return queryString
  },

  // encode the query param value
  urlEncode(value: string | number | boolean) {
    return encodeURIComponent(value)
  },

  setBaseUrl(baseUrl: string) {
    return (request.defaults.baseURL = baseUrl)
  },
}

interface GetMethodArguments {
  params?: Record<string, any> | undefined
  config?: AxiosRequestConfig | undefined
}

interface PostMethodArguments {
  params?: Record<string, any> | undefined
  data?: Record<string, any> | undefined
  config?: AxiosRequestConfig | undefined
}

export default httpUtils
