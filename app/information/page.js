'use client'

import SideBar from '@/components/Sidebar'
import Information from '@/components/information';
import { useState } from 'react';

const MalariaInfo = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="">
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
            <div className="md:ml-20">
                <Information />
            </div>
        </div>
    );
};

export default MalariaInfo