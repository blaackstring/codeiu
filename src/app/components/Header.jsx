'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black/10 backdrop-blur-md shadow-lg p-4 flex justify-center items-center sticky top-0 z-50 ">
       
      <div className="w-full  flex justify-around items-center">
        <div>
            <Link href="/" className="text-2xl font-bold text-white bg-gradient-to-r rounded-2xl bg-white/10 hover:text-purple-400 bg-transparent transition-all  duration-300">
            🌊odeIU
          </Link>
        </div>
        <div className="">
       
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              <li>
                <Link href="/" className=" hover:text-cyan-400 bg-transparent border-1 p-2 rounded-4xl font-medium transition-colors relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-purple-400 border-1  p-2 rounded-4xl font-medium transition-colors relative group">
                  Login
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r  from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-gray-300 border-1 p-2 rounded-4xl hover:text-cyan-400 font-medium transition-colors relative group">
                  Sign Up
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-t from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-cyan-400 hover:text-purple-400 focus:outline-none transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
