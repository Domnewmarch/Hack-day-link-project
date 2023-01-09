// pages/index.js

import Link from 'next/link'
import PurpleButton from '../components/buttons/purpleButton'
import HomeSection from '../components/home-section'
export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center max-w-2xl md:max-w-full relative min-h-screen bg-gradient-to-b from-purple-400 to-black">
        <HomeSection />
        <PurpleButton />
      </div>
    </main>
  )
}
