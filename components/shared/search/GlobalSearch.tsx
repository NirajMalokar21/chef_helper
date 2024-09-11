import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"


const GlobalSearch = () => {
  return (
    <div className='background-light900_dark300 relative w-full max-w-[900px] my-8 py-1 
    shadow-md border-2 border-gray-200 dark:border-gray-900 rounded-full'>
        <div className='relative flex min-h-[56px] grow items-center gap-1  px-4'>
            <Image
                src='/assets/icons/search.svg'
                alt='search'
                width={30}
                height={30}
                className='grayscale'
            />
            <Input
                type='text'
                placeholder='Search For Recipes, Users, or Ingredients!'
                className='base-medium no-focus text-dark400_light700 placeholder:text-gray-400
                placeholder:dark:text-gray-400 bg-light-900 dark:bg-dark-300
                border-none focus:border-none shadow-none focus:outline-none outline-none'
            />
        </div>
    </div>
  )
}

export default GlobalSearch