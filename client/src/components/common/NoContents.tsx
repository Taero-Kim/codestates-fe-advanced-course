interface NoContentsProps {
  imgSrc: string;
  message: string;
}

const NoContents = ({ imgSrc, message }: NoContentsProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-[100px] pb-[80px]">
      <img className="w-[100px]" src={imgSrc} alt="no-contents" />
      <div>{message}</div>
    </div>
  );
};

export default NoContents;
