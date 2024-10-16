import RecipeCard from "@/components/shared/cards/RecipeCard";
import TagCard from "@/components/shared/cards/TagCard";
import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";

export default async function Page() {
    return (
        <div className="pt-28 items-center justify-center flex flex-col px-8 w-full">
            <h1 className="text-2xl font-bold text-dark100_light900 py-8">Categories</h1>
            <div className="w-full max-w-[1200px] flex flex-row gap-6">
                <LocalSearchBar 
                    placeholder="Search for an ingredient or tag"
                />
                <Filter />
            </div>
            <div className="flex md:flex-wrap max-md:flex-col justify-center items-center max-md:gap-8 md:gap-16 py-12 w-full px-8">
                <TagCard 
                    name="Chicken"
                    numRecs={4}
                    tagId="12192712"
                />
            </div>
        </div>
    )
}