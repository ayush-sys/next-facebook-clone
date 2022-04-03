import { useSession } from 'next-auth/react'
import Login from './Login'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'


export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <Header />
          <main className='flex'>
            {/* sidebar */}
            <Sidebar/>

            {/* Feed */}

            {/* Widget */}
          </main>
        </>
      ) : (
        <Login />
      )}
    </>
  )
}
