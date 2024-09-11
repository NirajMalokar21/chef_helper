import React from 'react'
import { Checkbox } from '../ui/checkbox'

// !Add breadcrumb
// !Add backend for adding ingredient to list
// Customize the checkbox better


interface IngredientProps {
    name: string,
    quantity: string
}

const Ingredient = ({ name, quantity }: IngredientProps) => {
    return (
        <div className='flex flex-row gap-2 justify-center items-center px-2 py-6'>
            <Checkbox />
            <p className='paragraph-regular text-dark100_light900'>{quantity} {name}</p>
        </div>
    )
}

const ShopList = () => {
  const ingredients = [
    {
        name: "Chicken",
        quantity: "500gm"
    },
    {
        name: "Onions",
        quantity: "4"
    },
    {
        name: "Rice",
        quantity: "500gm"
    },
    {
        name: "Coriander",
        quantity: "250gm"
    }
  ]
  return (
    <div className='flex flex-col justify-start items-start w-full max-w-[900px] min-h-screen'>
        <h2 className='py-12 text-xl font-bold text-dark100_light900'>Ingredients to Buy</h2>
        {
            ingredients.map((item,i) => (
                <Ingredient name={item.name} quantity={item.quantity} key={i} />
            ))
        }
    </div>
  )
}

export default ShopList