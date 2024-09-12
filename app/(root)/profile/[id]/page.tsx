import UserSection from "@/components/shared/UserSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Page = async({ params }: { params: { id: string }}) => {
    return (
        <section className="pt-28 items-center justify-center flex flex-col px-4 w-full">
            <h1>ID is {decodeURIComponent(params.id)}</h1>
            <UserSection 
                name="Niraj Malokar"
                username="kips21"
                bio="I love cooking food so much its insane how much I love cooking food you do not even understand how much I love cooking food you do not even realise holy shit bro food is love food is life."
                imgURL="/images/doof.png"
                numRecs={3}
                stars={2}
            />
            <div className="flex flex-row justify-center items-center gap-4 w-full">
                <Link href='/profile/1255/saved'>
                    <Button className="w-full max-w-[250px] font-semibold text-lg bg-primary-600">Saved Recipes</Button>
                </Link>
                
                <Link href='/profile/1255/my-recipes'>
                    <Button className="w-full max-w-[250px] font-semibold text-lg bg-primary-600">My Recipes</Button>
                </Link>
            </div>
        </section>
    )
}

export default Page