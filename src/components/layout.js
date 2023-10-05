import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <main className="px-7 min-h-[calc(100vh-210px)]">{children}</main>
      <Footer />
    </div>
  );
}
