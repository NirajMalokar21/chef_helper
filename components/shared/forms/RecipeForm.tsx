"use client"

import AddIngredient from "@/components/shop-listComps/AddIngredient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AddInstruction from "../AddInstruction"

const RecipeForm = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full max-w-[1200px] pt-12">
        <form className="w-full flex flex-col justify-start items-center gap-6">
            <div className="flex flex-col gap-2 w-full">
                <label className="text-dark100_light900 p-2">Title<span className="text-red-500">*</span></label>
                <Input type="text" placeholder="Title of your recipe" className="
                w-full p-2"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label className="text-dark100_light900 p-2">Description</label>
                <Input type="text" placeholder="Description of your recipe" className="bg-gray-300 dark:bg-slate-950
                w-full p-2"/>
            </div>
            <div className="flex flex-col gap-2 w-full pb-12">
                <label className="text-dark100_light900 p-2">Image</label>
                <Input type="file" placeholder="Enter a reference image" className="bg-gray-300 dark:bg-slate-950
                w-full p-2"/>
            </div>
            <AddIngredient />
            <AddInstruction />
            <div className="flex flex-col gap-2 w-full pb-12">
                <label className="text-dark100_light900 p-2">Time needed to cook<span className='text-red-500'>*</span></label>
                <Input type="number" placeholder="Enter number of minutes" className="bg-gray-300 dark:bg-slate-950
                w-full p-2"/>
            </div>
            <Button type="submit" className="py-4 mb-4">Submit</Button>
        </form>
    </div>
  )
}

export default RecipeForm