import ChefCard from "@/components/shared/cards/ChefCard";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";

export default async function TopChefs () {
    const chefs = [
        {
            name: "Kips",
            username: "kips21",
            numRecs: 2,
            imgURL: '/images/doof.png',
        },
        {
            name: "Kips",
            username: "kips21",
            numRecs: 2,
            imgURL: '/images/doof.png',
        },
        {
            name: "Kips",
            username: "kips21",
            numRecs: 2,
            imgURL: '/images/doof.png',
        },
        {
            name: "Kips",
            username: "kips21",
            numRecs: 2,
            imgURL: '/images/doof.png',
        },
    ]
    return (
        <section className="pt-28 flex flex-col items-center px-4">
            <h1 className="text-2xl font-bold pb-12 pt-6">Meet our Chef Community!</h1>
            <div className="w-full max-w-[1200px] flex flex-col items-center">
                <LocalSearchBar placeholder="Search for a Chef"/>
                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center p-4 gap-8 py-12">
                    {
                        chefs.map((chef,i) => (
                            <ChefCard key={i}
                            name={chef.name} username={chef.username} numRecs={chef.numRecs} imgURL={chef.imgURL} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}