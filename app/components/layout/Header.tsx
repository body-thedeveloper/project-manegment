import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-500">Project Hub</span>
            </Link>
            <nav className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link href="/">
                  <span className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md">
                    Dashboard
                  </span>
                </Link>
                <Link href="/projects">
                  <span className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md">
                    Projects
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
