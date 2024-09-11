"use client"
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

interface LocalSearchParams {
    placeholder: string,
    addedClasses?: string
}

const LocalSearchBar = (params: LocalSearchParams) => {
  const { placeholder, addedClasses } = params
  return (
    <div className='w-full flex flex-row bg-gray-300 dark:bg-slate-950 rounded-full gap-2 px-3 shadow-md'>
        <Image 
            src='/assets/icons/search.svg'
            alt='Search'
            height={30}
            width={30}
        />
        <Input type='string' placeholder={placeholder} className={`${addedClasses} h-[60px]`} />
    </div>
  )
}

export default LocalSearchBar