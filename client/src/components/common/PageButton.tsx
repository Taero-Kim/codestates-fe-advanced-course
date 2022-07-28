interface PageButtonProps {
  imgSrc?: string;
  pageNumber?: number;
  alt?: string;
  action?: any;
  currentPage?: number;
}

const PageButton = ({
  imgSrc,
  alt,
  action,
  pageNumber,
  currentPage,
}: PageButtonProps) => {
  const buttonClass = () => {
    const defaultClass = "flex h-9 w-9 items-center justify-center border ";
    if (pageNumber === currentPage)
      return defaultClass + "border-primary text-white bg-primary";
    else return defaultClass + "border-defaultGray text-defaultBlack";
  };

  return (
    <button
      onClick={() => {
        if (pageNumber) action(pageNumber);
        else action();
      }}
      className={buttonClass()}
    >
      {imgSrc ? <img src={imgSrc} alt={alt} /> : pageNumber}
    </button>
  );
};

export default PageButton;
