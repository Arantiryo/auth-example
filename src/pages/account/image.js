import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/button";
import { useRef, useState } from "react";

const AccountImagePage = () => {
  const [message, setMessage] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log("select file");
  // };

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    const fileSize = fileObj.size / 1024 / 1024; // in MiB
    if (fileSize >= 5) {
      setMessage(
        "Размер файла превышает 5Мб, поажлуйста, выберете другой файл."
      );
      return;
    } else {
      setMessage("");
    }

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <div className="pt-9">
      <Navigation className="mb-5" />
      <h1 className="mb-9 text-lg font-bold text-dark-blue">
        Загрузка аватара
      </h1>
      <p className="mb-[43px] text-dark-blue">
        Загрузите файл размером до 5Мб
        <br /> По формату: JPG, PNG, GIF
      </p>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        className="hidden"
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg, image/gif"
        onChange={handleFileChange}
      />
      <Button
        className="dark-purple-gradient blue-shadow flex items-center justify-center gap-4"
        onClick={handleClick}
      >
        <Image width={15} height={18} src="/download.svg" alt="download logo" />
        Выбрать файл
      </Button>
      {!!message && <p className="mt-10 text-sm text-red-500">{message}</p>}
      {/* </form> */}
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
