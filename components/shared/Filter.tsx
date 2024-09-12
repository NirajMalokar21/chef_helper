import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
  } from "@/components/ui/select"
  

const Filter = () => {
  const filters = [
    {
        value: 'top',
        name: 'Top'
    },
    {
        value: 'new',
        name: 'Newest'
    },
    {
        value: 'old',
        name: 'Oldest'
    },
    {
        value: 'view',
        name: 'Most Viewed'
    },
  ]
  return (
    <Select>
        <SelectTrigger className={`bg-gray-300 dark:bg-slate-950 text-dark500_light700 relative flex px-5 py-2.5 dark:border-none w-full max-w-[250px] h-[60px] rounded-full`}>
            <div className='line-clamp-1 flex-1 text-left'>
                <SelectValue placeholder="Select a filter" />
            </div>    
            
        </SelectTrigger>
        <SelectContent className='text-dark500_light700 small-regular bg-gray-300 dark:bg-slate-950 border-none w-full max-w-[200px]'>
            <SelectGroup>
                {filters.map((filter) => {
                    return(
                        <SelectItem 
                            key={filter.value}
                            
                            className='focus:bg-light-800 dark:focus:bg-dark-400 cursor-pointer'
                            value={filter.value}>
                                {filter.name}</SelectItem>
                            
                    )
                })}
            </SelectGroup>                 
        </SelectContent>
    </Select>

  )
}

export default Filter