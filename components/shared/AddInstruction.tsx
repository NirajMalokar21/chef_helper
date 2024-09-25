"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface Instruction {
  text: string,
  timer: number | null
}

const AddInstruction = () => {
  const [instructions, setInstructions] = useState<Instruction[]>([])
  const [instructionText, setInstructionText] = useState('')
  const [timer, setTimer] = useState(0)
  const handleClick = () => {
    if(instructionText.length > 0) {
      setInstructions([...instructions, { text: instructionText, timer: timer || null}])
      setInstructionText('');
      setTimer(0)
    }
  }
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-8 justify-start items-center py-8">
        <div className='w-full flex flex-col md:flex-row justify-start items-start gap-4'>
            <div className='w-full flex flex-col gap-3 justify-start items-start'>
                <p className='paragraph-regular px-2 text-dark100_light900'>Instruction<span className='text-red-500'>*</span></p>
                <Input 
                  type='string' 
                  placeholder='Describe the step and press Add'
                  value={instructionText}
                  onChange={(e) => setInstructionText(e.target.value)}
                />
            </div>
            <div className='w-full md:w-[250px] flex flex-col gap-3 justify-start items-start'>
                <p className='paragraph-regular px-2 text-dark100_light900'>Timer</p>
                <Input 
                  type='number' 
                  placeholder='Add a timer'
                  value={timer}
                  onChange={(e) => setTimer(parseInt(e.target.value))}
                />
            </div>
        </div>
        <Button type='button'
          className='bg-primary-600 dark:bg-primary-600 dark:text-light-900 font-semibold h-[50px] text-md w-full'
          onClick={handleClick}
        >
          Add
        </Button>
        <div className='flex flex-col gap-3 justify-center items-center'>
          {
            instructions.map((item,i) => (
              <div key={i}>
                <p>{item.text}</p>
                <p>{item.timer}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default AddInstruction