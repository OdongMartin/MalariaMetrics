
import Header from "@/components/Header";
import TopCard from '@/components/TopCards';
import Linechart from '@/components/LineChart';
import SideBar from "@/components/Sidebar";
import Facts from "@/components/MalariaFacts";


const Home = () => {
  return (
    <>
      <SideBar/>
      <div className="ml-20">
        <Header/>
        <TopCard />
        <div className='flex'>
          <Linechart />
          <div className=''>
            <Facts />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home