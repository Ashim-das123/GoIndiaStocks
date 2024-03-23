import React from 'react'
import DiscussCard from '../discussionCard/DiscussCard'
const Discussion = () => {
    return (
        <>
            <div className='  disscussConatiner w-4/6  p-2'>
                <div className='text-red-500 font-bold w-fit bg-gray-300 mb-3 cursor-pointer'>
                    <h1 className='px-3'>DISSCUSSION FOURM</h1>
                </div>
                <div className='mobilediscussion  flex-col'>
                    <DiscussCard />
                    {/* <DiscussCard />
                    <DiscussCard /> */}

                </div>
            </div>

        </>

    )
}

export default Discussion
