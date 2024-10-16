import Features from "@/components/homeSections/Features";
import Intro from "@/components/homeSections/Intro";
import TopRecipes from "@/components/homeSections/TopRecipes";
import { connectToDatabse } from "@/lib/mongoose";

export default async function Home () {
    await connectToDatabse();
    return (
        <main className="flex flex-col justify-center items-center md:px-4">
            <Intro />
            <TopRecipes />
            <Features />
        </main>
    )
}