import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between p-5 mx-auto max-w-7xl">
      <div className="flex items-center space-x-5 ">
        <Link href="/">
          <img
            className="object-contain cursor-pointer w-44"
            src="https://links.papareact.com/yvf"
            alt="Medium"
          />
        </Link>
        <div className="items-center hidden space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="px-4 py-1 text-white bg-green-600 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <h3>Sign In</h3>
        <h3 className="px-4 py-1 text-green-600 border border-green-600 rounded-full">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
