import RecipeForm from "@/components/shared/forms/RecipeForm";

export default async function PostRecipe () {
    return (
        <section className="pt-28 items-center justify-center flex flex-col px-8 w-full">
            <h1 className="text-2xl font-bold text-dark100_light900 pt-8">Post a Recipe</h1>
            <RecipeForm />
        </section>
    )
}