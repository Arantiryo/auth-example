import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@/components/shared/textInput";
import Checkbox from "@/components/shared/checkbox";
import Button from "@/components/shared/button";
import { registerUser } from "@/utils/auth";
import { useState } from "react";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const RegistrationDialog = ({ isOpen, setIsOpen }) => {
  const [isTncChecked, setIsTncChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const closeModal = () => {
    setErrorMsg("");
    setIsOpen(false);
  };
  const toggleTnc = () => setIsTncChecked((prev) => !prev);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const target = event.currentTarget;

    const email = target["reg-email"].value;
    const password = target["reg-password"].value;
    const confirmPassword = target["reg-confirm-password"].value;

    if (password !== confirmPassword) {
      setErrorMsg("Пароли не совпадают.");
      return;
    } else {
      setErrorMsg("");
    }

    const response = await registerUser(email, password);

    if (response.ok) {
      Cookies.set("token", response.token);
      router.push("/account/image");
    } else {
      setErrorMsg(Object.values(response.errors).join(", ") || "Unknown error");
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-dark-blue/90" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-7">
        <Dialog.Panel className="relative modal-bg-gradient w-full px-10 pt-[60px] pb-[50px] rounded-[35px]">
          <CloseButton onClick={closeModal} />
          <Dialog.Title className="text-white text-xl font-bold text-center mb-[52px]">
            Регистрация
          </Dialog.Title>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[22px] mb-[30px]">
              <TextInput
                label="Электронная почта"
                id="reg-email"
                type="email"
                iconPath="/phone.svg"
                isRequired={true}
              />
              <TextInput
                label="Пароль"
                id="reg-password"
                type="password"
                iconPath="/lock.svg"
                minLength={6}
                isRequired={true}
              />
              <TextInput
                label="Подтвердите пароль"
                id="reg-confirm-password"
                type="password"
                iconPath="/lock.svg"
                minLength={6}
                isRequired={true}
                error={errorMsg}
                // inputRef={confirmRef}
              />
            </div>
            <div className="flex gap-3 mb-6">
              <Checkbox isActive={isTncChecked} toggle={toggleTnc} />
              <p
                className="text-sm text-white select-none cursor-pointer"
                onClick={toggleTnc}
              >
                Нажимая кнопку, вы подтверждаете, что ознакомились и
                соглашаетесь с{" "}
                <Link className="cursor-pointer underline" href="/about/tnc">
                  Условиями Соглашения
                </Link>
                ! Правилами и политикой конфиденциальности компании
              </p>
            </div>
            <Button
              type="submit"
              isDisabled={!isTncChecked}
              className="yellow-gradient purple-shadow"
            >
              Зарегистрироваться
            </Button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

const CloseButton = ({ onClick }) => {
  return (
    <div
      className="bg-yellow cursor-pointer absolute top-[-10px] right-[-10px] w-[38px] h-[38px] rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      <Image src="/close.svg" alt="close dialog" width={15} height={15} />
    </div>
  );
};

export default RegistrationDialog;
