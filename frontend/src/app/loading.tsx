"use client";
import Image from "next/image"
import { useEffect, useState } from "react";



function Loading_gadet(){

    const images =[
        {src:"/img/sonic.png" , alt:"sonic"},
        {src:"/img/princesa_peach.png" , alt:"princesa peach"},
        {src:"/img/mario_luigi.png" , alt:"mario luigi"},
        {src:"/img/minnie_mouse.png" , alt:"minnie mouse"}
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev+1)%images.length);
        },500);

        return()=>clearInterval(interval);
    },[images.length])

    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-violet-900 text-9xl mt-4">Cargando...</h1><br/>
            <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={300}
            height={300}
            className="transition-opacity duration-700 ease-in-out"
            />
        </div>
    )
}

export default Loading_gadet