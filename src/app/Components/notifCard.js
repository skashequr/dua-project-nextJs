import React from 'react';
import { IoMdSearch } from "react-icons/io";
const NotifCard = () => {
    return (
        <div>
            <div className="flex items-center justify-between w-full p-4">
                <div className="relative flex items-center justify-center text-gray-600">
                    <div>
                    <input type="search" name="search" placeholder="Search" className="bg-white h-14 w-96 px-5 pr-10 rounded-md text-sm focus:outline-none"/>
                    </div>
                    <div>
                    <button type="submit" className="absolute h-full right-0 top-0 bg-[#F3F4F6]">
                        <IoMdSearch className='h-full w-10 rounded-sm p-1'></IoMdSearch>
                    </button>
                    </div>
                </div>
                <div className="w-full"></div>
            </div>
            <div className="flex items-center justify-between w-full p-4 bg-white rounded-2xl">
                <div className="w-full">
                    <span className="text-sm text-[#1FA45B]">
                    Section:  
                    </span>
                        <span>
                            lodding.........
                        </span>
                    
                </div>
 
            </div>
        </div>
    );
};

export default NotifCard;
