import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const AddInstruction = () => {
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-8 justify-start items-center py-8">
        <div className='w-full flex flex-col md:flex-row justify-start items-start gap-4'>
            <div className='w-full flex flex-col gap-3 justify-start items-start'>
                <p className='paragraph-regular px-2 text-dark100_light900'>Instruction<span className='text-red-500'>*</span></p>
                <Input type='string' placeholder='Describe the step and press Add'/>
            </div>
            <div className='w-full md:w-[250px] flex flex-col gap-3 justify-start items-start'>
                <p className='paragraph-regular px-2 text-dark100_light900'>Timer</p>
                <Input type='number' placeholder='Add a timer'/>
            </div>
        </div>
        <Button className='bg-primary-600 dark:bg-primary-600 dark:text-light-900 font-semibold h-[50px] text-md w-full'>Add</Button>
    </div>
  )
}

export default AddInstruction