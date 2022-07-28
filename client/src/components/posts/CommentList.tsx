import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../common/Modal";
import NoContents from "../common/NoContents";
import PageNavigation from "../common/PageNavigation";
import CommentItem from "./CommentItem";

interface CommentListProps {
  commentList: any;
}

const CommentList = ({ commentList }: CommentListProps) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 3;
  const offset = (currentPage - 1) * pageSize;

  const onClickListButtonHandler = () => navigate(-1);

  return (
    <>
      <div className="flex w-full items-center space-x-1 border-b border-[#999] px-5 py-[13px]">
        <img src="/images/post/comment-icon.svg" alt="comment-icon" />
        <div className="text-defaultBlack">
          댓글{" "}
          <span className="font-bold text-primary">{commentList?.length}</span>
        </div>
      </div>

      <div className="mb-8">
        {commentList?.slice(offset, offset + pageSize).map((comment: any) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        {!commentList.length && (
          <NoContents
            imgSrc="/images/no-contents/no-contents.png"
            message="아직 등록된 댓글이 없어요."
          />
        )}
      </div>

      <PageNavigation
        pageSize={3}
        numberOfPagesPerGroup={3}
        dataLength={commentList?.length ? commentList?.length : 0}
        currentPage={currentPage}
        setModal={setModal}
        setCurrentPage={setCurrentPage}
      />

      <div className="w-full pt-10 text-center">
        <button
          onClick={onClickListButtonHandler}
          className="h-[50px] w-20 border border-[#999] hover:bg-primary hover:text-white"
        >
          목록
        </button>
      </div>

      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default CommentList;
