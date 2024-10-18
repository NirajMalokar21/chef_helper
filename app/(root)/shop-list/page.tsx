import LocalSearchBar from "@/components/shared/search/LocalSearchBar"
import ShopListCard from "@/components/shop-listComps/ShopListCard"
import ShoplistCards from "@/components/shop-listComps/ShoplistCards"
import { getShopLists, getUser } from "@/lib/actions/user.action"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react"

export default async function ShopList () {
    const { userId } = auth()
    const shopLists = await getShopLists(userId)
    return (
        <section className="pt-28 items-center justify-center flex flex-col w-full ">
            <h1 className="text-4xl font-bold py-12 text-dark100_light900">Grocery Lists</h1>
            <div className="flex flex-col w-full justify-start gap-12 items-center min-h-screen px-8 max-w-[1200px]">
                <LocalSearchBar placeholder="Search Grocery Lists" addedClasses="h-[50px] rounded-lg" />
                {/* {
                    shopLists?.map((item: { title: string; description: string | null }, i: Key) =>  (
                        <ShopListCard 
                            title={item.title}
                            description={item.description}
                            key={i}
                        />
                    ))
                } */}
                <ShoplistCards userId={userId} />
                <Link 
                    href='/create-list'
                    className="flex flex-col justify-center items-center gap-6 shadow-xl bg-background-500 dark:bg-slate-950 w-full h-[250px] rounded-2xl"
                >
                    <Image
                        src='/assets/icons/plus.svg'
                        alt="Plus"
                        height={50}
                        width={50}
                        className="dark:invert"
                    />
                    <h2 className="p-4 text-2xl font-semibold text-dark100_light900">Add a List</h2>
                </Link>  
            </div>
        </section>
    )
}