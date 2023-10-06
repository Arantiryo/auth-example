import Button from "@/components/shared/button";
import { useState } from "react";
import RegistrationDialog from "@/components/registrationDialog";
import LoginDialog from "@/components/loginDialog";

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  return (
    <>
      <h1 className="pt-[62px] ml-[10px] mb-[84px] text-lg font-bold text-dark-blue">
        Выберите действие
      </h1>
      <div className="flex flex-col gap-5">
        <Button
          className="yellow-gradient purple-shadow"
          onClick={() => setIsLoginModalOpen(true)}
        >
          Login
        </Button>
        <Button
          className="dark-purple-gradient blue-shadow"
          onClick={() => setIsRegModalOpen(true)}
        >
          Registration
        </Button>
      </div>
      <RegistrationDialog
        isOpen={isRegModalOpen}
        setIsOpen={setIsRegModalOpen}
      />
      <LoginDialog isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
    </>
  );
}
