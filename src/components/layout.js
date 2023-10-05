import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <div className="px-7">
      <Header />
      <main className="min-h-[calc(100vh-64px-80px)]">{children}</main>
      <Footer />
    </div>
  );
}
