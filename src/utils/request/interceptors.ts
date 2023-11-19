import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";


export interface HttpInterceptors {
    requestInterceptor?: (config :InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
    responseInterceptor?: (res :AxiosResponse) => AxiosResponse;
    responseInterceptorCatch?: (err :any) => any;
}

export interface HttpConfig extends AxiosRequestConfig {
    interceptors?: HttpInterceptors
}
