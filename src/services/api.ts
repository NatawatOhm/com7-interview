import axios from 'axios'
const BASE_URL = import.meta.env.VITE_APP_BASE_URL

class BaseService {
  private url: string
  private api: any

  constructor(baseurl?: string) {
    this.url = baseurl || BASE_URL
    this.api = axios.create({
      baseURL: this.url,
      timeout: 60 * 5 * 1000 /** 5 Mins */,
      validateStatus: (status: number) => {
        return status >= 200 && status <= 600
      },
    })
    this.api.interceptors.request.use((config: object) => {
      const configuration = {
        ...config,
      }
      return new Promise((resolve) => resolve(configuration))
    })
    this.api.interceptors.response.use(
      (response: any) => {
        return Promise.resolve(response)
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }

  getJSON(endPoint: string, configs = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.get(endPoint, configs).then(
        (res: any) => {
          resolve(res)
        },
        (err: any) => {
          reject(err)
        }
      )
    })
  }

  postJSON(endPoint: string, params: any, configs = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.post(endPoint, params, configs).then(
        (res: any) => {
          resolve(res)
        },
        (err: any) => {
          reject(err)
        }
      )
    })
  }
}

export const baseService = new BaseService()
