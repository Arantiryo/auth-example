import { fetcher } from "@/utils/files";
import { API } from "@/utils/auth";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AccountPage = () => {
  const { data, error, isLoading } = useSWR(`${API}/account/image`, fetcher, {
    revalidateOnFocus: false,
  });
  const router = useRouter();

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>загрузка...</div>;

  console.log("data?.error", data?.error);

  if (data?.error === "AuthToken invalid or expired") {
    Cookies.remove("token");
    router.push("/");
    return;
  }

  return (
    <div className="pt-10">
      <h1 className="mb-9 text-lg font-bold text-dark-blue">Мой аватар</h1>
      {!!data.image && (
        <img className="max-w-10 max-h-10" src={data.image} alt="avatar" />
      )}
    </div>
  );
};

export default AccountPage;
