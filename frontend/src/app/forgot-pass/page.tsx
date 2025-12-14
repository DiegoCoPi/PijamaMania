"use client";
import { useRouter } from "next/navigation";
import { useState } from "react"

function Forgot_Pass(){
    
    const[email, setEmail] = useState<string>("")
    const[showModal, setShowModal] = useState(false)
    
    const sendRecover = ()=>{
        if(!email.trim()){return alert("Ingrese una dirección de correo electrónico")}

        setShowModal(true)
    }

    const route = useRouter()

    return(
        <div>
           <h1 className="title">Recuperación de contraseña</h1>
            <div className="flex justify-center">
                <form className="bg-[linear-gradient(45deg,rgba(3,154,247,0.83)_25%,rgba(26,2,69,0.86)_50%,rgba(3,154,247,0.83)_75%,rgba(26,2,69,0.86)_100%)] w-max
                p-3">
                    {/*Casilla de Correo Elctrónico*/}
                    <div className="flex flex-row gap-4">
                        <label className="text-yellow-400">Correo/telefóno:</label>
                        <div>
                            <input
                            type="text"
                            className="bg-[rgb(249,0,149)] rounded-3xl border-[3px] border-blue-700"
                            />
                        </div>
                    </div>
                    <br/>
                    <button className="buttons hover">Enviar</button>
                    <div>
                        <a className="cursor-pointer  hover:text-yellow-500">¿Olvido su contraseña?</a>
                    </div>
                </form>
           </div>
            {/*Modal*/}
            {showModal && (
                <div className="fixed inset-0 password  bg-opacity-60 flex justify-center items-center">
                    <div className="bg-[rgb(104,1,206)] p-12 border-white border-2 rounded-full text-yellow-400">
                        <h2 className="paragraph text-2xl justify-center">Correo enviado éxitosamente</h2>
                        <p>Se ha enviado un correo de recuperación a la dirección:</p>
                        <h3><strong>{email}</strong></h3>
                        <br/>
                        <div className="flex justify-center">
                            <button onClick={()=>route.push("/logging")}
                            className="cursor-pointer border-white border-2 rounded-t-full bg-red-600 p-3 hover:bg-yellow-400 hover:text-red-600">
                                Volver
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Forgot_Pass