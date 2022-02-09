function Banner() {
  return (
    <div className="flex items-center justify-between py-10 bg-yellow-400 border-black border-y lg:py-0">
      <div className="px-10 space-y-5">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read and connect
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
      </div>
      <div>
        <img
          className="hidden md:inline-flex md:h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="M"
        />
      </div>
    </div>
  )
}

export default Banner
