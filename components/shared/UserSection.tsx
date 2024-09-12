import Image from 'next/image'
import React from 'react'

interface UserSectionProps {
    imgURL: string,
    name: string,
    username: string,
    numRecs: number,
    bio: string,
    stars: number,
}

const UserSection = (Props: UserSectionProps) => {
  const { imgURL, name, username, numRecs, bio, stars } = Props
  return (
    <div className="flex flex-col justify-center items-start border-2 border-primary-500 w-full">
        <div className="flex flex-row justify-center items-center">
            <Image
                src={imgURL}
                alt='Profile'
                height={100}
                width={100}
                className="rounded-full my-6 mx-12"
            />
            <div className='flex flex-col justify-center items-start gap-3'>    
                <p className='font-semibold text-xl text-dark100_light900'>{name}</p>
                <p className='text-dark100_light900 paragraph-regular'>{bio}</p>
            </div>
        </div>
        <div className='flex flex-row justify-between items-start p-2'>
            <p>@{username}</p>
            <p><span>{numRecs}+</span> Recipes</p>
            
            
        </div>
    </div>
  )
}

export default UserSection