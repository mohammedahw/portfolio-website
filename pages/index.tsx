import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mohammed Ali</title>
        <meta name="portfolio website" content="portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
