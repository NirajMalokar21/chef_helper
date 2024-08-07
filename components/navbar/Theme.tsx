import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Image from 'next/image'

const Theme = () => {
  return (
    <div>
        <Menubar className='relative border-none bg-transparent shadow-none'>
            <MenubarMenu>
                <MenubarTrigger><Image src='/assets/icons/moon.svg' alt='Icon' width={30} height={30} className='active-theme' /></MenubarTrigger>
                <MenubarContent className='bg-background-900'>
                <MenubarItem className='flex justify-start items-center pl-6'>
                    <div className='flex flex-row justify-center items-center gap-4 py-3'>
                        <Image src='/assets/icons/moon.svg' alt='Icon' width={20} height={20}  className='active-theme'/>
                        <p className='base-semibold'> Dark</p>
                    </div>
                </MenubarItem>
                <MenubarItem className='flex justify-start items-center pl-6'>
                    <div className='flex flex-row justify-center items-center gap-4 py-3'>
                        <Image src='/assets/icons/sun.svg' alt='Icon' width={20} height={20}  className='active-theme'/>
                        <p className='base-semibold'> Light</p>
                    </div>
                </MenubarItem>
                <MenubarItem className='flex justify-start items-center pl-6'>
                    <div className='flex flex-row justify-center items-center gap-4 py-3'>
                        <Image src='/assets/icons/computer.svg' alt='Icon' width={20} height={20}  className='active-theme'/>
                        <p className='base-semibold'> System</p>
                    </div>
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    </div>
  )
}

export default Theme