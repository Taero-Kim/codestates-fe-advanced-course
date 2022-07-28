interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className="flex flex-col border-b border-[#CACACA]">
      <div className="flex justify-between px-5 pt-5 pb-[10px]">
        <div className="font-bold text-defaultBlack">{comment.name}</div>
        <div className="text-defaultGray">{comment.email}</div>
      </div>
      <div className="py-5 px-5 leading-5 text-defaultBlack">
        {comment.body}
      </div>
    </div>
  );
};

export default CommentItem;
