"use client";
import { AuthToken } from "@/components/auth/auth";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { json } from "stream/consumers";

interface User{
    idNumber:number,
    name:string,
    lastname:string,
    birthdate:string,
    email:string,
    phone:number,
    address:string,
    password:string,
    confpass:string,       
}

export default function UserProfile(){

    //Constantes de ruta, ussuario y de carga
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

   useEffect(()=>{

        //Llamar la función de verificación del toke y traer los datos del usuario  desde la BD
        const storedUser = localStorage.getItem("user")
        const token = localStorage.getItem("token")

        if(!AuthToken() || !storedUser){
            alert("Usuario no registrado")
            router.push("/login")
            return
        }

        const {idNumber}= JSON.parse(storedUser)

        //Fetch desde el backend

        const fetchUser= async()=>{

            try{
                
                const res = await fetch(`http://localhost:3000/user/${idNumber}`,{
                    headers:{
                        Autorization:`Bearer ${token}`
                    }
                })
                if(!res.ok) throw new Error("usuario no autorizado")

                const data = await res.json();
                setUser(data);
            }
            catch{
                localStorage.clear()
                router.push("/login")
            }
            finally{
                setLoading(false)
            }

        }
        fetchUser()
   },[router])
    
    return(
        <div>
            
        </div>
    )
}