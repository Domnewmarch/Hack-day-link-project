// pages/index.js

import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold tracking-tight my-8">Hack Day Linktree App</h1>
      <br />
      <div>
        <p className="pt-2">
          lOGIN BELOW
          <div className="flex justify-center items-center mt-12">
            {' '}
            <Link href="/login">
              <a className="focus:outline-none focus:ring focus:border-blue-800 px-6 py-2 rounded-xl envy-blue-bg text-blue-50 hover:bg-blue-800 font-semibold">Go to Login</a>
            </Link>
          </div>
        </p>
      </div>
    </main>
  )
}
