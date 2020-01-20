import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout: 0,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use(
    config => {
        config.params = {
            ...config.params,
            api_key: "34ab384b7d5cba71275229e3c033874e"
        };
        return config;
    },
    error => Promise.reject(error)
);

instance.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export default instance;
