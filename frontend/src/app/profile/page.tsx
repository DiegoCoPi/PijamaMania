"use client";

// ¡IMPORTANTE!: Asegúrate que diga 'next/navigation'
import { useRouter } from "next/navigation"; 
import Cards_Initial from "@/components/cards/cards_initial"
import { useEffect, useState } from "react";
import Loading_gadet from "../loading";

interface User{
    name:string;
    lastname:string;
    phone:number;
}
export default function Profileborad() {
    const router = useRouter();

    const[loading, setLoading] = useState(true)
    const[islogged, setIsLogged]=useState(false)

    useEffect(()=>{

        //Comprobación del token
        const token = localStorage.getItem("token")

        if(!token){
            router.push("/login")
        }
        else{
            setLoading(false)
            setIsLogged(true)

        }
    },[router])

    //Mientras carga
    if(loading){
        return <Loading_gadet/>
    }

    return (
        <>
            <h2 className="title">Perfil del usuario</h2>
            <div className="flex justify-center">
                <form className="profile-form">
                    {/*Columna 1 Nombres y Apellidos */}
                    <div className="flex flex-col gap-4">
                        {/*Nombres */}
                        <div className="flex gap-4">
                            <label>Nombre(s):</label>
                            <input
                            type="text"
                            className="bg-white"
                            />
                        </div>
                        {/*Apellidos*/}
                        <div className="flex gap-4">
                            <label>Apellido(s):</label>
                             <input
                            type="text"
                            className="bg-white"
                            />
                        </div>
                    </div>
                    <br/>
                    {/*Botones */}
                    <div className="flex flex-row gap-30">
                         <button onClick={()=>router.push("/")}
                            className="bg-white text-blue-800 cursor-pointer">
                            Modificar
                        </button>
                        <button onClick={()=>router.push("/")}
                            className="bg-white text-blue-800 cursor-pointer">
                            Volver a Inicio
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}