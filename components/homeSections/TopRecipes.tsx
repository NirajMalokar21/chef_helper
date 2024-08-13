import { topRecipes } from '@/constants'
import RecipeCard from '../shared/RecipeCard'

const TopRecipes = () => {
  return (
    <div className='flex flex-col  items-center justify-center py-8 w-full'>
        <p className='h2-bold border-b-4 border-primary-600 py-1'>Hot Recipes This Week</p>
        <div className="flex md:flex-wrap max-md:flex-col justify-center items-center 
        max-md:gap-8 md:gap-16 py-8 w-full px-8">
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