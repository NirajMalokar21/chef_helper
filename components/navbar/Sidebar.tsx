"use client"
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from '@/context/ThemeProvider'

interface NavContentProps {
    mode: string
}

const NavContent = ({mode}: NavContentProps) => {
    const [active, setActive] = useState('Home')
    return (
        <div className='flex flex-col px-2 gap-4 justify-start items-start'>
            <h1 className='px-6 md:px-12 py-8 text-dark100_light900 h1-bold'>Help<span className='text-primary-600'>Chef</span></h1>
            {sidebarLinks.map((item,i) => (
            <Link 
                href={item.route} 
                key={i} 
                className={`flex flex-row gap-6 rounded-full hover:bg-gray-200 dark:hover:bg-dark-400
                    items-center justify-start w-full py-4 px-4 ${active === item.label ? '!bg-primary-100 dark:!bg-primary-600' : ''}`}
                onClick={() => setActive(item.label)}   
            >
                <Image 
                    src={item.imgURL} 
                    alt='label' 
                    width={30} 
                    height={30} 
                    className={`${mode === 'dark' ? '' : 'invert'}`} />
                <p className='base-medium text-dark100_light900 max-lg:flex hidden'>{item.label}</p>
            </Link>
        ))}
        </div>
    )
}

const Sidebar = () => { 
  const { mode, setMode } = useTheme()
  return (
    <Sheet>
        <SheetTrigger>
            <Image 
                src='/assets/icons/hamburger.svg' 
                alt='hamburger' 
                width={30} 
                height={30} 
                className={`${mode === 'dark' ? '' : 'invert'} lg:hidden mx-2`}/>
        </SheetTrigger>
        <SheetContent side={'left'} className='max-md:w-[240px] max-lg:w-[300px] min-h-screen'>
            <SheetHeader>
                <NavContent mode={mode}/>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default Sidebar