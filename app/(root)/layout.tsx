import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/Sidebar"

const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
      <main className='background-light850_dark100 relative'>
        <Navbar />
        <section className="flex min-h-screen flex-1 flex-col ">
          <Sidebar />
          <div className="mx-auto w-full">
            {children}
          </div>
        </section>
      </main>
    )
  }
  
  export default Layout