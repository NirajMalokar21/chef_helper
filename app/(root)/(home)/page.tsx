import Intro from "@/components/homeSections/Intro";
import TopRecipes from "@/components/homeSections/TopRecipes";

export default async function Home () {
    return (
        <main className="flex flex-col justify-center items-center">
            <Intro />
            <TopRecipes />
        </main>
    )
}