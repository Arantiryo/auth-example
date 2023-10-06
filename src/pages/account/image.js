import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/button";
import { useRef, useState } from "react";
import { toBase64, uploadAvatar } from "@/utils/files";

const AccountImagePage = () => {
  const [message, setMessage] = useState("");
  const [fileObject, setFileObject] = useState(null);
  const imageUrl = fileObject ? URL.createObjectURL(fileObject) : null;
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const fileSize = fileObj.size / 1024 / 1024;
    if (fileSize >= 5) {
      setMessage(
        "Размер файла превышает 5Мб, поажлуйста, выберете другой файл."
      );
      return;
    } else {
      setMessage("");
    }

    // reset file input
    event.target.value = null;

    setFileObject(fileObj);
  };

  return (
    <div className="pt-9">
      <Navigation className="mb-5" />
      <div>
        <h1 className="mb-9 text-lg font-bold text-dark-blue">
          {fileObject ? "Фото для аватарки" : "Загрузка аватара"}
        </h1>
        {fileObject ? (
          <div className="mb-8 rounded-[12px] bg-light-gray flex items-center justify-center w-full h-[200px]">
            <img
              className="max-w-[164px] max-h-[164px]"
              src={imageUrl}
              alt="avatar image"
            />
          </div>
        ) : (
          <p className="mb-[43px] text-dark-blue">
            Загрузите файл размером до 5Мб
            <br /> По формату: JPG, PNG, GIF
          </p>
        )}
        {fileObject ? (
          <SaveImage fileObject={fileObject} setFileObject={setFileObject} />
        ) : (
          <UploadImage
            inputRef={inputRef}
            handleFileChange={handleFileChange}
            handleClick={handleClick}
            message={message}
          />
        )}
      </div>
    </div>
  );
};

const UploadImage = ({ inputRef, handleFileChange, handleClick, message }) => {
  return (
    <>
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
    </>
  );
};

const SaveImage = ({ fileObject, setFileObject }) => {
  const [message, setMessage] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    try {
      const imageBase64 = await toBase64(fileObject);
      console.log("imageBase64", imageBase64);

      const response = await uploadAvatar({ image: imageBase64 });
      console.log("response", response);

      if (response.ok) setIsSaved(true);
    } catch (e) {
      console.log(e);
      setMessage("Что-то пошло не так. Пожалуйста, попробуйте еще раз.");
    }
  };

  const handleCancel = () => {
    setFileObject(null);
  };

  return (
    <div className="flex flex-col gap-3">
      <Button className="dark-purple-gradient blue-shadow" onClick={handleSave}>
        Сохранить
      </Button>
      <Button
        className="light-purple-gradient blue-shadow !text-dark-blue"
        onClick={handleCancel}
      >
        Отменить
      </Button>
      {!!message && <p className="mt-10 text-sm text-red-500">{message}</p>}
      {isSaved && (
        <p className="mt-10 text-sm text-green-500">Аватар успешно загружен!</p>
      )}
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
