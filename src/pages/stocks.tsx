import React from "react";
import type { NextPage } from "next";

import Head from "next/head";
import Header from "../components/nav/header";
import Footer from "../components/footer/footer";
import StocksPage from "../components/stocksComponents";

const Stocks: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alpha</title>
        <meta name="Alpha app" content="Alpha app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Header />
      <StocksPage />
      <Footer />
    </>
  );
};

export default Stocks;
