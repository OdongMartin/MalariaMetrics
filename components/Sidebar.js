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
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href="/">
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20}/>
            </div>
          </Link>

          <span className='border-b-[1px] border-gray-400 w-full p-2'></span>

          <Link href="/">
            <div className='bg-gray-300 hover:bg-gray-400 my-4 p-3 rounded-lg inline-block'>
              <LuLayoutDashboard size={20}/>
            </div>
            {/* <span className='hidden hover:grid'>Dashboard</span> */}
          </Link>

          <Link href="/report-case">
            <div className='bg-gray-300 hover:bg-gray-400 my-4 p-3 rounded-lg inline-block'>
              <TbReport size={20}/>
            </div>
          </Link>

          <Link href="/">
            <div className='bg-gray-300 hover:bg-gray-400 my-4 p-3 rounded-lg inline-block'>
              <MdOutlineSchool size={20}/>
            </div>
          </Link>

          <Link href="/">
            <div className='bg-gray-300 hover:bg-gray-400 my-4 p-3 rounded-lg inline-block'>
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