import { Dialog } from "@headlessui/react";
import Image from "next/image";
import TextInput from "./shared/textInput";

const RegistrationDialog = ({ isOpen, setIsOpen }) => {
  const closeModal = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-dark-blue/90" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-7">
        <Dialog.Panel className="relative modal-bg-gradient w-full px-10 pt-[60px] pb-[50px] rounded-[35px]">
          <CloseButton onClick={closeModal} />
          <Dialog.Title className="text-white text-xl font-bold text-center mb-[52px]">
            Регистрация
          </Dialog.Title>
          <Dialog.Description>
            <div className="flex flex-col gap-[22px]">
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
                minLength={5}
                isRequired={true}
              />
              <TextInput
                label="Подтвердите пароль"
                id="reg-repeat-password"
                type="password"
                iconPath="/lock.svg"
                minLength={5}
                isRequired={true}
              />
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

const CloseButton = ({ onClick }) => {
  return (
    <div
      className="bg-yellow absolute top-0 right-0 w-[38px] h-[38px] rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      <Image src="/close.svg" alt="close dialog" width={15} height={15} />
    </div>
  );
};

export default RegistrationDialog;
