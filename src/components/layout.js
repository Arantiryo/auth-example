import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="px-7 min-h-[calc(100vh-64px-80px)]">{children}</main>
      <Footer />
    </>
  );
}
