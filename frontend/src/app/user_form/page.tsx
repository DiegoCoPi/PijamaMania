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
        confirm:false,
        age:false
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

    //Manejar los cambios en la casillas (inputs)
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

        if(Object.values(newErrors).includes(true)){
            alert("Por favor diriga los campos del formulario")
            return
        }

        alert("Su registro ha sido exitoso ")

    }

    const verifyAge =():boolean=>{
        
        //Comprueba si hay entrada en la casilla
        if(!form.date) return false

        //Se extrae el dato del año de la fecha actual y de nacimiento
        const birthDate = new Date(form.date);
        const today = new Date()

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth()

        //Se compara si cumple con 18 años
        if(monthDiff<0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
            age--;
        }
        return age>=18




    }

    return(
        <div>
            <h1 className="title">Formulario de registro de usuarios</h1>
            {/*Aqui empieza el formulario*/}
            <div className=" flex justify-center mt-[30px]">
                <form className="form-bg text-yellow-400 p-8">
                    {/*Casilla de Nombres y apellidos*/}
                    <div className="flex flex-row gap-10">
                        {/*Nombre*/}
                        <div className="flex flex-row gap-[10px]">
                            <label>Nombre(s):</label>
                            <div className="flex flex-col gap-[1px]">
                                <input
                                type="text"
                                className={`bg-yellow-400 text-red-600 ${error.name ? "border-1":"border-green-600"}`}
                                value={form.name}
                                onChange={(e)=>setForm({...form, name:e.target.value})}
                                />
                                {error.name && (
                                    <p className="text-xs">*Obligatorio</p>
                                )}
                            </div>
                        </div>
                        {/*Apellido*/}
                        <div className="flex flex-row gap-[10px]">
                            <label>Apellido(s):</label>
                            <div className="flex flex-col gap-[1px]">
                                <input
                                type="text"
                                className={`bg-yellow-400 text-red-600 ${error.lastname ? "border-1":"border-green-600"}`}
                                value={form.lastname}
                                onChange={(e)=>setForm({...form, lastname:e.target.value})}
                                />
                                {error.lastname && (
                                    <p className="text-xs">*Obligatorio</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Casillas de fecha nacimiento y correo*/}
                    <div className="mt-[25px] flex flex-row gap-[30px]">
                        {/*Fecha nacimiento*/}
                        <div className="flex flex-row gap-[10px]">
                            <label>Fecha nacimiento:</label>
                            <div className="flex flex-col gap-[1px]">
                                <input
                                type="date"
                                className={`bg-yellow-400 text-red-600 ${error.date ? "border-1":"border-green-600"}`}
                                />
                                {error.date && (
                                    <p className="text-xs">*Fecha incorrecta</p>
                                )}
                                {error.age}
                            </div>
                        </div>
                        {/*Correo*/}
                        <div className="flex flex-row gap-[52px]">
                            <label>Email:</label>
                            <div>
                                <input
                                type="email"
                                className={`bg-yellow-400 text-red-600 ${error.email ? "border-1":"border-green-600"}`}
                                />
                                {error.email && (
                                    <p className="text-xs">Correo no valido</p>
                                )}
                                {error.age && (
                                    <p>No eres mayor de edad para crear esta cuenta</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Contraseñas y confirmación*/}
                    <div className="mt-[25px]">
                        {/*Contraseña*/}
                        <div className="flex flex-row gap-[5px]">
                            <label>Contraseña:</label>
                            <div  className="flex flex-col gap-[5px]">
                                <input
                                type="password"
                                className={`bg-yellow-400 text-red-600 ${error.password ? "border-2":"border-green-500"}`}
                                />
                                {error.password &&(
                                    <p className="text-xs">Contraseña no valida</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Botones*/}
                    <br/>
                    <div className="flex flex-row gap-7 justify-center">
                        <button onClick={handleSubmit} className="bg-yellow-400 text-red-600">
                            Crear usuario
                        </button>
                        <button className="bg-yellow-400 text-red-600">
                            Cancelar
                        </button>
                    </div>
                {/*Aqui termina el formulario*/}
                </form>
            </div>                
        </div>
    )

}

export default CreateForm;
