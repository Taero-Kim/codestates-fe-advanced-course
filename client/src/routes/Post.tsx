import { useParams } from "react-router-dom";
import { usePost } from "../api/post";
import { useCommentList } from "../api/comment";

import Error from "../components/common/Error";
import Layout from "../components/common/Layout";
import Loading from "../components/common/Loading";
import CommentList from "../components/posts/CommentList";

import { getUserNamePlaceholder } from "../lib/getUsername";

const Post = () => {
  const { postId } = useParams();
  const post = usePost(Number(postId));
  const comment = useCommentList(Number(postId));

  if (post.loading)
    return (
      <Layout paddingY="py-[70px]">
        <Loading message="글 불러오는 중..." />
      </Layout>
    );
  else if (!post.data)
    return (
      <Layout paddingY="py-[70px]">
        <Error />
      </Layout>
    );

  return (
    <Layout paddingY="py-[70px]">
      <div className="mb-5 px-5 py-2 text-2xl font-bold text-defaultBlack">
        {post?.data?.title}
      </div>
      <div className="mb-[13px] px-5 py-[14px] font-bold text-defaultBlack">
        {getUserNamePlaceholder(post?.data?.userId)}
      </div>
      <div className="border-t border-t-[#999] px-5 py-20 leading-6 text-defaultBlack">
        {post?.data?.body}
      </div>

      {comment.loading ? (
        <Loading message="댓글 불러오는 중..." />
      ) : (
        <CommentList commentList={comment?.data} />
      )}
    </Layout>
  );
};

export default Post;
