"use client";
//import BabiesChildren from "@/pijamas/babies_children/babies_children"
import Link from "next/link"
import { useRouter } from "next/navigation"

function Menu_Bar(){

    const router = useRouter()

    return(
        <nav className="flex justify-center m-10 text-4xl">
            <div className="ml-10 mr-10 mt-10 p-8 bg-purple-900 rounded-full">
                <ul className="flex space-x-20 text-[rgba(255,215,0,1)]">
                    <li><a onClick={()=>router.push("/")} className="hover">Inicio</a></li>
                    <li><a onClick={()=>router.push("/babies-children")} className="hover">Bebés-niños y niñas</a></li>
                    <li><a onClick={()=>router.push("/teenegers-adults")} className="hover">Adolescentes-Adultos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu_Bar