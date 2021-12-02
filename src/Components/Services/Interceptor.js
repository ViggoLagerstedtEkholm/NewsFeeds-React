import axios from "axios";
import {API} from "../Constants/Constants";

function getLocalAccessToken() {
    return JSON.parse(localStorage.getItem("accessToken"));
}

function getLocalRefreshToken() {
    return JSON.parse(localStorage.getItem("refreshToken"));
}

function refreshToken() {
    return instance.post("/token/refresh", {refreshToken:getLocalRefreshToken()});
}

const instance = axios.create({
    baseURL: API,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        if (getLocalAccessToken()) {
            config.headers["Authorization"] = 'Bearer ' + getLocalAccessToken();
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (err.response) {
            if (err.response.status === 401 && !originalConfig._retry) {

                originalConfig._retry = true;

                try {
                    const rs = await refreshToken();
                    const { accessToken } = rs.data;
                    localStorage.setItem("accessToken", JSON.stringify(accessToken));
                    instance.defaults.headers.common["Authorization"] = 'Bearer ' + accessToken;
                    return instance(originalConfig);
                } catch (_error) {
                    if (_error.response && _error.response.data) {
                        return Promise.reject(_error.response.data);
                    }

                    return Promise.reject(_error);
                }
            }

            if (err.response.status === 403 && err.response.data) {
                return Promise.reject(err.response.data);
            }
        }

        return Promise.reject(err);
    }
);

export default instance;
