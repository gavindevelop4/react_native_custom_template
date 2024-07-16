import axios, { AxiosResponse } from 'axios'
import { BASE_API_URL } from '@env'
import cacheUtils, { StorageKey } from '@/utils/cacheUtils'
import { API_MODULES } from '@/api/modules'

const service = axios.create({
  baseURL: BASE_API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 60000, // request timeout
})

const loginPath = `${API_MODULES.EXAMPLE}/login`

const noTokenApiPath = [`${API_MODULES.EXAMPLE}/register`]

service.interceptors.request.use(
  async config => {
    if (!noTokenApiPath.includes(config.url ?? '')) {
      try {
        const token = await cacheUtils.getString(StorageKey.ACCESS_TOKEN)
        config.headers.Authorization = `Bearer ${token}`
      } catch (error) {
        return Promise.reject(error)
      }
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    const result = response.data.data != null ? response.data : response

    if (response.data?.code === 500) {
      const errorMsg = response.data?.message
      console.error(errorMsg)
      return Promise.reject(result)
    }
    return Promise.resolve(result)
  },

  async error => {
    const httpStatus = error?.response?.status || 400
    const errorMsg = getErrorMsg(error)

    switch (httpStatus) {
      case 401:
        const refresh_token = await cacheUtils.getString(
          StorageKey.REFRESH_TOKEN,
        )

        if (!error.config.url?.startsWith(loginPath)) {
          if (refresh_token) {
            // TODO: refresh the token

            // request the original request again if the token is refreshed
            const originalRequest = error.config
            return service(originalRequest)
          }
        }

        console.error(errorMsg)
        return Promise.reject(error)

      default:
        console.error(errorMsg)
        return Promise.reject(error)
    }
  },
)

function getErrorMsg(error: any) {
  return error?.response?.data?.message || error.message || ''
}

export default service
