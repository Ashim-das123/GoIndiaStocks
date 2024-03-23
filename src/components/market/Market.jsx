import React from 'react'
import MarketCard from '../marketcard/MarketCard'
const Market = () => {
    return (
        <div className='  w-2/6 h-screen p-2'>
            <div className='flex items-center justify-center text-red-500 font-bold w-fit bg-gray-300 mb-5'>
                <h1 className='px-3'>MARKET STORIES</h1>
            </div>
            <div className='mobilemarket' >
                <MarketCard />
                <MarketCard />

            </div>

        </div>
    )
}

export default Market

