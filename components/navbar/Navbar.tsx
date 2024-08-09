"use client"
import React, { useState } from 'react'
import Theme from './Theme'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from './Sidebar'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '../ui/button'
  
  

const Navbar = () => {
  const [active, setActive] = useState('Home')
  return (
    <nav className='flex flex-row z-10 fixed w-full justify-between items-center background-light900_dark300 px-16 py-6 shadow-sm'>
        <Link href='/' className='h1-bold'>
            <p className='text-dark100_light900'>Help<span className='text-primary-500'>Chef</span></p>
        </Link>
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
                  <p className='text-[16px] font-[400] text-gray-500 dark:text-gray-300 hover:text-black
                  hover:font-bold md:line-clamp-1'>{item.label}</p>
              </Link>
          ))}
        </div>
        <div className='flex flex-row md:gap-6 sm:gap-4 justify-between items-center'>
            <Theme />
            <div className='items-center hidden lg:flex w-full'>
                <Popover>
                    <PopoverTrigger>Sign-in</PopoverTrigger>
                    <PopoverContent>
                        <div className='flex flex-row items-center justify-evenly gap-4 w-full'>
                            <SignedOut>
                                <Link href="/sign-in">
                                    <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg 
                                    px-4 py-3 shadow-none gap-3">
                                    <Image 
                                        src="/assets/icons/account.svg"
                                        alt="login"
                                        width={20}
                                        height={20}
                                        className="invert-colors"
                                    /> 
                                    <span className="primary-text-gradient">Log In</span>
                                    </Button>
                                </Link>
                                <Link href="/sign-up">
                                    <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] 
                                    w-full rounded-lg border px-4 py-3 gap-3 shadow-none'>
                                    <Image 
                                        src="/assets/icons/sign-up.svg"
                                        alt="sign up"
                                        width={20}
                                        height={20}
                                        className="invert-colors"
                                    /> 
                                    <span className="">Sign up</span>
                                    </Button>
                                </Link>
                            </SignedOut>
                        </div>
                    </PopoverContent>
                </Popover>   
                </div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            <Sidebar />
        </div>
    </nav>
  )
}

export default Navbar