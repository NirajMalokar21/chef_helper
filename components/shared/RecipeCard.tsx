import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TagSection from './TagSection'

interface RecipeCardProps {
    title: string,
    imgUrl: string,
    tags: string[],
    chefName: string,
    chefPic: string
}

const RecipeCard = ({title, imgUrl, tags, chefName, chefPic}: RecipeCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center max-md:w-full gap-2'>
        <Link href='/' className='h-52 rounded-xl relative group md:w-[250px] max-md:w-full 
        shadow-xl border-x-2 border-t-2 border-gray-200'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition:
        "center", overflow: "hidden" }}>
            <div className='absolute bottom-4 left-4 flex gap-3 flex-row items-center justify-start'>
                <Image
                    src={chefPic}
                    alt='profile'
                    width={30}
                    height={30}
                    className='rounded-full object-cover bg-fill'
                />
                <div className='flex flex-col justify-start items-start'>
                    <p className='paragraph-semibold text-[#f8f8f8] line-clamp-1'
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                        {title}
                    </p>
                    <p className='paragraph-regular text-[#f8f8f8] line-clamp-1'
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                        - {chefName}
                    </p>
                </div>
            </div>
        </Link>
        <TagSection tags={tags} />
    </div>
)
}

export default RecipeCard