"use client";

// ¡IMPORTANTE!: Asegúrate que diga 'next/navigation'
import { useRouter } from "next/navigation"; 
import Cards_Initial from "@/components/cards/cards_initial"
import { useEffect, useState } from "react";
import Loading_gadet from "../loading";

/*interface User{
    idNumber:number;
    name:string;
    lastname:string;
    phone:number;
}*/
export default function Profileborad() {
    const router = useRouter()
    /*
    //Variables que guardan si el ussuario ha ingresado a su cuenta junto con sus datos
    const[loading, setLoading] = useState(true)
    const[userData, setUserData] =useState<User | null>(null)

    useEffect(()=>{
        
        const token = localStorage.getItem("token")

        if(!token){
           // router.push("/login")
            return 
        }

        //Constante para traer los datos desde la bases
        
        const userFetch = async()=>{
            try{
                const response = await fetch(`http://localhost:3000/user/${idNumber}`,{
                    method:"GET",
                    headers:{
                        "Content-Type": "application/json",
                        // Enviamos el token para que el backend sepa quién es el usuario
                        "Authorization": `Bearer ${token}`
                    }
                })

                if(response.ok){
                    const data:User = await response.json()
                    setUserData(data)   
                }
                else{
                    localStorage.removeItem("token")
                    //router.push("/login")
                }
            }
            catch (error){
                console.error("Error al traer datos:", error);
            } finally {
                setLoading(false);
            }
        };
        userFetch();
    },[router])

    if(loading){
        return <Loading_gadet/>
    }*/

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
                            //value={userData?.name}
                            className="bg-white"
                            //onChange={(e)=>setUserData({...userData!,name:e.target.value})}
                            />
                            {/*!userData?.name &&(
                                <p>Debe ingresar un nombre por lo menos </p>
                            )*/}
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
                    {/*Columna 2*/}
                    <div>
                        <div>
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