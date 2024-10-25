import AddIngredient from "@/components/shop-listComps/AddIngredient";
import ShopList from "@/components/shop-listComps/ShopList";
import { Button } from "@/components/ui/button";
import { getShopListById } from "@/lib/actions/shopList.action";

export default async function RecipeList({ params }: { params: { id: string }}) {

    const id = decodeURIComponent(params.id)

    const shopList = await getShopListById(id)
    console.log("id is: ", id)
    console.log("shopping List is: ", shopList)

    return (
        <div className="pt-28 flex flex-col items-center px-12">
            <h1 className="text-2xl font-bold pb-12">{shopList.title}</h1>
            <AddIngredient id={id} />
            <ShopList ingredients={shopList.ingredients}/>
            <Button className="w-full max-w-[1200px] h-[50px] font-semibold dark:text-light-900 text-md bg-red-700">
                Delete List
            </Button>
        </div>
    )
}