import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

export interface Api {
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>;
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise;
  head(url: string, config?: AxiosRequestConfig): AxiosPromise;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T>;
}

export class ApiService implements Api {
  private readonly axiosInstance!: AxiosInstance;
  private static _instance: ApiService;

  private constructor() {
    const token = localStorage.getItem("token");
    this.axiosInstance = axios.create({
      baseURL: process.env.API_URL,
      timeout: 20000,
      headers: {
        Authorization: token || "",
      },
    });

    this.axiosInstance.interceptors.request.use(
      async (config) => {
        const token = localStorage.getItem("token");
        config.headers = {
          Authorization: token,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  public static get Instance(): ApiService {
    return this._instance || (this._instance = new this());
  }

  public request<T = any>(config: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.request(config);
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.axiosInstance.get(url, config);
  }

  public delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.axiosInstance.delete(url, config);
  }

  public head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.axiosInstance.head(url, config);
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.axiosInstance.post(url, data, config);
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.axiosInstance.put(url, data, config);
  }

  public patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.axiosInstance.patch(url, data, config);
  }
}
