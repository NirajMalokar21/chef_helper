"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { updateIngredients } from '@/lib/actions/shopList.action'
import { Ingredient } from '@/lib/actions/shared.types'


const AddIngredient = (id: string) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [ingredientText, setIngredientText] = useState('')
  const [quantity, setQuantity] = useState('')
  const handleClick = () => {
    if(ingredientText.length > 0) {
      setIngredients([...ingredients, { name: ingredientText, quantity: quantity || null, owned: false}])
      setIngredientText('');
      setQuantity('')
    }
  }

  const handleSave = async () => {
    await updateIngredients({
      id: id,
      ingredients: ingredients
    })
  }
  return (
    // Add an option to cut it out whn it is not saved
    <div className="w-full max-w-[1200px] flex flex-col gap-8 justify-start items-center">
        <div className='w-full flex flex-col md:flex-row justify-start items-start gap-4'>
            <div className='w-full flex flex-col gap-3 justify-start items-start'>
                <p className='paragraph-regular px-2 text-dark100_light900'>Ingredient<span className='text-red-500'>*</span></p>
                <Input 
                  type='string' 
                  placeholder='Ingredient Name'
                  value={ingredientText}
                  onChange={(e) => {setIngredientText(e.target.value)}}
                />
            </div>
            <div className='w-full md:w-[250px] flex flex-col gap-3 justify-start items-start'>
                <p className='paragraph-regular px-2 text-dark100_light900'>Quantity</p>
                <Input 
                  type='string' 
                  placeholder='Eg:200gm or 20ml'
                  value={quantity}
                  onChange={(e) => {setQuantity(e.target.value)}}
                />
            </div>
        </div>
        <div className='w-full flex flex-row  gap-4 max-sm:flex-col'>
          <Button
            type='button'
            className='bg-primary-600 dark:bg-primary-600 dark:text-light-900 font-semibold h-[50px] text-md w-full'
            onClick={handleClick}
          >
            Add
          </Button>
          <Button
            type='button'
            className='bg-transparent dark:bg-transparent dark:text-light-900 font-semibold h-[50px] text-md w-full text-dark border-2 hover:bg-primary-100 border-primary-600'
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
        <div>
          <ul>
            {
              ingredients.map((item,i) => (
                <li key={i}>{item.quantity} {item.name}</li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default AddIngredient