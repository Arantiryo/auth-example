import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-[430px] max-h-[800px] mx-auto">
      <Header />
      <main className="px-7 min-h-[calc(100vh-64px-80px)]">{children}</main>
      <Footer />
    </div>
  );
}
