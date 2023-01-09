import Link from 'next/link'
export default function PurpleButton() {
  return (
    <div className="absolute bottom-32 bg-purple-600 p-3 w-3/4 md:w-96 text-center text-white rounded-lg">
      <Link href="/login">
        <a className="">Continue with email</a>
      </Link>
    </div>
  )
}
