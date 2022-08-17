import BioContact from './bioContact'
export default function Bio() {
  return (
    <div className="flex flex-col items-center">
      {/* profile title */}
      <h1 className="w-fit text-3xl">Dom Newmarch</h1>

      {/* Bio section / use react quill */}
      {/* <p className="dark:text-white">
        Owner ~
        <em className="font-semibold envy-blue">
          <a className="font-semibold envy-blue" href="https://www.envydigital-webdesign.co.uk">
            Envy Digital
          </a>
        </em>
      </p> */}
      <p className="">
        Frontend Developer ~ <em className="font-semibold envy-blue">Parallax</em>
      </p>

      {/* quick contact links */}
      <BioContact />

      {/* Tagline  */}
      <p>
        <em className="font-semibold envy-blue">Design // </em> <em className="font-semibold envy-blue">Develop // </em>
        <em className="font-semibold envy-blue">Results </em>
      </p>
    </div>
  )
}
