import React from 'react'
import Image from 'next/image'
import { CiShare2 } from "react-icons/ci";
import { BiComment } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { data } from '../../data/data';

const DiscussCard = () => {
    return (
        <>
            {
                data.map((item, idx) => (


                    <div key={idx} className=' DiscussCardContainer flex gap-[10px] shadow-md mb-5 border py-3'>

                        <div className='1/5 top-0'>
                            <Image src="/logoimg.png" alt='' width={50} height={50} />
                        </div>



                        <div className='h-full w-3/5 lg:w-4/6  sm:w-4/6 lg:text-[14px] pt-4'>
                            <div className='flex gap-2'>
                                <span className='font-medium'>{item.name}</span>
                                <div className='text-white bg-blue-500 text-[12px] flex items-center px-2 rounded-xl justify-center '>{item.sector}</div>
                            </div>
                            <div className='sm:text-[14px] lg:text-[16px] text-gray-500 font-normal'>
                                <p>{item.content}</p>
                            </div>
                            <div className=' sm:text-[12px] lg:text-[14px] flex items-center justify-between'>
                                <div className='flex items-center gap-1'>
                                    <BiLike />
                                    <span>{item.likes}k</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FiEye />
                                    <span>{item.views}k</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BiComment />
                                    <span>{item.comments}k comments</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <CiShare2 />
                                    <span>{item.share}</span>
                                </div>
                            </div>

                        </div>


                        <div className=' flex-1 pt-4'>
                            <h1 className=' text-center  lg:text-[14px] sm:text-[12px] text-blue-500 '>{item.time}</h1>
                        </div>

                    </div>


                ))
            }
        </>

    )
}

export default DiscussCard