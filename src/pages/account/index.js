import { fetcher } from "@/utils/files";
import { API } from "@/utils/auth";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

const AccountPage = () => {
  const { data, error, isLoading } = useSWR(`${API}/account/image`, fetcher, {
    revalidateOnFocus: false,
  });
  const router = useRouter();

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>загрузка...</div>;

  if (data?.error === "AuthToken invalid or expired") {
    Cookies.remove("token");
    router.push("/");
    return;
  }

  return (
    <div className="pt-10">
      <h1 className="mb-9 text-lg font-bold text-dark-blue">Мой аватар</h1>
      {!!data.image && (
        <img className="max-w-10 max-h-10 mb-4" src={data.image} alt="avatar" />
      )}
      <Link
        className="underline cursor-pointer text-dark-blue/50"
        href="/account/image"
      >
        Загрузить новое изображение
      </Link>
    </div>
  );
};

export default AccountPage;
