import React, { Key } from 'react'
import ShopListCard from './ShopListCard';
import { getShopLists } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs/server';

interface ShopListCardsProps {
    userId: string | null
}

const ShoplistCards = async ({ userId }: ShopListCardsProps) => {

    const shopLists = await getShopLists(userId)

    return (
        <div className='w-full gap-6 flex flex-col'>
            {
                shopLists.map((item: { title: string; description: string | null }, i: Key) =>  (
                    <ShopListCard 
                        title={item.title}
                        description={item.description}
                        key={i}
                    />
                ))
            }
        </div>
    )
}

export default ShoplistCards