"use client"
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
  const [active, setActive] = useState('Home')
  return (
    <div className='max-lg:flex background-light900_dark300 text-dark100_light900 pt-32
     pb-8 px-2 gap-4 max-sm:w-[240px] w-[80px] min-h-screen flex-col justify-start items-start hidden'>      
        {sidebarLinks.map((item,i) => (
            <Link 
                href={item.route} 
                key={i} 
                className={`flex flex-row gap-6 rounded-full
                    items-center justify-start w-full py-4 px-4 ${active === item.label ? 'bg-primary-100' : ''}`}
                onClick={() => setActive(item.label)}   
            >
                <Image src={item.imgURL} alt='label' width={30} height={30} className='invert' />
                <p className='base-medium max-sm:flex hidden'>{item.label}</p>
            </Link>
        ))}
    </div>
  )
}

export default Sidebar