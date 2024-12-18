import axios from 'axios';
import { store } from '../app/store';
import { logout } from '../app/store/authSlice';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
api.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

// Response Interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            store.dispatch(logout()); // Dispatch logout if 401 error
        }
        return Promise.reject(error);
    }
);

export default api;
