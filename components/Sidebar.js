import Link from 'next/link'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { LuLayoutDashboard } from "react-icons/lu";
import { TbReport } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";

const SideBar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed top-0 left-0 h-full  w-14 md:w-20 p-4 bg-white border-r-[1px] flex flex-col justify-between z-10'>
        <div className='flex flex-col items-center'>
          <Link href="/">
            <div className=' text-white rounded-lg inline-block'>
              {/* <RxSketchLogo size={20}/> */}
              <Image src='/images/MalariaMetricsLogo.jpeg' width={50} height={50} alt="logo" className='rounded-lg hidden md:flex'/>
            </div>
          </Link>

          <span className='border-b-[1px] border-gray-400 w-full p-2'></span>

          <Link href="/">
            <div className='bg-gray-400 hover:bg-gray-500 my-4 p-3 rounded-lg inline-block' title="Dashboard">
              {/* <LuLayoutDashboard size={20}/> */}
              <svg className='w-5' viewBox="0 0 30 29.76563" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><g id="Interface-Solid"><g id="work-business-solid-performance"><path d="M29,27.76562H27v-16a2.002,2.002,0,0,0-2-2H23a2.002,2.002,0,0,0-2,2v16H18v-10a2.002,2.002,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v10H9v-4a2.002,2.002,0,0,0-2-2H5a2.002,2.002,0,0,0-2,2v4H1a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2Z"/><path d="M4.752,19.49561a1.24591,1.24591,0,0,0,.88379-.36622L20.49805,4.26709V6.25a1.25,1.25,0,0,0,2.5,0v-5a1.24991,1.24991,0,0,0-1.25-1.25h-5a1.25,1.25,0,0,0,0,2.5H18.73L3.86816,17.36182A1.25,1.25,0,0,0,4.752,19.49561Z"/></g></g></g></svg>
            </div>

          </Link>

          <Link href="/report-case">
            <div className='bg-gray-400 hover:bg-gray-500 my-4 p-3 rounded-lg inline-block' title="Report Case">
              <TbReport size={20}/>
            </div>
          </Link>

          <Link href="/information">
            <div className='bg-gray-400 hover:bg-gray-500 my-4 p-3 rounded-lg inline-block' title="Information">
              {/* <MdOutlineSchool size={20}/> */}
              <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>

            </div>
          </Link>

          <Link href="/">
            <div className='bg-gray-400 hover:bg-gray-500 my-4 p-3 rounded-lg inline-block' title="Settings">
              <FiSettings size={20}/>
            </div>
          </Link>

        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default SideBar