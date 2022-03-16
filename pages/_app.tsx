import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
