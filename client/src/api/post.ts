import useFetch from "../hooks/useFetch";

export const usePostList = () => useFetch<any[]>("/posts");

export const usePost = (id: number) => useFetch<any>(`/posts/${id}`);
