import useFetch from "../hooks/useFetch";

export const useCommentList = (id: number) =>
  useFetch<any[]>(`/posts/${id}/comments`);
