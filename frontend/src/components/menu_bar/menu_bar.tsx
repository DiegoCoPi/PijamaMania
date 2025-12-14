"use client";
import User_Icon from "@/components/user_icon/user_icon";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

function Menu_Bar(){

    const router = useRouter()
    const [user,setuser]=useState<any>()

    useEffect(()=>{
        const storeUser = localStorage.getItem("user");
        if(storeUser){
            setuser(JSON.parse(storeUser));
        }
    },[])
    

    return(
        <nav className="flex justify-center">
            <div className="flex justify-center p-4 w-full bg-blue-600">
                <ul className="flex space-x-20 text-[rgba(255,215,0,1)]">
                    <li><a onClick={()=>router.push("/")} className="hover text-xl">Inicio</a></li>
                    <li><a onClick={()=>router.push("/babies-children")} className="hover text-xl">Bebés-niños y niñas</a></li>
                    <li><a onClick={()=>router.push("/teenegers-adults")} className="hover text-xl">Adolescentes-Adultos</a></li>
                    <li><a onClick={()=>router.push("/login")}><User_Icon/></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu_Bar