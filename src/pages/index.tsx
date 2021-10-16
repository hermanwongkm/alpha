import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/nav/header'
import Footer from '../components/footer/footer'
import AddPositionForm from '../components/addPosition/addPosition'
import { useQuery } from 'urql'

const testQuery = `
query { 
  stockTransaction {
symbol
openPrice
openDate
closeDate
closePrice
} }
`
const Home: NextPage = () => {
  const [result, reexecuteQuery] = useQuery({
    query: testQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div >
      <Head>
        <title>Alpha</title>
        <meta name="Alpha app" content="Alpha app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Header />
      <AddPositionForm />
      <Footer />
    </div>
  )
}

export default Home
