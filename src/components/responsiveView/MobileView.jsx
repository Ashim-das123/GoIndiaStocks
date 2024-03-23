"use client"

import React, { useState } from 'react'
import DiscussCard from '../discussionCard/DiscussCard'
import MarketCard from '../marketcard/MarketCard'

const MobileView = ({ isLeftBarOpen }) => {

    const [openComponent, setOpenComponent] = useState('disscuss');


    return (
        <div className={`w-full absolute ${isLeftBarOpen ? '-z-10 ' : ''} `}>
            <div className=' text-[12px] font-bold text-white justify-around w-full flex items-center h-[50px] bg-slate-700'>
                <div className={`w-full h-full flex items-center justify-center cursor-pointer flex-1 text-center ${openComponent === 'disscuss' ? 'border-b-4 border-red-500' : ''}`} onClick={() => { setOpenComponent('disscuss') }}>DISSCUSSION FORUM</div>
                <div className='w-[1px] h-[50px] bg-white'></div>
                <div className={`w-full h-full flex items-center justify-center cursor-pointer flex-1 text-center ${openComponent === 'market' ? 'border-b-4 border-red-500' : ''}`} onClick={() => { setOpenComponent('market') }}>MARKET STORIES</div>
            </div>
            <div className=''>
                {
                    openComponent === 'disscuss' ?
                        <div className=' w-full flex-col'>
                            <DiscussCard />

                        </div>
                        :
                        <div className='' >
                            <MarketCard />
                            <MarketCard />

                        </div>

                }



            </div>
        </div>
    )
}

export default MobileView