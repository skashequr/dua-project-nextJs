"use client"; // This is not valid JavaScript syntax, so I removed it

import React, { useContext, useEffect, useState } from "react"; // Importing React and necessary hooks
import Image from "next/image"; // Importing Image component from Next.js
import { Accordion } from "keep-react"; // Importing Accordion component
import { AuthContext } from "@/authprovidert/AuthProvider"; // Importing AuthContext from auth provider module
import Steps from "./steps";

export const CategoriesCard = () => {
  const { categoryidContex, setCategoryidContex } = useContext(AuthContext); // Accessing category context from AuthContext
  const [categories, setCategories] = useState(null); // State for storing categories data
  const [catNumber, setCatNumber] = useState(null); // State for storing selected category number
  const [subcategories, setSubcategories] = useState(null); // State for storing subcategories data

  // Fetching categories data from API endpoint
  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Fetching subcategories data based on selected category number
  useEffect(() => {
    if (catNumber) {
      fetch(`http://localhost:5000/api/subcategories?cat_id=${catNumber}`)
        .then((res) => res.json())
        .then((subcategories) => {
          setSubcategories(subcategories);
        })
        .catch((error) => {
          console.error("Error fetching subcategories:", error);
        });
    }
  }, [catNumber]);

  return (
    <div
      className="gap-3 rounded-lg p-3 flex flex-col"
      style={{ height: "590px", overflow: "auto" }}
    >
      {/* Rendering categories data in accordion */}
      {categories?.categories?.map((category) => (
        <Accordion
          key={category?.id}
          className="w-[800px]"
          onClick={() => {
            setCatNumber(category.cat_id);
            setCategoryidContex(category.cat_id);
          }}
        >
          <Accordion.Panel>
            <Accordion.Container>
              <Accordion.Title>
                <div className="flex drop-shadow-md p-3 w-[350px] bg-[#E8F0F5]">
                  {/* Rendering category information */}
                  <Image
                    src="https://i.ibb.co/myR73C0/image.png"
                    width={60}
                    height={60}
                    alt="Picture of the category"
                    className="h-16 w-16 rounded-lg shadow-lg"
                  />
                  <div className="flex flex-col px-5 p-2">
                    <h4 className="font-bold text-lg text-[#1FA45B]">
                      {category.cat_name_en}
                    </h4>
                    <p className="mt-1 flex-1 font-light text-sm text-slate-500">
                      {category.cat_icon}
                    </p>
                  </div>
                </div>
              </Accordion.Title>
            </Accordion.Container>
            <Accordion.Content>
              <Steps></Steps>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ))}
    </div>
  );
};
