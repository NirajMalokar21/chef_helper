"use client"
import React, { useContext } from 'react'
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
import { ThemeProvider, useTheme } from '@/context/ThemeProvider'
import { themes } from '@/constants'

const Theme = () => {

  const {mode, setMode} = useTheme();
  return (
    <Menubar className='relative border-none shadow-none bg-transparent'>
        <MenubarMenu>
            <MenubarTrigger className='border-0 outline-none shadow-none background-light900_dark300'>
                {
                    mode === 'light' ? (
                        <Image src="/assets/icons/sun.svg"
                        width={20} height={20} className='active-theme border-none' 
                        style={{ minWidth: '20px', minHeight: '20px', width: '20px', height: '20px' }}
                        alt='light'/>
                    ): (
                        <Image src="/assets/icons/moon.svg" 
                        width={20} height={20} 
                        style={{ minWidth: '20px', minHeight: '20px', width: '20px', height: '20px' }}
                        className='active-theme border-none' alt='dark' /> 
                    )
                }
            </MenubarTrigger>
            <MenubarContent className="background-light900_dark300 absolute -right-12 mt-3 min-w-[120px] rounded border py-2">
                    {themes.map((item) => (
                        <MenubarItem
                            key={item.value}
                            className='focus:bg-light-800 dark:focus:bg-dark-400 flex cursor-pointer items-center gap-4 px-2.5 py-2'
                            onClick={() => {
                                setMode(item.value)
                                if(item.value !== 'system') {
                                    localStorage.theme = item.value
                                }
                                else {
                                    localStorage.removeItem('theme')
                                }
                            }}
                        >
                            <Image src={item.icon} alt={item.value} height={16} width={16} className={`${mode === item.value && 'active-theme'}`} />
                            <p className={`body-semibold text-light-500 ${mode === item.value ? 'text-primary-500' : 'text-dark100_light900'}`}>
                                    {item.label}
                            </p>
                        </MenubarItem>
                    ))}
                </MenubarContent>
        </MenubarMenu>
    </Menubar>

  )
}

export default Theme