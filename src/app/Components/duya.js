"use client"; // This line seems like a comment or directive specific to your setup
import { useContext, useEffect, useState } from "react";
import DuaCard from "./duaCard";
import NotifCard from "./notifCard";
import { AuthContext } from "@/authprovidert/AuthProvider";

const Duya = () => {
    const { categoryidContex } = useContext(AuthContext);
    const [duas, setDuas] = useState([]); // Initialize duas as an array

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
            setDuas(duas.categories); // Assuming 'duas' is an object with a 'categories' array
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [categoryidContex]);

    return (
        <div>
            <NotifCard />
            <div style={{ height: '590px', overflow: 'auto' }}>
                {duas.map((dua) => (
                    <DuaCard key={dua.id} props={dua} />
                ))}
            </div>
            {/* <DuaCard /> */}
        </div>
    );
};

export default Duya;
