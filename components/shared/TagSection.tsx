import React from 'react'
import { Badge } from '../ui/badge'
import Link from 'next/link'

interface TagSectionProps {
  tags: string[]
}

const TagSection = ({tags}: TagSectionProps) => {
  return (
    <div className='flex flex-row gap-3 justify-center items-start'>
      {tags.map((tag,i) => (
        <Link href='/' key={i}>
          <Badge className='bg-primary-500 md:max-w-[75px] max-md:max-w-[200px]'>
            <p className='body-semibold line-clamp-1'>{tag}</p>
          </Badge>
        </Link>
      ))}
    </div>
  )
}

export default TagSection