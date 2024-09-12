import UserSection from "@/components/shared/UserSection";
import Image from "next/image";

export default async function Profile () {
    return (
        <section className="pt-28 items-center flex flex-col px-4 w-full">
            <UserSection 
                name="Niraj Malokar"
                username="kips21"
                bio="I love cooking food so much its insane how much I love cooking food you do not even understand how much I love cooking food you do not even realise holy shit bro food is love food is life."
                imgURL="/images/doof.png"
                numRecs={3}
                stars={2}
            />
        </section>
    )
}