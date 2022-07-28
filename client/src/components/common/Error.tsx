const Error = () => {
  return (
    <div className="flex h-[300px] flex-col items-center justify-center space-y-8">
      <img className="w-[150px]" src="/images/common/error.png" alt="error" />
      <div className="text-center text-lg text-defaultBlack">
        죄송합니다. 알 수 없는 에러가 발생했습니다.
        <br />
        새로고침하여 다시 시도해 주세요.
      </div>
    </div>
  );
};

export default Error;
