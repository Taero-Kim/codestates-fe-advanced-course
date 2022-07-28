import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ setModal }: ModalProps) => {
  const onButtonClickHandler = () => setModal(false);

  return (
    <div className="absolute bottom-[150px] left-[50%] w-[400px] translate-x-[-50%] rounded-[10px] border border-defaultGray bg-white text-center shadow-lg">
      <div className="rounded-t-[10px] border-b border-defaultGray py-5 font-bold text-defaultBlack">
        마지막 페이지입니다.
      </div>
      <button
        onClick={onButtonClickHandler}
        className="w-full rounded-b-[10px] py-3 text-defaultBlack hover:bg-primary hover:text-white"
      >
        확인
      </button>
    </div>
  );
};

export default Modal;
