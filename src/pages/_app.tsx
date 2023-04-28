import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./nav";
import Footer from "./footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
