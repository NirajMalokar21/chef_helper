import React from 'react'
import Theme from './Theme'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center background-light900_dark300 px-16 py-6'>
        <div className='h1-bold'>
            <p className='text-dark100_light900'>Help<span className='text-primary-500'>Chef</span></p>
        </div>
        <div className='flex flex-row gap-6 justify-between items-center'>
            <Theme />
            Icon
        </div>
    </nav>
  )
}

export default Navbar