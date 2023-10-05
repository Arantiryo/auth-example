import Image from "next/image";

const Header = () => {
  return (
    <header className="px-7 h-16 flex items-end justify-between">
      <div className="flex gap-[10px] items-end h-full">
        <Image
          className="relative top-1"
          src="/logo.png"
          alt="logo"
          width="30"
          height="47"
        />
        <span className="text-blue text-sm font-bold">CoinsFill</span>
      </div>
      <div className="flex gap-4 items-end h-full">
        <Image src="/search.svg" alt="search button" width="17" height="17" />
        <Image
          className="relative top-1"
          src="/profile.svg"
          alt="profile button"
          width="24"
          height="24"
        />
      </div>
    </header>
  );
};

export default Header;
