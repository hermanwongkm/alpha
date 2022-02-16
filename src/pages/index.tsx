import { useQuery } from "urql";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/nav/header";
import Footer from "../components/footer/footer";
import AddPositionForm from "../components/addPosition/addPosition";
import getStockTransactions from "../graphql/queries/stocks/getStocksTransactions";

const Home: NextPage = () => {
  const [result, reexecuteQuery] = useQuery({
    query: getStockTransactions,
    pause: false,
  });

  const { data, fetching, error } = result;
  console.log(data);
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <Head>
        <title>Alpha</title>
        <meta name="Alpha app" content="Alpha app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Header />
      <AddPositionForm execute={reexecuteQuery} />
      <Footer />
    </div>
  );
};

export default Home;
