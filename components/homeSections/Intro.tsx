import React from 'react'
import GlobalSearch from '../shared/search/GlobalSearch'

const Intro = () => {
  return (
    <section className="pt-28 flex flex-col max-sm:gap-6 md:gap-12 justify-center items-center w-full 
    lg:ml-16 lg:mr-24 md:ml-6 md:mr-6 max-sm:ml-3 max-sm:mr-3">
        <div className="flex flex-col justify-center text-center items-center max-sm:gap-2 md:gap-4 text-dark100_light900  
        max-sm:pt-6 md:pt-12">
            <div className='flex flex-col justify-center items-center gap-4 pb-4'>
                <h1 className="h1-bold max-sm:text-3xl md:text-4xl lg:text-5xl">
                    Welcome to Your Ultimate Cooking Companion!
                </h1>
                <h2 className="h2-bold max-sm:text-xl md:text-2xl lg:text-3xl pt-2">
                    Everything You Need, All in One Place.
                </h2>
            </div>
            <GlobalSearch />
        </div>
    </section>
  )
}

export default Intro