import { Dispatch, SetStateAction } from "react";
import PageButton from "./PageButton";

interface PageNavigationProps {
  pageSize: number;
  numberOfPagesPerGroup: number;
  dataLength: number;
  currentPage: number;
  setModal: Dispatch<SetStateAction<boolean>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PageNavigation = ({
  pageSize,
  numberOfPagesPerGroup,
  dataLength,
  currentPage,
  setCurrentPage,
  setModal,
}: PageNavigationProps) => {
  const numberOfPages = Math.ceil(dataLength / pageSize);
  const pageGroup = Math.ceil(currentPage / numberOfPagesPerGroup) - 1;

  const onClickMoveFirstPageHandler = () => {
    if (currentPage === 1) return;
    setCurrentPage(1);
  };

  const onClickMovePrevHandler = () => {
    if (currentPage === 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const onClickMoveNextHandler = () => {
    if (currentPage === numberOfPages) {
      setModal(true);
      return;
    }
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const onClickMoveLastPageHandler = () => {
    const accPage = pageGroup + 1;
    const nextPageGroup = pageGroup + 2;

    if (currentPage === numberOfPages) {
      setModal(true);
      return;
    } else if (
      accPage * pageSize * numberOfPagesPerGroup <
      numberOfPages * pageSize
    ) {
      setCurrentPage(100 / (nextPageGroup * pageSize) + 1);
      return;
    } else {
      setCurrentPage(numberOfPages);
      return;
    }
  };

  const onClickPageNumberHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex items-center justify-center space-x-[6px] px-4 lg:px-0">
      <PageButton
        currentPage={currentPage}
        action={onClickMoveFirstPageHandler}
        imgSrc="/images/page-nav/double-left-arrow.svg"
      />
      <PageButton
        currentPage={currentPage}
        action={onClickMovePrevHandler}
        imgSrc="/images/page-nav/left-arrow.svg"
      />

      {Array(numberOfPages)
        .fill(0)
        .map((_, i) => {
          if (
            i >= pageGroup * numberOfPagesPerGroup &&
            i <= pageGroup * numberOfPagesPerGroup + (numberOfPagesPerGroup - 1)
          ) {
            return (
              <PageButton
                currentPage={currentPage}
                action={onClickPageNumberHandler}
                key={i}
                pageNumber={i + 1}
              />
            );
          }
        })}

      <PageButton
        currentPage={currentPage}
        action={onClickMoveNextHandler}
        imgSrc="/images/page-nav/right-arrow.svg"
      />
      <PageButton
        currentPage={currentPage}
        action={onClickMoveLastPageHandler}
        imgSrc="/images/page-nav/double-right-arrow.svg"
      />
    </div>
  );
};

export default PageNavigation;
