"use client";
import Image from "next/image";
import { useState } from "react";

function CreateForm(){

    const [error, setError]=useState({
        name:false,
        lastname:false,
        date:false,
        phone:false,
        email:false,
        address:false,
        password:false,
        confirm:false
    })

    const [form, setForm] = useState({
        name:"",
        lastname:"",
        date:"",
        phone:"",
        email:"",
        address:"",
        password:"",
        confirm:""
    })


    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        
        e.preventDefault();

        const newErrors ={
            name: form.name.trim()==="",
            lastname: form.lastname.trim()==="",
            date:form.date.trim()==="",
            phone:form.phone.trim()==="",
            email:form.email.trim()==="",
            address:form.address.trim()==="",
            password:form.password.trim()==="",
            confirm:form.confirm.trim()===""
        }

        setError(newErrors)

        if(newErrors.name || newErrors.lastname){
            alert("Por favor diriga los campos del formulario")
            return
        }

        alert("Su registro ha sido exitoso ")

    }

    return(
        <div className="flex justify-center items-center min-h-screen mt-1 mb-10">
            <div className="text-center">
                <h1 className="title text-7xl">Formulario de registro</h1>
                <form className="form-bg pt-10 pl-6 pr-6 pb-3 w-full max-w-2xl rounded-2xl shadow-2xl mx-auto">
                    {/*Inicio de Formulario */}
                    <div className="flex flex-col gap-8 w-full max-w-md text-yellow-400">
                        {/*Casilla de Nombres y Apelliidos */}
                        <div className="flex flex-row gap-[190px]">
                            <div className="flex flex-row gap-3.5 ">
                                <label>Nombre(s):</label>
                                <div className="flex w-15">
                                    <input 
                                    type="text" 
                                    className={`bg-violet-600 border-yellow-400 border-2 w-50 h-8 p-0.5 rounded
                                    ${error.name ? "border-red-600":{}}`} 
                                    placeholder="Nombre(s)"
                                    onChange={(e)=>setForm({...form, name:e.target.value})}
                                    onBlur={()=>setError({...error, name:form.name.trim()===""})}
                                    />
                                   {error.name && (
                                        <p className="text-yellow-500 text-sm mt-1">Este campo es obligatorio</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-row gap-3.5">
                                <label>Apellido(s):</label>
                                <div className="flex w-15">
                                    <input 
                                    type="text" 
                                    className="bg-violet-600 border-yellow-400 border-2 w-50 h-8 p-0.5 rounded"
                                    placeholder="Apellido(s)"
                                    />
                                </div>
                            </div>
                        </div>

                        {/*Fecha de nacimiento y Telefono*/}
                        <div className="flex flex-row gap-25">
                            <div className="flex flex-row gap-3 items-center">
                                <label>Fecha nacimiento:</label>
                                <div className="flex flex-row items-center gap-1">
                                    <input 
                                    type="date" 
                                    className="bg-violet-600 border-yellow-400 border-2 w-35 p-0.5 rounded"
                                    placeholder="dd/mm/aaaa"
                                    />
                                    <Image
                                    src="/img/calendario.png"
                                    alt="calendario"
                                    width={30}
                                    height={30}
                                    className=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <label>Telefono/cel:</label>
                                <input
                                type="text"
                                className="bg-violet-600 border-yellow-400 border-2 w-35 h-8 p-0.5 rounded"
                                placeholder="Sin espcacios ni puntos"
                                />
                            </div>
                        </div> 

                        {/*Correo y dirección*/}
                        <div className="flex flex-row gap-46">
                            <div className="flex flex-row gap-10">
                                <label>Correo:</label>
                                <div className="w-16">
                                <input type="text" 
                                className="bg-violet-600 border-yellow-400 border-2 flex-1 p-0.5 rounded" 
                                placeholder="correo válido" />
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <label>Dirección:</label>
                                <div className="w-16">
                                <input type="text" 
                                className="bg-violet-600 border-yellow-400 border-2 flex-1 w-50 h-8 p-0.5 rounded" 
                                placeholder="correo válido" />
                                </div>
                            </div>
                        </div>

                        {/*Contraseña y confirmación*/}
                        <div className="flex flex-row gap-15">
                            <div className="flex flex-row gap-2">
                                <label>Contraseña:</label>
                                <input type="text" 
                                className="bg-violet-600 border-yellow-400 border-2 flex-1 p-0.5 h-7 rounded" 
                                placeholder="correo válido" />
                            </div>
                            <div className="flex flex-row gap-5">
                                <label>Confirmar:</label>
                                <input type="text" 
                                className="bg-violet-600 border-yellow-400 border-2 flex-1 p-0.5 h-7 rounded" 
                                placeholder="correo válido"
                                />
                            </div>
                        </div>   
                        {/*Botones del formulario*/}
                        <div className="flex flex-row gap-5 justify-center">
                            <button className="bg-yellow-300 text-red-600 cursor-pointer hover:scale-110 p-2 rounded-3xl">
                                Crear cuenta
                            </button>
                            <button className="bg-yellow-300 text-red-600 cursor-pointer hover:scale-110 p-2 px-6 rounded-3xl">
                                Volver
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default CreateForm;
