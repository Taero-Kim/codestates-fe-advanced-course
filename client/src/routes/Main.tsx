import { useEffect, useState } from "react";
import { usePostList } from "../api/post";

import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageAtom, pageSizeAtom } from "../states/pages";
import { filteredPostListAtom } from "../states/posts";

import Dropdown from "../components/common/Dropdown";
import Error from "../components/common/Error";
import Layout from "../components/common/Layout";
import Loading from "../components/common/Loading";
import Modal from "../components/common/Modal";
import PageNavigation from "../components/common/PageNavigation";
import SearchBar from "../components/common/SearchBar";
import PostList from "../components/posts/PostList";

const Main = () => {
  const postList = usePostList();
  const [modal, setModal] = useState(false);
  const [filteredList, setFilteredList] = useRecoilState(filteredPostListAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const pageSize = useRecoilValue(pageSizeAtom);

  useEffect(() => {
    if (postList.data && !Object.keys(filteredList[0]).length)
      setFilteredList(postList.data.reverse());
  }, [postList.data]);

  if (postList.loading)
    return (
      <Layout paddingY="py-[62px]">
        <Loading message="게시판 목록 불러오는 중..." />
      </Layout>
    );
  else if (!postList?.data)
    return (
      <Layout paddingY="py-[62px]">
        <Error />
      </Layout>
    );

  return (
    <Layout paddingY="py-[62px]">
      <main className="mb-12 text-center text-[34px] leading-[50px]">
        게시판
      </main>

      <div className="mb-4 flex flex-col items-center justify-between px-2 lg:flex lg:flex-row">
        <div className="mb-4 text-defaultGray lg:mb-0">
          총{" "}
          <span className="font-bold text-primary">{filteredList?.length}</span>
          건의 글이 있습니다.
        </div>
        <div className="flex-col space-y-4 lg:flex lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
          <Dropdown />
          <SearchBar allPostList={postList.data} />
        </div>
      </div>

      <PostList currentPage={currentPage} pageSize={pageSize} />

      <PageNavigation
        dataLength={filteredList.length}
        pageSize={pageSize}
        numberOfPagesPerGroup={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setModal={setModal}
      />

      {modal && <Modal setModal={setModal} />}
    </Layout>
  );
};

export default Main;
