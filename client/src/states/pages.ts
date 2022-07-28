import { atom } from "recoil";

export const currentPageAtom = atom({
  key: "currentPage",
  default: 1,
});

export const pageSizeAtom = atom({
  key: "pageSize",
  default: 10,
});
