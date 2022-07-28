import { useState } from "react";
import { useRecoilState } from "recoil";
import { pageSizeAtom } from "../../states/pages";

const Dropdown = () => {
  const dropdownList = [
    { content: "10개씩 보기", size: 10 },
    { content: "5개씩 보기", size: 5 },
  ];

  const [dropdown, setDropdown] = useState(false);
  const [pageSize, setPageSize] = useRecoilState(pageSizeAtom);

  const onClickDropdownArrow = () =>
    setDropdown((currentState) => !currentState);

  const onClickDropdownItem = (size: number) => setPageSize(size);

  const dropdownClass = () => {
    if (dropdown)
      return "absolute mt-2 flex h-[100px] w-full flex-col border border-defaultBlack bg-white z-[60] shadow-lg animate-dropdownOpen";
    else return "hidden";
  };

  const dropdownListClass = (value: number) => {
    const defaultClass =
      "flex flex-1 px-5 items-center cursor-pointer hover:bg-primary hover:text-white hover:bg-opacity-90 ";
    if (value === pageSize) return defaultClass + "text-primary font-bold";
    else return defaultClass + "text-defaultGray";
  };

  return (
    <div id="abas" onClick={onClickDropdownArrow} className="relative">
      <div className="flex h-[50px] min-w-[94px] cursor-pointer items-center justify-between border border-defaultBlack px-5 lg:w-[150px]">
        <div className="text-defaultGray">{`${pageSize}개씩 보기`}</div>
        <img src="/images/common/dropdown-arrow.svg" alt="dropdown-arrow" />
      </div>

      <div className={dropdownClass()}>
        {dropdownList.map((item, i) => (
          <div
            onClick={() => onClickDropdownItem(item.size)}
            key={i}
            className={dropdownListClass(item.size)}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
