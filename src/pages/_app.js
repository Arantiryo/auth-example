import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Layout from "@/components/layout";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
