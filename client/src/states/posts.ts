import { atom } from "recoil";

export const filteredPostListAtom = atom({
  key: "filteredList",
  default: [{}],
});

export const searchKeywordAtom = atom({
  key: "searchKeyword",
  default: "",
});
