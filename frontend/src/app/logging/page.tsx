"use client";
import { useRouter } from "next/navigation"
import { BiShow } from "react-icons/bi"

function Logging(){

    const router = useRouter()

    return(
        <section className="flex flex-col justify-center">
            <h1 className="title">Ingrese a su cuenta</h1>
            <br/>
            <div className="flex justify-center">
                <form className="form-bg flex text-yellow-400 flex-col gap-[10px] p-[15px]">
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-row gap-2">
                            <label>Correo/telefóno:</label>
                            <input
                            type="input"
                            className={`bg-yellow-400 text-red-600`}
                            />
                            
                        </div>
                        <div className=" flex flex-row gap-10.5">
                            <label>Contraseña:</label>
                            <div className="relative flex flex-col">
                                <input
                                type="password"
                                className={`bg-yellow-400 text-red-600`}
                                />
                                <BiShow
                                type="button"
                                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-600"
                                />
                            </div>
                        </div>
                        {/*Botones */}
                        <div className="flex justify-center">
                            <button 
                            
                            className="bg-yellow-400 text-red-600 p-3 w-max cursor-pointer rounded-2xl">
                                Ingresar
                            </button>
                        </div>
                        <div className="flex justify-between">
                            <a onClick={()=>router.push("/forgot_pass")} 
                            className="cursor-pointer">
                                ¿Olvido su contraseña?
                            </a>
                            <a onClick={()=>router.push("/user_form")}
                            className="cursor-pointer">
                                Crear cuenta
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Logging