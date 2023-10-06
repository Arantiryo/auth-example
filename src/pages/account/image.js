import Link from "next/link";

const AccountImagePage = () => {
  return (
    <div className="pt-9">
      <Navigation />
    </div>
  );
};

const Navigation = ({ className = "" }) => {
  return (
    <div className={`${className} text-xs text-dark-blue/50`}>
      <Link href="/">
        <span className="hover:text-dark-blue hover:underline">Главная</span> /{" "}
      </Link>
      <Link href="/account">
        <span className="hover:text-dark-blue hover:underline">
          Настройки аккаунта
        </span>{" "}
        /{" "}
      </Link>
      <span className="">Загрузка аватара</span>
    </div>
  );
};

export default AccountImagePage;
