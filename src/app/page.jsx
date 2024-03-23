"use client"

import React, { useState, useEffect } from 'react'
import Discussion from '@/components/discussion/Discussion'
import Market from '@/components/market/Market'
import SideBtn from '@/components/sidebtn/SideBtn'
import SideBar from '@/components/sidebar/SideBar'
import MobileView from '@/components/responsiveView/MobileView'

const Page = () => {
  const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);


  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 20000
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const toggleLeftBar = () => {
    setIsLeftBarOpen(!isLeftBarOpen);
  };



  return (
    <div className='h-screen relative flex'>
      <div className={`absolute resposivediv ${isLeftBarOpen ? 'w-[250px] ' : ''}`}>
        <SideBtn toggleLeftBar={toggleLeftBar} isLeftBarOpen={isLeftBarOpen} />

        {isLeftBarOpen && <SideBar />}
      </div>
      {
        windowWidth < 646 ?


          <MobileView isLeftBarOpen={isLeftBarOpen} />
          :
          <>
            <Discussion />
            <Market />
          </>
      }




    </div>
  )
}

export default Page

