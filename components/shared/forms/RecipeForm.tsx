"use client"

import AddIngredient from "@/components/shop-listComps/AddIngredient"
import { Button } from "@/components/ui/button"

const RecipeForm = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full max-w-[1200px] pt-12">
        <form className="w-full flex flex-col justify-start items-center gap-6">
            <div className="flex flex-col gap-2 w-full">
                <label className="text-dark100_light900 p-2">Title<span className="text-red-500">*</span></label>
                <input type="text" placeholder="Title of your recipe" className="bg-gray-300 dark:bg-slate-950
                w-full h-[60px] rounded-md p-2"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label className="text-dark100_light900 p-2">Description</label>
                <input type="text" placeholder="Description of your recipe" className="bg-gray-300 dark:bg-slate-950
                w-full h-[60px] rounded-md p-2"/>
            </div>
            <div className="flex flex-col gap-2 w-full pb-12">
                <label className="text-dark100_light900 p-2">Image</label>
                <input type="file" placeholder="Enter a reference image" className="bg-gray-300 dark:bg-slate-950
                w-full h-[60px] rounded-md p-2"/>
            </div>
            <AddIngredient />
            <Button type="submit">Submit</Button>
        </form>
    </div>
  )
}

export default RecipeForm