"use client";
import User_Icon from "@/user_icon/user_icon";
//import BabiesChildren from "@/pijamas/babies_children/babies_children"
import Link from "next/link"
import { useRouter } from "next/navigation"

function Menu_Bar(){

    const router = useRouter()

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