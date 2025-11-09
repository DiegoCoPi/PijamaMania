"use client";
import Image from "next/image"
function Loading_gadet(){

    const character =[
        {src:"" , alt:""}
    ]

    return(
        <div className="bg-yellow-500 m-60 p-5 content-center-safe">
            <p>Cargando...</p><br/>
            <Image
            src=""
            alt="cargando..."
            />
        </div>
    )
}

export default Loading_gadet