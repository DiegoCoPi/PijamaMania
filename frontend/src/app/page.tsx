"use client";
import Cards_Initial from "@/cards/cards_initial"
import Menu_Bar from "@/menu_bar/menu_bar"
import User_Icon from "@/user_icon/user_icon"
import { useRouter } from "next/navigation"

function Initial (){

    const router = useRouter()
    
    return(
        <div>
            <div className="flex justify-center gap-20">
                <h1 className="title">PIJAMAMANIA</h1>
                <div>
                     <button 
                        onClick={()=>router.push("/logging")}
                        className="cursor-pointer"
                        >
                        <User_Icon/>
                    </button>
                </div>
            </div>
            <Menu_Bar/>
            <br/>
            <div className="ml-20 mr-20 mt-5 mb-5">
                <p className="paragraph text-3xl">
                    ¡Bienvenidos a Pijamamania, un lugar donde tus mayores fantasías y sueños se transforman 
                    en un traje cómodo, liviano y llamativo. Diseños pensados para acompañarte cada noche al 
                    dormir e incluso en tus sueños, para que vivas la magia desde el momento en que te pones tu
                    pijama favorita.
                </p>
            </div>
            <br/>
            <h2 className="title">Nuestro Catálogo inicial</h2>
            <Cards_Initial/>
        </div>
    )
}
export default Initial