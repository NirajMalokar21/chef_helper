import { getShopListIdByTitle } from '@/lib/actions/shopList.action'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface ShopListProps {
    title: string,
    description: string | null,
}

const ShopListCard = async ({ title, description }: ShopListProps) => {
//   const handleDelete = async(title: string) => {
//     try {
//         await deleteShopLists(title)
//     } catch (error) {
//         console.log(error)
//     }
//   }
  const id = await getShopListIdByTitle(title)
  
  return (
    <div 
        
        className="flex flex-col justify-start items-start gap-6 shadow-xl bg-background-500 dark:bg-slate-950 w-full h-[250px] rounded-2xl"
    >
        <div className="flex flex-row justify-between items-center w-full">
            <Link href={`/shop-list/${id}`} className='cursor-pointer'>
                <h2 className="p-4 text-2xl font-semibold text-dark100_light900">{title}</h2>
            </Link>
            {/* <Image 
                src='/assets/icons/trash.svg'
                height={25}
                width={25}
                alt="trash can"
                className='mx-8 cursor-pointer'
                onClick={() => handleDelete(title)}
            /> */}
        </div>
        <Link href={`/shop-list/${title}`} className='cursor-pointer'>
            <p className="p-4 line-clamp-4 text-dark100_light900">{description}</p>
        </Link>
    </div>
  )
}

export default ShopListCard