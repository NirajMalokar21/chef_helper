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
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'

interface NavContentProps {
    mode: string,
    onClose: () => void,
    active: string,
    setActive: (label: string) => void
}

const NavContent = ({mode, onClose, active, setActive}: NavContentProps) => {
    
    return (
        <div className='flex flex-col px-2 gap-4 justify-start items-start '>
            <Link href='/' onClick={() => {
                    setActive('Home')
                    onClose()
                }}>
                <h1 className='px-6 md:px-12 py-8 text-dark100_light900 h1-bold'>Help<span className='text-primary-600'>Chef</span></h1>
            </Link>
            
            <SignedOut>
                <div className='flex flex-col gap-2 justify-start items-start w-full'>
                    <Link href="/sign-in">
                        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-full
                        px-16 py-6 shadow-none gap-3">
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
                        w-full rounded-full border px-16 py-6 gap-3 shadow-none'>
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
                </div>
            </SignedOut>
            
            {sidebarLinks.map((item,i) => (
            <Link 
                href={item.route} 
                key={i} 
                className={`flex flex-row gap-6 rounded-full hover:bg-gray-200 dark:hover:bg-dark-400
                    items-center justify-start w-full py-4 px-4 ${active === item.label ? '!bg-primary-100 dark:!bg-primary-600' : ''}`}
                onClick={() => {
                    setActive(item.label)
                    onClose()
                }}   
            >
                <Image 
                    src={item.imgURL} 
                    alt='label' 
                    width={30} 
                    height={30} 
                    className={`${item.route === '/shop-list' ? mode === 'dark' ? 'invert' : '' :  mode === 'dark' ? '' : 'invert'}`}
                />
                <p className='base-medium text-dark100_light900 max-lg:flex hidden'>{item.label}</p>
            </Link>
        ))}
        </div>
    )
}

const Sidebar = () => { 
  const { mode, setMode } = useTheme()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
            <Image 
                src='/assets/icons/hamburger.svg' 
                alt='hamburger' 
                width={30} 
                height={30} 
                style={{ minWidth: '30px', minHeight: '30px', width: '30px', height: '30px' }}
                className={`${mode === 'dark' ? '' : 'invert'} lg:hidden mx-2`}
            />
        </SheetTrigger>
        <SheetContent side={'left'} className='max-md:w-[270px] max-lg:w-[300px] min-h-screen overflow-y-auto'>
            <SheetHeader>
                <NavContent mode={mode} onClose={handleClose} active={active} setActive={setActive}/>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default Sidebar