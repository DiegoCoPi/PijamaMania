"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

function notFound (){

    const [seconds, setSeconds] = useState(10)
    const router = useRouter()

    
    useEffect(()=>{

        //Condicional para redirigir a la pagina inicial
        if(seconds<=0){
            router.push("/");
            return
        }

        //Activar el temporizador para la cuanta regrsiva

        const timer = setInterval(()=>setSeconds((s)=>s-1),1000);
        return () => clearInterval(timer);

    },[seconds, router])

    return(
       <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-red-500 text-9xl mt-4">
            ERROR 404
            </h1><br/>
            <p className="text-red-900 text-6xl">¡UPS! Pagina no disponible</p>
            <Image
            src="/img/luigi_asustado.png"
            alt="luigi"
            width={300}
            height={300}
            className="transition-opacity duration-700 ease-in-out"
            />
            <div>
                {seconds > 0?(
                    <p>Sera redirigido a la pagina de inicio en {seconds} segundos</p>
                ):(<p>Redirigiendo...</p>)}
            </div>
        </div>
        
    )
}

export default notFound