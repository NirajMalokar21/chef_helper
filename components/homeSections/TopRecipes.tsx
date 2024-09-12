import { topRecipes } from '@/constants'
import RecipeCard from '../shared/cards/RecipeCard'

const TopRecipes = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-8 max-w-[1500px] w-full rounded-xl mt-12
    mx-auto'>
        <p className='h2-bold border-b-4 border-primary-500 py-1 text-dark100_light900'>Hot Recipes This Week</p>
        <div className="flex md:flex-wrap max-md:flex-col justify-center items-center 
        max-md:gap-8 md:gap-16 py-12 w-full px-8">
          {topRecipes.map((item) => (
            <RecipeCard
              key={item.id}
              tags={item.tags}
              title={item.title}
              imgUrl={item.imgURL}
              chefName='Niraj Malokar'
              chefPic='/images/doof.png'
            />
          ))}
        </div>
    </div>
  )
}

export default TopRecipes