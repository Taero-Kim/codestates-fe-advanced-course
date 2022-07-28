const Header = () => {
  const onClickLogoHandler = () => (window.location.href = "/");

  return (
    <header className="flex h-[120px] w-full items-center justify-center border-b-2 border-[#CCC] bg-white">
      <img
        onClick={onClickLogoHandler}
        className="w-[150px] cursor-pointer"
        src="/images/common/logo.png"
        alt="header-logo"
      />
    </header>
  );
};

export default Header;
