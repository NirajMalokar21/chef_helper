export default async function RecipeList({ params }: { params: { recipe: string }}) {

    return (
        <div className="pt-28">
            <h1>{decodeURIComponent(params.recipe)}</h1>
        </div>
    )
}