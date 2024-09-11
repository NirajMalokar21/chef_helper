import LocalSearchBar from "@/components/shared/search/LocalSearchBar"
import Image from "next/image"
import Link from "next/link"

export default async function ShopList () {
    let groceryLists = [
        {
            title: "Biryani Ingredients",
            description: "Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani Mmmmmm Biryani"
        }
    ]
    return (
        <section className="pt-28 items-center justify-center flex flex-col w-full ">
            <h1 className="text-4xl font-bold py-12 text-dark100_light900">Grocery Lists</h1>
            <div className="flex flex-col w-full justify-start gap-12 items-center min-h-screen px-8 max-w-[1200px]">
                <LocalSearchBar placeholder="Search Grocery Lists" addedClasses="h-[50px] rounded-lg" />
                {
                    groceryLists.map((item,i) =>  (
                        <Link 
                            href={`/shop-list/${item.title}`}
                            className="flex flex-col justify-start items-start gap-6 shadow-xl bg-background-500 dark:bg-slate-950 w-full h-[250px] rounded-2xl"
                            key={i}
                        >
                            <h2 className="p-4 text-2xl font-semibold text-dark100_light900">{item.title}</h2>
                            <p className="p-4 line-clamp-4 text-dark100_light900">{item.description}</p>
                        </Link>
                    ))
                }
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