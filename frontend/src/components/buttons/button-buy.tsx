"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DefaultContext } from "react-icons";

interface JWTData{
    idNumber:number,
    email:string,
    phone:string
}

function Buy_Button(){

    const router = useRouter()
    const [logged, setLogged] = useState<JWTData | null>(null)

    const handleClick = async()=>{

        const token = localStorage.getItem("token");

        if(!token){
            alert("Por favor ingrese a su cuenta")
            router.push("/login")
            return
        }

        try{
            const payload = JSON.parse(atob(token.split(".")[1]))
            //verificar la cigencia del token

            if(payload.exp * 1000 < Date.now()){
                localStorage.removeItem("token")
                alert("Sección expirada")
                router.push("/login")
                return
            }
            else{
                setLogged({
                    idNumber:payload.idNumber,
                    email:payload.email,
                    phone:payload.phone
                })
            }

            //Detectar que el ususario haya ingresado el profucto al carro de compras

            


        }
        catch{
            alert("Acesso agotado")
            router.push("/login")
        }
        
    }    

    //Se detecta si la cantidad es igual a 0
    return(
       <div>
            <div className="flex justify-center">
                <button
                type="button"
                onClick={handleClick} 
                className="car-button flex justify-center gap-2">
                    <Image
                    src="/signs/carrito-de-compras.png"
                    alt="carrito"
                    height={30}
                    width={30}
                    />
                    <h2 className="text-xl">Agregar</h2>
                </button>
            </div>
            {/*Overwirte o superposición*/}
       </div>
    )
}

export default Buy_Button

function setLogged(arg0: { idNumber: any; email: any; phone: any; }) {
    throw new Error("Function not implemented.");
}
