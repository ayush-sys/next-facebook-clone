import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/facebook.svg" />
      </Head>

      {/* Header */}
      <Header/>

      <main>
        <div className='text-2xl font-semibold tracking-wide text-center'>
          <h1 className='hover:text-blue-600'>Let's build Facebook Clone !!</h1>
        </div>

        {/* Sidebar */}

        {/* Feed */}

        {/* Widget */}

      </main>
    </div>
  )
}

export default Home
