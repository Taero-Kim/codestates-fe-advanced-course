import React from "react";
import { useRecoilValue } from "recoil";
import { filteredPostListAtom } from "../../states/posts";

import NoContents from "../common/NoContents";
import PostItem from "./PostItem";

interface PostListProps {
  currentPage: number;
  pageSize: number;
}

const PostList = ({ currentPage, pageSize }: PostListProps) => {
  const offset = (currentPage - 1) * pageSize;
  const postList = useRecoilValue(filteredPostListAtom);

  return (
    <section className="mb-9">
      <div className="flex h-[100px] items-center border-b-2 border-t-2 border-defaultBlack px-2">
        <div className="w-[10%] text-center text-defaultGray">NO</div>
        <div className="flex-1 text-center text-defaultGray">제목</div>
        <div className="w-[10%] text-center text-defaultGray">작성자</div>
      </div>

      {postList &&
        postList
          ?.slice(offset, offset + pageSize)
          .map((post: any) => <PostItem key={post?.id || 1} post={post} />)}

      {!postList.length && (
        <NoContents
          imgSrc="/images/no-contents/no-contents.png"
          message="조건에 맞는 글이 없습니다."
        />
      )}
    </section>
  );
};

export default PostList;
