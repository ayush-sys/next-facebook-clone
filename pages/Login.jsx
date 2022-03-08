import Head from "next/head";
import { FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";


export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
        <Head>
            <title>Facebook Clone</title>
            <link rel="icon" href="/facebook.svg" />
        </Head>
        <FaFacebook className="h-40 w-40 text-blue-500"/>
        <div className="mt-5">
            <h1 className="login-btn" onClick={signIn}>Login with facebook</h1>
        </div>
    </div>
  )
}