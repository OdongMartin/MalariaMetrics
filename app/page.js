'use client'
import { useState } from 'react';

import Header from "@/components/Header";
import TopCard from '@/components/TopCards';
import Linechart from '@/components/LineChart';
import SideBar from "@/components/Sidebar";
import Facts from "@/components/MalariaFacts";


const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <>
      <div className="relative">
            <button 
                className="md:hidden fixed top-2 left-2 z-20 bg-gray-500 text-white px-2 py-2 rounded-md"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? 
                    <svg className='w-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                   : 
                    <svg className='w-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                }
            </button>
            <div className={`md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <SideBar />
            </div>

        <div className="md:ml-20 min-h-screen">
          <Header/>
          <TopCard />
          <div className=' grid md:flex'>
            <Linechart />
            <div className='hidden md:block'>
              <Facts />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home