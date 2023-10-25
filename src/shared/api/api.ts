import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import config from 'eslint-config-standard-with-typescript'

export const $api = axios.create({
    baseURL: __API__
})

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? ''
    }
    return config
})
