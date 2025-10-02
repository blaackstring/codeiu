'use client'
import Input from '@/app/components/smallcomponents/Input'
import React, { useState } from 'react'
import Link from 'next/link'


const page = () => {
    const [constests,setcontests]=useState([{
        name:'Quiz',
        details:'quiz will happend at 13:00 pm today'
    },
{
        name:'Coding Champ',
        details:'quiz will happend at 15:00 pm today'
    }])
  return (
<div className={`bg-[url(/contestbg.png)] max-w-screen bg-amber-500 flex flex-col min-h-screen bg-cover bg-center text-4xl font-bold text-white`}>
  <div className="input px-10">
    <Input/>
  </div>
  <div className="content flex-1  p-10">
    {/* Contest Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
      
      {/* Contest Card 1 */}
   {   constests.map((c,i)=>(<div key={i} className=" backdrop-blur-xs rounded-lg p-6 border flex flex-col     border-white/10 hover:bg-white/2 transition-all">
       
        <div className="flex flex-row justify-between">
             <h3 className="text-2xl font-bold text-white mb-4">{c.name}</h3>
    <button className="bg-purple-500 hover:bg-black/80 duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-lg transition-colors text-base">
            Register Now
          </button>
        </div>
         <span>   <Link href='/contest/1' className="text-amber-300 inline hover:text-amber-200 underline  text-base font-normal">
            View Details →
          </Link></span> 
         
      </div>))}

    </div>
  </div>
</div>
  )
}

export default page
