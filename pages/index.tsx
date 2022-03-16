import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mohammed Ali</title>
        <meta name="portfolio website" content="portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="">
        <h1 className="font-bold text-slate-700">Main</h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;
