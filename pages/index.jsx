import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Login from "./Login";
import Header from '../components/Header';


export default function Home({session}) {
  if(!session) return <Login/>;

  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/facebook.svg" />
      </Head>

      {/* Header */}
      <Header/>

      <main>
        {/* Sidebar */}

        {/* Feed */}

        {/* Widget */}
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
   const session = await getSession(context);

   return {
     props: {
       session
     }
   }
}
