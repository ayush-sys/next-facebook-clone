import { FaFacebook } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FaFacebook className="h-40 w-40 text-blue-500" />
      <button className="login-btn" onClick={() => signIn()}>
        Login with facebook
      </button>
    </div>
  )
}
