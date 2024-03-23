
import React from 'react';
import { IoIosPlay } from "react-icons/io";

const SideBtn = ({ toggleLeftBar, isLeftBarOpen }) => {
    return (
        <div>
            <div className={` bg-slate-800 w-fit h-[80px] flex items-center justify-center mt-[300px] cursor-pointer fixed z-10 ${isLeftBarOpen ? 'active' : ''}`} onClick={toggleLeftBar}>
                <IoIosPlay color='white' />
            </div>
        </div>
    );
};

export default SideBtn;
