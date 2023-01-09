// pages/login.js
import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import HomeSection from '../components/home-section'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const handleSubmit = async event => {
    event.preventDefault()

    const { elements } = event.target

    // the Magic code
    const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY).auth.loginWithMagicLink({ email: elements.email.value })

    const authRequest = await fetch('/api/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${did}` }
    })

    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      router.push('/dashboard')
    } else {
      /* handle errors */
    }
  }

  return (
    <main className="flex flex-col justify-center items-center max-w-2xl md:max-w-full relative min-h-screen bg-gradient-to-b from-purple-400 to-black">
      <HomeSection />

      <div className="dark-bg absolute bottom-0 h-[68vh] rounded-t-2xl w-full">
        <h4 className=" text-2xl text-white font-semiboldq tracking-tight mt-8 text-center">
          Great to <br /> have you back!
        </h4>

        {/* TODO Add email icon */}

        <form className="mt-12 max-w-2xl mx-auto flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <input className="login-input px-4 py-4 mb-6 border-2 w-10/12 outline-none border-none lightgrey-bg text-white rounded-2xl" name="email" type="email" placeholder="Your email" />
          <div className=" bg-purple-600 p-4 w-10/12 md:w-96 text-center text-white rounded-2xl">
            <a className="">Login with email</a>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center mx-auto">
          <span className="text-newgray my-3">or</span>
          <div className="bg-white p-4 w-10/12 md:w-96 text-center text-purple-600 rounded-2xl items-center">
            <div className="absolute">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8055 10.5052H21V10.463H12V14.5342H17.6515C16.827 16.9041 14.6115 18.6054 12 18.6054C8.6865 18.6054 6 15.871 6 12.4986C6 9.12608 8.6865 6.39176 12 6.39176C13.5295 6.39176 14.921 6.97903 15.9805 7.93831L18.809 5.05946C17.023 3.36533 14.634 2.32056 12 2.32056C6.4775 2.32056 2 6.87776 2 12.4986C2 18.1194 6.4775 22.6766 12 22.6766C17.5225 22.6766 22 18.1194 22 12.4986C22 11.8161 21.931 11.15 21.8055 10.5052Z" fill="#FFC107" />
                <path d="M3.15332 7.76121L6.43882 10.2136C7.32782 7.97342 9.48082 6.39176 12.0003 6.39176C13.5298 6.39176 14.9213 6.97903 15.9808 7.93831L18.8093 5.05946C17.0233 3.36533 14.6343 2.32056 12.0003 2.32056C8.15932 2.32056 4.82832 4.52766 3.15332 7.76121Z" fill="#FF3D00" />
                <path d="M12.0002 22.6764C14.5832 22.6764 16.9302 21.6703 18.7047 20.0342L15.6097 17.3686C14.5719 18.1719 13.3039 18.6063 12.0002 18.6052C9.39916 18.6052 7.19066 16.9172 6.35866 14.5615L3.09766 17.1187C4.75266 20.4149 8.11366 22.6764 12.0002 22.6764Z" fill="#4CAF50" />
                <path d="M21.8055 10.5051H21V10.4629H12V14.5341H17.6515C17.2571 15.662 16.5467 16.6476 15.608 17.3692L15.6095 17.3682L18.7045 20.0338C18.4855 20.2363 22 17.5875 22 12.4985C22 11.8161 21.931 11.1499 21.8055 10.5051Z" fill="#1976D2" />
              </svg>
            </div>
            <div className=" justify-center text-center">
              <Link href="/register">
                <a className="">Login with Google</a>
              </Link>
            </div>
          </div>
        </div>
        <span className="flex justify-center mt-6 text-newgray">
          Don't have an account?
          <a className="text-purple-600 font-semibold" href="#">
            Sign Up
          </a>
        </span>
      </div>
    </main>
  )
}
