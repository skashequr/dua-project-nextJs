'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Accordion } from "keep-react";
export const CategoriesCard = () => {
  // Fetch data for categories from http://localhost:3000/api/categories
  const [categories ,setCategories] = useState(null);
  const [catNumber , setCatNumber] = useState(null);
  const [subcategories , setSubcatgories] =useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
    .then((res) => res.json())
    .then((categories) => {
      setCategories(categories)
      console.log(categories);
      // ...
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    
  }, [])
  useEffect(() => {
    fetch(`http://localhost:5000/api/subcategories?cat_id=${catNumber}`)
      .then((res) => res.json())
      .then((subcategories) => {
        console.log(subcategories);
        // ...
        setSubcatgories(subcategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [catNumber]);
 
  return (
    <div className='gap-3 rounded-lg p-3 flex flex-col' style={{ height: '590px', overflow: 'auto' }}>
      {categories?.categories?.map((category) => (
        <div key={category?.id} onClick={()=>setCatNumber(category.cat_id)} >
          
         <div className="flex drop-shadow-md p-3  bg-[#E8F0F5]">
         <Image
            src="https://i.ibb.co/myR73C0/image.png"
            width={60}
            height={60}
            alt="Picture of the category"
            className="h-16 w-16 rounded-lg shadow-lg"
          />
          <div className="flex flex-col px-5 p-2">
            <h4 className="font-bold text-lg text-[#1FA45B]">{category.cat_name_en}</h4>
            <p className="mt-1 flex-1 font-light text-sm text-slate-500">
              {category.cat_icon}
            </p>
          </div>
         </div>
        </div>
      ))}
    </div>
  );
};
