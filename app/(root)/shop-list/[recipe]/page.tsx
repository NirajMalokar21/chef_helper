import AddIngredient from "@/components/shop-listComps/AddIngredient";
import ShopList from "@/components/shop-listComps/ShopList";

export default async function RecipeList({ params }: { params: { recipe: string }}) {

    return (
        <div className="pt-28 flex flex-col items-center px-12">
            <h1 className="text-2xl font-bold pb-12">{decodeURIComponent(params.recipe)}</h1>
            <AddIngredient />
            <ShopList />
        </div>
    )
}