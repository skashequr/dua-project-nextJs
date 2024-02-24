import React from "react";

const Steps = () => {
  return (
    <div  className='p-3'>
      <ol class="relative text-[#1FA45B] border-s border-[#1FA45B] border-dashed dark:border-gray-700 dark:text-[#1FA45B]">
        
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-8 h-8 text-[#1FA45B] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          ◯
          </span>
          <h3 class="font-medium leading-tight">Account Info</h3>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-8 h-8 text-[#1FA45B] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          ◯
          </span>
          <h3 class="font-medium leading-tight">Review</h3>
        </li>
        <li class="ms-6">
          <span class="absolute flex items-center justify-center w-8 h-8 text-[#1FA45B] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          ◯
          </span>
          <h3 class="font-medium leading-tight">Confirmation</h3>
        </li>
      </ol>
    </div>
  );
};

export default Steps;
