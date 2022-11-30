// import axios, { AxiosRequestConfig } from 'axios';

// const getHeaders = () => {
//     let token = '';
//     if (window.localStorage) {
//         token = window.localStorage.getItem('token') || '';
//     }
//     let header: any = {
//         'Content-Type': 'application/json',
//     };
//     if (token && token != '') {
//         header['Authorization'] = 'Bearer ' + token;
//     }
//     return header;
// };

// export const post = (url: string, data: any, auth = false, query = {}) => {
//     const config: { [key: string]: any } = {};
//     if (auth) {
//         config['headers'] = getHeaders();
//     }
//     return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, data, {
//         ...config,
//         params: query,
//     });
// };

// export const put = (url: string, data: any, auth = false, query = {}) => {
//     const config: { [key: string]: any } = {};
//     if (auth) {
//         config['headers'] = getHeaders();
//     }
//     return axios.put(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, data, {
//         ...config,
//         params: query,
//     });
// };



