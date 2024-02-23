"use client"; // Not sure what this line does, assuming it's a comment or directive specific to your setup
import { useContext, useEffect, useState } from "react";
import DuaCard from "./duaCard";
import NotifCard from "./notifCard";
import { AuthContext } from "@/authprovidert/AuthProvider";

const Duya = () => {
    const { categoryidContex } = useContext(AuthContext);
    const [duas , setDuas] = useState({})
    console.log(categoryidContex);

    useEffect(() => {
        // Assuming you're using JSON Web Tokens (JWT) for authentication
        const token = localStorage.getItem("token"); // Retrieve token from localStorage or wherever you store it

        fetch(`http://localhost:5000/api/duas?cat_id=${categoryidContex}`, {
            // headers: {
            //     "Authorization": `Bearer ${token}` // Include the token in the Authorization header
            // }
        })
        .then((res) => res.json())
        .then((duas) => {
            console.log(duas);
            setDuas(duas)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [categoryidContex]);

    return (
        <div>
            <NotifCard />
            <div style={{ height: '590px', overflow: 'auto' }} >
            {
                duas?.categories?.map((dua) => (<DuaCard key={dua.id}></DuaCard>))
            }
            </div>
            {/* <DuaCard /> */}
        </div>
    );
};

export default Duya;
