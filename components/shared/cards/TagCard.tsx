import Link from 'next/link'
import React from 'react'

interface TagCardProps {
    name: string,
    numRecs: number,
    tagId: string
}

const TagCard = (Props: TagCardProps) => {
  const { name, numRecs, tagId } = Props
  return (
    <Link href={`/categories/${tagId}`} className='bg-gray-300 dark:bg-slate-950 flex flex-col w-[250px] h-[200px] gap-2 rounded-lg py-8 shadow-md p-2 
    justify-center items-center'>
        <h1 className='text-dark100_light900 text-xl font-semibold'>{name}</h1>
        <p className='text-dark100_light900'><span className='text-primary-500 font-extrabold text-xl'>{numRecs}+</span> Recipes</p>
    </Link>
  )
}

export default TagCard