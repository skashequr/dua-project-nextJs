import React from "react";

const Steps = ({subcat}) => {
    console.log(subcat);
  return (
    <div  className='py-3 text-[#1FA45B] border-s border-[#1FA45B] border-dashed'>
      <ol class="relative text-[#1FA45B]  dark:border-gray-700 dark:text-[#1FA45B]">
        
        <li class="mb-2 ms-6">
          <span class="absolute flex items-center justify-center  w-8 h-8 text-[#1FA45B] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          ◯
          </span>
          <h3 class="font-medium leading-tight">{subcat?.subcat_name_en}</h3>
        </li>
        
      </ol>
    </div>
  );
};

export default Steps;
