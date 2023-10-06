import { fetcher } from "@/utils/files";
import { API } from "@/utils/auth";
import useSWR from "swr";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const { data, error, isLoading } = useSWR(`${API}/account/image`, fetcher);
  const router = useRouter();

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>загрузка...</div>;

  if (data?.error === "AuthToken invalid or expired") {
    router.push("/");
    return;
  }

  console.log("data", data);

  return (
    <div className="pt-10">
      <h1 className="mb-9 text-lg font-bold text-dark-blue">Мой аватар</h1>
      <img className="max-w-10 max-h-10" src={data.image} alt="avatar"></img>
    </div>
  );
};

export default AccountPage;
