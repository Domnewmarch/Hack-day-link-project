// pages/index.js

import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-full relative min-h-screen bg-gradient-to-b from-purple-300 to-black">
      <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.7162 75.3139C26.377 75.1226 18.1483 66.5837 18.3396 56.2445L18.9048 25.6961C29.2441 25.8874 37.4727 34.4263 37.2814 44.7656L36.7162 75.3139Z" fill="white" />
        <path d="M42.3374 26.127L41.7722 56.6754C41.5809 67.0146 49.8096 75.5536 60.1488 75.7449L60.714 45.1965C60.9054 34.8535 52.6767 26.3183 42.3374 26.127Z" fill="white" />
        <path d="M83.7545 66.8185C83.6588 71.99 79.3894 76.1044 74.2179 76.0087C69.0464 75.913 64.9321 71.6435 65.0277 66.4721C65.1234 61.3006 69.3929 57.1862 74.5644 57.2819C79.7359 57.3776 83.8502 61.6471 83.7545 66.8185Z" fill="white" />
      </svg>

      <h1 className="text-2xl tracking-tight mt-8 mb-2 text-white">Welcome to HIIT IT</h1>
      <h2 className="text-body tracking-tight mb-8 text-gray-400">The number 1 workout tracking app</h2>

      <div className="absolute bottom-10 bg-purple-600 p-3 w-3/4 md:w-96 text-center text-white rounded-lg">
        <Link href="/login">
          <a className="">Continue with email</a>
        </Link>
      </div>
    </main>
  )
}
