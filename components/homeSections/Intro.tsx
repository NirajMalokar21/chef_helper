import React from 'react'
import GlobalSearch from '../shared/search/GlobalSearch'

const Intro = () => {
  return (
    <section className="pt-28 flex flex-col gap-12 justify-start items-start w-full ml-16 mr-24">
        <div className="flex flex-col justify-center items-center gap-4 text-dark100_light900  pt-12">
            <h1 className="h1-bold text-5xl">
                Welcome to Your Ultimate Cooking Companion!
            </h1>
            <h2 className="h2-bold text-3xl pt-2">
                Everything You Need, All in One Place.
            </h2>
            <GlobalSearch />
            <p className="lg:px-52 pt-8">
                Discover a world of culinary creativity with our all-in-one cooking companion. Whether 
                you&apos;re planning your meals with our smart shopping list, getting personalized recipe 
                suggestions from our AI, or sharing your favorite dishes with a vibrant community, we&apos;ve 
                got everything you need to elevate your cooking experience.
            </p>
        </div>
        <div className='flex flex-col justify-center items-center bg-primary-100 mt-12'>
            Hot Recipes
        </div>
    </section>
  )
}

export default Intro