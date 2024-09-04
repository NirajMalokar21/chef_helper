import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const AddIngredient = () => {
  return (
    <div className="w-full max-w-[900px] flex flex-col gap-8 justify-start items-start">
        <div className='w-full flex flex-col md:flex-row justify-start items-start gap-4'>
            <div className='w-full flex flex-col gap-3 justify-start items-start'>
                <p className='paragraph-regular px-2 text-dark100_light900'>Ingredient<span className='text-red-500'>*</span></p>
                <Input type='string' placeholder='Ingredient Name' className='h-[50px] shadow-lg px-2' />
            </div>
            <div className='w-full md:w-[250px] flex flex-col gap-3 justify-start items-start'>
                <p className='paragraph-regular px-2 text-dark100_light900'>Quantity</p>
                <Input type='string' placeholder='Eg:200gm or 20ml' className='h-[50px] shadow-lg px-2' />
            </div>
        </div>
        <Button className='bg-primary-600 dark:bg-primary-600 dark:text-light-900 font-semibold h-[50px] text-md w-full max-w-[900px]'>Submit</Button>
    </div>
  )
}

export default AddIngredient