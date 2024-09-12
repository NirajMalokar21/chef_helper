import RecipeCard from "@/components/shared/cards/RecipeCard";
import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { topRecipes } from '@/constants'

export default async function Page() {
    return (
        <div className="pt-28 items-center justify-center flex flex-col px-8 w-full">
            <h1 className="text-2xl font-bold text-dark100_light900 py-8">My Recipes</h1>
            <div className="w-full max-w-[1200px] flex flex-row gap-6">
                <LocalSearchBar 
                    placeholder="Search your recipes"
                />
                <Filter />
            </div>
            <div className="flex md:flex-wrap max-md:flex-col justify-center items-center max-md:gap-8 md:gap-16 py-12 w-full px-8">
                {topRecipes.map((item) => (
                    <RecipeCard
                    key={item.id}
                    tags={item.tags}
                    title={item.title}
                    imgUrl={item.imgURL}
                    chefName='Niraj Malokar'
                    chefPic='/images/doof.png'
                    />
                ))}
            </div>
        </div>
    )
}