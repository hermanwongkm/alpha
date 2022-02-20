import { useQuery } from "urql";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/nav/header";
import Footer from "../components/footer/footer";
import AddPositionForm from "../components/stocksComponents/addTransaction/addTransaction";
import getStockTransactions from "../graphql/queries/stocks/getStocksTransactions";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alpha</title>
        <meta name="Alpha app" content="Alpha app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Header />
      <>Hello world</>
      <Footer />
    </div>
  );
};

export default Home;
