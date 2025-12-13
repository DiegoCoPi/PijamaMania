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
            <div className="form-2 flex flex-col gap-3">
                <div className="flex flex-col gap-3 p-4 justify-center">
                    <label className="text-yellow-400">Correo Electrónico:</label>
                    <input
                    type="email"
                    value={email}
                    className="bg-yellow-400 text-red-600 rounded-3xl"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="flex justify-center pb-[10px]">
                    <button onClick={sendRecover}
                    className="flex justify-center buttons cursor-pointer p-2 w-max
                    hover:scale-120">
                        Enviar
                    </button>
                </div>
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