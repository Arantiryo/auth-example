import Layout from "@/components/layout";
import Button from "@/components/button";

export default function Home() {
  return (
    <Layout>
      <h1 className="mt-10 ml-[10px] mb-[84px] text-lg font-bold text-dark-blue">
        Выберите действие
      </h1>
      <div className="flex flex-col gap-5">
        <Button className="yellow-gradient purple-shadow">Login</Button>
        <Button className="dark-purple-gradient blue-shadow">
          Registration
        </Button>
      </div>
    </Layout>
  );
}
