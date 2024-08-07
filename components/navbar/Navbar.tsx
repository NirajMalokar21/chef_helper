"use client"
import React, { useState } from 'react'
import Theme from './Theme'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  return (
    <nav className='flex flex-row z-10 fixed w-full justify-between items-center background-light900_dark300 px-16 py-6 shadow-sm'>
        <div className='h1-bold'>
            <p className='text-dark100_light900'>Help<span className='text-primary-500'>Chef</span></p>
        </div>
        <div className='lg:flex flex-row justify-center items-center px-8 gap-10 hidden'>
          {sidebarLinks.map((item,i) => (
              <Link 
                  href={item.route} 
                  key={i} 
                  className={`flex flex-row gap-2 py-1 rounded-full
                      items-center justify-center px-2  ${active === item.label ? 'text-primary-100' : ''}`}
                  onClick={() => setActive(item.label)}   
              >
                  {/* <Image src={item.imgURL} alt='label' width={30} height={30} className='invert' /> */}
                  <p className='body-medium md:line-clamp-1'>{item.label}</p>
              </Link>
          ))}
        </div>
        <div className='flex flex-row gap-6 justify-between items-center'>
            <Theme />
            Icon
        </div>
    </nav>
  )
}

export default Navbar