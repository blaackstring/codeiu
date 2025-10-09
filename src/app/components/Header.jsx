'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useAuthStore } from '../store/useAuthStore';


export default function Header() {

 const { isLoggingIn}=useAuthStore()
 

  const pages= [
    {
      name:'Explore',
      link:'/explore'
    },
    {
      name:'Problem',
      link:'/problem'
    },
    {
      name:'Contest',
      link:'/contest'
    },
    {
      name:'Registered',
      link:'/registered'
    
    }

  ]
  const pathname=usePathname();
  console.log(pathname);
  

  return (
    <header className=" backdrop-blur-md shadow-lg p-2   flex justify-between items-center sticky top-0 z-50 border-b border-white/10  ">
       
      <div className=" flex justify-between w-full px-2  items-center">
        <div>
            <Link href="/" className="text-2xl font-bold text-white bg-gradient-to-r rounded-2xl  hover:text-purple-400 bg-transparent transition-all  duration-300">
            🌊odeIU
          </Link>
        </div>
        
        {isLoggingIn && (
          <div>
          <ul className="flex justify-center items-center gap-6 font-semibold cursor-pointer">
          {isLoggingIn&&pages.map((page,i)=>(
            <Link href={page.link} key={i} className={`${pathname==page.link?'text-purple-500':"text-gray-300"
            } font-semibold transition-colors relative group`}>
              {page.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r  from-white to-gray-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))  }
          </ul>
        </div>
        )}

        <div className=" flex  px-4 py-2 rounded-full">
       
          <nav className="hidden md:block">
            <ul className="flex justify-center items-center gap-2 font-semibold cursor-pointer">
              <li className=''>
                <Link href="/login"  className="text-gray-300 hover:text-purple-400 gap-2  transition-colors relative group">
                  Login
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r  from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <p className='text-2xl font-medium'>/</p>
              <li className=''>
                <Link href="/signup" className="text-gray-300  hover:text-cyan-400  transition-colors relative group">
                  SignUp
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-t from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>  
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-cyan-400 hover:text-purple-400 focus:outline-none transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
    </header>
  )
}
