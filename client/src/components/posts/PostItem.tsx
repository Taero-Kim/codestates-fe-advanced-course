import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserNamePlaceholder } from "../../lib/getUsername";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const navigate = useNavigate();
  const onClickItemHandler = () => navigate(`/post/${post.id}`);

  return (
    <div
      onClick={onClickItemHandler}
      className="flex h-[100px] cursor-pointer items-center justify-between border-b border-[#CACACA] px-2"
    >
      <div className="w-[10%] text-center text-defaultBlack">{post.id}</div>
      <div className="flex-1 text-defaultBlack hover:font-semibold hover:text-primary">
        {post.title}
      </div>
      <div className="w-[10%] text-center text-defaultBlack">
        {getUserNamePlaceholder(post.userId)}
      </div>
    </div>
  );
};

const areEqual = (prevProps: any, nextProps: any) =>
  prevProps.id === nextProps.id;

export default React.memo(PostItem, areEqual);
