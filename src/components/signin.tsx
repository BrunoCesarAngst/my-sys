import { useSession, signIn, signOut } from "next-auth/react"

export default function Signin() {
  const { data: session } = useSession()
  return (
    <div className="pt-5 flex flex-col justify-center justfy-items">
      {session
      ? <>
          <p className="self-center"> Signed in as {session.user.email}</p>
          <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => signOut()}>Sign out</button>
        </>
      : <>
          <p className="self-center">Começe por aqui</p>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => signIn('auth0')}>Sign in</button>
        </>}
    </div>
)}
