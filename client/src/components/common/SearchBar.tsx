import { FormEvent, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filteredPostListAtom, searchKeywordAtom } from "../../states/posts";

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

interface SearchBarProps {
  allPostList: Post[];
}

const SearchBar = ({ allPostList }: SearchBarProps) => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordAtom);
  const [alertState, setAlertState] = useState(false);
  const setFilteredList = useSetRecoilState(filteredPostListAtom);

  const alertMessageClass = () => {
    if (alertState)
      return "absolute top-[-25px] left-[15px] text-red-400 animate-alert text-sm";
    else return "hidden";
  };

  const onChangeInputHandler = (e: FormEvent<HTMLInputElement>) =>
    setSearchKeyword(e.currentTarget.value);

  const onClickSearchButtonHandler = () => {
    if (searchKeyword.trim().length <= 2) {
      setAlertState(true);
      setTimeout(() => setAlertState(false), 3000);
      return;
    }

    const filteredPostList = [...allPostList].filter((post: any) =>
      post.title.includes(searchKeyword)
    );
    setFilteredList(filteredPostList.reverse());
  };

  const onClickResetListButtonHandler = () => {
    window.location.reload();
  };

  return (
    <div className="relative flex flex-col space-x-0 space-y-2 lg:flex-row lg:space-y-0">
      <div className={alertMessageClass()}>
        검색어는 두자 이상 입력해 주세요.(공백 불가)
      </div>
      <input
        value={searchKeyword}
        onChange={onChangeInputHandler}
        onKeyDown={(e) => {
          if (e.key === "Enter") onClickSearchButtonHandler();
        }}
        placeholder="검색어를 입력해주세요."
        className="flex h-[50px] w-full items-center border border-defaultBlack px-5 outline-none placeholder:text-defaultGray focus:border-2 focus:border-primary lg:w-[388px]"
      />
      <div className="flex space-x-2 lg:flex-none">
        <button
          onClick={onClickSearchButtonHandler}
          className="h-[50px] flex-1 bg-primary px-5 text-white lg:ml-2 lg:flex-none"
        >
          조회
        </button>
        <button
          onClick={onClickResetListButtonHandler}
          className="h-[50px] flex-1 border border-defaultBlack bg-white px-5 text-defaultBlack lg:flex-none"
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
