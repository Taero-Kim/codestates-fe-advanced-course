import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
