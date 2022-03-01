import type { NextPage } from 'next';
import Head from 'next/head';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='text-2xl font-semibold tracking-wide text-center'>
          <h1 className='hover:text-blue-600'>Let's build Facebook Clone !!</h1>
        </div>
      </main>
    </div>
  )
}

export default Home
