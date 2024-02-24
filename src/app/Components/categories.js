"use client";

import { useContext } from "react";
import { CategoriesCard } from "./categoriesCard";
import { AuthContext } from "@/authprovidert/AuthProvider";

const Categories = (e) => {
  const {setSearchQuery} = useContext(AuthContext);
  const getSearchQuery = e =>{

    e.preventDefault();
    setSearchQuery(e.target.search.value);
  }
  return (
    <div >
        <h2 className="mb-5 font-extrabold p-2 text-2xl">Dua Page</h2>
      <div className="bg-white">
      <div className="p-4 bg-[#1FA45B] rounded rounded-t-md">
        <h6 className="text-center">Categories</h6>
      </div>
      <div className="p-3 relative mx-auto text-gray-600">
        <form onSubmit={getSearchQuery}>
        <input
          className="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z" fill="#0D0D0D"/></svg>
        </button>
        </form>
      </div>
      </div>
      <div className="bg-white">
        <CategoriesCard ></CategoriesCard>
      </div>
    </div>
  );
};

export default Categories;
