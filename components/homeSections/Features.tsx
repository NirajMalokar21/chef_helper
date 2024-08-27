"use client"
import { features } from "@/constants"
import { useTheme } from "@/context/ThemeProvider"
import Image from "next/image"

const Features = () => {
  const { mode, setMode } = useTheme()
  return (
    <div className="flex flex-col justify-center items-center pt-2 pb-12">
      <h2 className='h2-bold border-b-4 border-primary-500 py-1 text-dark100_light900'>Features</h2>
      <div className="md:hidden max-sm:flex pt-4">
        <div className="flex flex-col w-full items-center-justify-center gap-8">
          {
            features.map((item)=>(
              <div key={item.id} className="flex flex-col justify-start items-start gap-2 px-4">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="rounded-full bg-primary-100 p-2 items-center">
                    <Image
                      src={item.imgUrl}
                      alt="ItemImg"
                      width={30}
                      height={30}
                      className={`${item.title === 'Grocery List' ? mode === 'dark' ? 'invert' : '' :  mode === 'dark' ? '' : 'invert'}`}
                    />
                  </div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className=" pt-8 hidden md:flex flex-wrap w-full justify-center items-center gap-8">
        {
          features.map((item)=>(
            <div key={item.id} className="flex flex-col justify-center items-start gap-2 px-4 max-w-[300px]">
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="rounded-full bg-primary-100 p-2 justify-center items-center">
                  <Image
                    src={item.imgUrl}
                    alt="ItemImg"
                    width={30}
                    height={30}
                    className={`${item.title === 'Grocery List' ? mode === 'dark' ? 'invert' : '' :  mode === 'dark' ? '' : 'invert'}`}
                  />
                </div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
              <p>{item.description}</p>
            </div>
            ))
          }

      </div>
    </div>
  )
}

export default Features