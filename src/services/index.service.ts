import { useLoadingStore } from '@stores/loading.store';
import { useUserStore } from '@stores/user.store';
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import i18next from 'i18next';

export function serializeSortParams(params: AxiosRequestConfig['params']): string {
    const searchParams = new URLSearchParams();

    Object.keys(params)
        .forEach((key) => {
            searchParams.append(
                key,
                typeof params[key] === 'object'
                    ? JSON.stringify(params[key])
                    : params[key]
            );
        });

    return searchParams.toString();
}

export const CustomAxios = {
    axiosInstance: axios.create({
        baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL
    }),
    get<T>(url: string, config?: AxiosRequestConfig) {
        return this.axiosInstance.get<T>(url, config);
    },
    getWithSort<T>(url: string, params: AxiosRequestConfig['params'], config?: AxiosRequestConfig) {
        return this.axiosInstance.get<T>(url, {
            ...config,
            params,
            paramsSerializer: serializeSortParams
        });
    },
    post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
        return this.axiosInstance.post<T>(url, data, config);
    },
    put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
        return this.axiosInstance.put<T>(url, data, config);
    },
    delete<T>(url: string, config?: AxiosRequestConfig) {
        return this.axiosInstance.delete<T>(url, config);
    },
    postForm<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
        return this.axiosInstance.postForm<T>(url, data, config);
    },
    putForm<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
        return this.axiosInstance.putForm<T>(url, data, config);
    }
};

CustomAxios.axiosInstance.interceptors.request.use(
    async(config: InternalAxiosRequestConfig) => {
        const { show } = useLoadingStore?.getState?.() ?? {};

        if (!config.headers['x-show-loading']) {
            show?.();
        }

        config.headers['Accept-Language'] = i18next.language;
        config.headers['refer-url'] = window.location.pathname;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

CustomAxios.axiosInstance.interceptors.response.use(
    (response) => {
        const { hide } = useLoadingStore?.getState?.() ?? {};
        const config = response.config;

        if (!config.headers['x-show-loading']) {
            hide?.();
        }

        return response;
    },
    (error) => {
        const { hide } = useLoadingStore?.getState?.() ?? {};
        const { userInfo, setUserInfo } = useUserStore?.getState?.() ?? {};
        const response = error.response;
        const statusCode = response?.status;
        const message = response?.data.result;
        const config = response?.config;

        if (!config?.headers['x-show-loading']) {
            hide?.();
        }

        switch (statusCode) {
        case 400:
            alert(message);

            return Promise.reject(error);
        case 401:
            if (userInfo) {
                alert(message);
                setUserInfo();
            }

            return Promise.reject(error);
        default:
            if (message) {
                alert(message);
            }

            return Promise.reject(error);
        }
    }
);