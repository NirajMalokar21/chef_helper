import { Button } from "@/components/ui/button";

// !Use zod for form validation
// !Add backend for form submit

export default async function Page() {
    return (
        <div className="pt-28 flex flex-col items-center mx-auto px-12">
            <div className=" w-full flex justify-center pt-4 pb-12">
                <h1 className="text-2xl font-bold text-dark100_light900">Create a Grocery List</h1>
            </div>
            <div className="w-full flex flex-col items-start lg:items-center gap-2 px-4">
                <div className="w-full flex flex-col items-start lg:items-center gap-2 px-4 justify-center">
                    <p className="text-dark100_light900 paragraph-regular items-start">Title<span className="text-red-500">*</span></p>
                    <input placeholder="Name of List" type="string" className="shadow-md rounded-md bg-gray-300 w-full max-w-[900px] h-[50px] p-2 "></input>
                </div>
                <div className="w-full flex flex-col items-start lg:items-center gap-2 px-4 py-8 justify-center">
                    <p className="text-dark100_light900 paragraph-regular items-start">Description<span className="text-red-500">*</span></p>
                    <textarea placeholder="List Description" className="shadow-md rounded-md bg-gray-300 w-full max-w-[900px] h-[150px] p-2 "></textarea>
                </div>
                <div className="w-full flex flex-col items-start lg:items-center gap-2 px-4 py-8 justify-center">
                    <Button type="submit" className="bg-primary-600 dark:bg-primary-600 dark:text-light-900 font-semibold h-[50px] text-md w-full max-w-[900px]">Submit</Button>
                </div>
            </div>
        </div>
    )
}