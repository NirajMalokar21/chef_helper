import ShopListForm from "@/components/forms/ShopListForm";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
    const { userId } = auth()
    return (
        <div className="pt-28 flex flex-col items-center mx-auto px-12 w-full">
            <div className=" w-full flex justify-center pt-4 pb-12">
                <h1 className="text-2xl font-bold text-dark100_light900">Create a Grocery List</h1>
            </div>
            <ShopListForm 
                clerkId={userId}
            />
        </div>
    )
}