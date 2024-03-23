import React from 'react'
import Image from 'next/image'
import { VscBellDot } from "react-icons/vsc";
import { TbMessage2 } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdArrowDropDown } from "react-icons/md";


const SideBar = () => {
    return (
        <div className=' sm:text-[12px] sidebar relative flex h-screen bg-slate-700'>
            <div className='w-full lg:text-[16px]'>

                <div className='w-full border-solid border-b border-white-600  flex items-center justify-around'>
                    <div className='flex items-center gap-2 my-2'>
                        <Image src='/logoimg.png' alt='' width={40} height={40} className='rounded-full m-1' />
                        <p className='text-textColor'>Hello, User</p>
                    </div>

                    <VscBellDot color='white' size={20} />

                </div>
                <div>
                    <ul>
                        <li className='flex items-center gap-1 my-3 px-2'>
                            <TbMessage2 color='white' />
                            <span className='text-textColor'>Disscussion Fourm</span>
                            <MdArrowDropDown color='white' />
                        </li>
                        <li className='flex items-center gap-1 my-3 px-2'>
                            <HiCurrencyDollar color='white' />
                            <span className='text-textColor'>Market Stroies</span>
                            <MdArrowDropDown color='white' />
                        </li>
                        <li className='flex items-center gap-1 my-3 px-7'>

                            <span className='text-textColor'>Sentiment</span>

                        </li>
                        <li className='flex items-center gap-1 my-3 px-7'>

                            <span className='text-textColor'>Market</span>

                        </li>
                        <li className='flex items-center gap-1 my-3 px-7'>

                            <span className='text-textColor'>Sector</span>

                        </li>
                        <li className='flex items-center gap-1 my-3 px-7'>

                            <span className='text-textColor'>Watchlist</span>

                        </li>
                        <li className='flex items-center gap-1 my-3 px-7'>

                            <span className='text-textColor'>Sector</span>

                        </li>
                        <li className='flex items-center gap-1 my-3 px-7'>

                            <span className='text-textColor'>Events</span>

                        </li>
                        <li className='flex items-center gap-1 my-3 px-7'>

                            <span className='text-textColor'>News/interviews</span>

                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar



