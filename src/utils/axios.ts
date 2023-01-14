import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type AxiosFunc = typeof Axios.get | typeof Axios.post | typeof Axios.patch | typeof Axios.put | typeof Axios.delete;

const request = async (
    axiosFunc: AxiosFunc,
    ...args: [string, any, AxiosRequestConfig | undefined] | [string, AxiosRequestConfig | undefined]
): Promise<AxiosResponse> => {
    try {
        // @ts-ignore
        return (await axiosFunc(...args)) as AxiosResponse;
    } catch (error: unknown) {
        let res = {};
        if (Axios.isAxiosError(error)) {
            // Access to config, request, and response
            res = error.response ?? ({} as AxiosResponse);
        }
        return res as AxiosResponse;
    }
};

class CustomAxiosInstance {
    instance: AxiosInstance;

    constructor(baseURL?: string) {
        this.instance = Axios.create({
            baseURL,
        });

        this.instance.interceptors.request.use(
            async (config) => {
                config.headers = {
                    Accept: 'application/json',
                };
                return config;
            },
            (error) => {
                Promise.reject(error);
            },
        );

        this.instance.interceptors.response.use((response) => {
            return response.data;
        });
    }

    get(path: string, configs?: AxiosRequestConfig): Promise<AxiosResponse> {
        return request(this.instance.get, path, configs);
    }
}

export default CustomAxiosInstance;
