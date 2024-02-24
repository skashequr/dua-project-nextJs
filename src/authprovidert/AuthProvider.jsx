"use client"
import { useState,createContext } from "react";

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
    const [categoryidContex,setCategoryidContex] = useState(1);
    const [searchQurey , setSearchQuery] = useState("");
    const authInfo = {
        categoryidContex,
        setCategoryidContex,
        searchQurey,
        setSearchQuery
      };
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
    };
    
    export default Authprovider;