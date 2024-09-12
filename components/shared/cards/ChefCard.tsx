import Image from 'next/image'
import React from 'react'

interface ChefCardProps {
    name: string,
    username: string,
    imgURL: string,
    numRecs: number
}

const ChefCard = (Props: ChefCardProps) => {
  const { name, username, imgURL, numRecs } = Props
  return (
    <div className='bg-gray-300 dark:bg-slate-950 flex flex-col w-[250px] gap-2 rounded-lg py-8 shadow-md p-2 justify-center items-center'>
        <Image
         src={imgURL}
         alt='Profile pic'
         height={80}
         width={80}
         className='rounded-full'
        />
        <p className='text-xl font-semibold text-dark100_light900'>{name}</p>
        <p className='paragraph-regular text-dark100_light900'>@{username}</p>
        <p className='paragraph-regular text-dark100_light900'><span className='text-xl font-bold text-primary-600'>{numRecs}+</span> Recipes</p>
    </div>
  )
}

export default ChefCard