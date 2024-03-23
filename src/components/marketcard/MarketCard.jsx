import React from 'react'
import Image from 'next/image'

const MarketCard = () => {
    return (
        <div className='w-full mb-5 border shadow-md'>
            <div className='w-full'>
                <Image className='demoimg' src='/demo.png' alt='' width={600} height={250} />
            </div>
            <div className='flex-col  p-4 text-[12px] lg:text-[16px] sm:text-[14px]'>
                <h1 className='text-slate-700 font-bold'>The Beautiful Night</h1>
                <p className='lg:text-[14px] sm:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo suscipit laborum cum incidunt aliquam neque temporibus atque repudiandae, alias expedita.</p>
            </div>
        </div>
    )
}

export default MarketCard