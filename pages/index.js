import Link from "next/link"

function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#e0e0e0] to-[#d0d0d0]">
      <header className="py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center">
            <div className="bg-gray-500 rounded-full w-5 h-5" />
          </div>
          <span className="font-mono text-gray-700 text-lg font-bold">Priyanshu</span>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="font-mono text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="font-mono text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#" className="font-mono text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="font-mono text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-2xl text-center space-y-4">
          <div className="bg-gray-400 rounded-full w-16 h-16 flex items-center justify-center">
            <div className="bg-gray-500 rounded-full w-10 h-10 animate-pulse" />
          </div>
          <h1 className="font-mono text-4xl md:text-6xl font-bold text-gray-900">Hi, I'm Priyanshu</h1>
          <p className="font-mono text-gray-700 text-lg md:text-xl">
            I'm a passionate web developer with a focus on creating beautiful and functional user experiences.
          </p>
        </div>
        <div className="mt-12 md:mt-24 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-400 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg shadow-gray-400/50 hover:shadow-gray-400/70 transition-shadow">
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-gray-900">About Me</h2>
            <p className="font-mono text-gray-700 text-lg md:text-xl mt-4">
              I'm a web developer with a passion for creating beautiful and functional websites. I have experience in a
              variety of technologies, including React, Node.js, and MongoDB.
            </p>
          </div>
          <div className="bg-gray-400 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg shadow-gray-400/50 hover:shadow-gray-400/70 transition-shadow">
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-gray-900">My Projects</h2>
            <p className="font-mono text-gray-700 text-lg md:text-xl mt-4">
              Check out some of my recent projects, including a social media platform, an e-commerce website, and a
              personal blog.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-400 py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
            <div className="bg-gray-600 rounded-full w-5 h-5" />
          </div>
          <span className="font-mono text-gray-700 text-lg font-bold">Priyanshu</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="font-mono text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
            LinkedIn
          </Link>
          <Link href="#" className="font-mono text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
            GitHub
          </Link>
          <Link href="#" className="font-mono text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
            Twitter
          </Link>
        </div>
      </footer>
    </div>
  )
}
export default Page;