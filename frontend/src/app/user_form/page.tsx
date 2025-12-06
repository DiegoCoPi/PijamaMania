"use client";
import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import { BiShow } from "react-icons/bi";

function CreateForm(){

    const [error, setError]=useState({
            name:false,
            lastname:false,
            date:false,
            email:false,
            phone:false,
            address:false,
            password:false,
            confpass:false,
            age:false
        })

        //Vacia las casillas
        const [form, setForm] = useState({
            name:"",
            lastname:"",
            date:"",
            email:"",
            phone:"",
            address:"",
            password:"",
            confpass:""
        })

        //Mabejo de ocultar y mostrar contraseña
        const [showPass, setShowPass]=useState(false)
        const [showConfpass, setShowConfpass]=useState(false)

        //Manejar los cambios en la casillas (inputs)
        /*-----------------------------------------------------------------------------------------*/
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
                confpass:form.confpass.trim()==="",
                age:false,
            }

            setError(newErrors)

            if(Object.values(newErrors).includes(true)){
                alert("Por favor diligencie todos los campos")
                return
            }


            //Validación de la edad

            const birthDate = new Date(form.date)
            const today = new Date()

            const birthyerar = birthDate.getFullYear();
            const todayYear = today.getFullYear()

            let age = todayYear-birthyerar
            const monthDiff = today.getMonth() - birthDate.getMonth()

            if(monthDiff<0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
                age--;
            }

            if(age<18){
                setError(prev=>({...prev, age:true}))
                alert("Tienes que ser mayor de edad")
                return
            }
            
            //Comparar las contraseñas
            if(form.password !== form.confpass){
                setError(prev =>({
                    ...prev,
                    password:true,
                    confpass:true
                }))

                alert("Las contraseñas no coinciden")
                return
            }
            

            alert("Cuenta creada exitosamente")


            setForm({
                name:"",
                lastname:"",
                date:"",
                email:"",
                phone:"",
                address:"",
                password:"",
                confpass:""
            })

            setError({
                name:false,
                lastname:false,
                date:false,
                email:false,
                age:false,
                phone:false,
                address:false,
                password:false,
                confpass:false
            })

    }

    const calendar=() =>{
        const input = document.getElementById("birthday") as HTMLInputElement;
        if (input?.showPicker) {
      input.showPicker();} 
      else {input?.focus();}
    };

    return(
            <div>
                <h1 className="title">Formulario de registro de usuarios</h1>
                {/*Aqui empieza el formulario*/}
                <div className=" flex justify-center mt-[30px]">
                    <form onSubmit={handleSubmit} className="form-bg text-yellow-400 p-8">
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
                        {/*Casillas de fecha nacimiento y telefóno*/}
                        <div className="mt-[25px] flex flex-row gap-[30px]">
                            {/*Fecha nacimiento*/}
                            <div className="flex flex-row gap-[10px]">
                                <label>Fecha nacimiento:</label>
                                <div className="flex flex-col gap-[1px]">
                                    <input
                                    type="date"
                                    className={`bg-yellow-400 text-red-600 ${error.date ? "border-1":"border-green-600"}`}
                                    value={form.date}
                                    onChange={(e)=>setForm({...form, date:e.target.value})}
                                    />
                                    {error.date && (
                                        <p className="text-xs">*Fecha incorrecta</p>
                                    )}
                                    {error.age && (
                                        <p className="textt-xs">Tu edad no es permitida</p>
                                    )}
                                </div>
                            </div>
                            {/*Telefóno*/}
                            <div className="flex flex-row gap-[30px]">
                                <label>Telefóno:</label>
                                <div>
                                    <input
                                    type="number"
                                    className={`bg-yellow-400 text-red-600 ${error.phone ? "border-1":"border-green-600"}`}
                                    value={form.phone}
                                    onChange={(e)=>setForm({...form, phone:e.target.value})}
                                    />
                                    {error.phone && (
                                        <p className="text-xs">Número telefónico invalido</p>
                                    )}
                                </div>
                            </div>   
                        </div>
                        {/*Dirección y correo*/}
                        <div className="flex flex-row gap-[40px] mt-[28px]">
                            {/**Dirección */}
                            <div className="flex flex-row gap-[20px]">
                                <label>Dirección:</label>
                                <div>
                                    <input
                                    type="text"
                                    className={`bg-yellow-400 text-red-600 ${error.phone ? "border-1":"border-green-600"}`}
                                    value={form.address}
                                    onChange={(e)=>setForm({...form,address:e.target.value})}
                                    />
                                    {error.address &&(<p className="text-xs">Dirección Invalida</p>)}
                                </div>
                            </div>
                            {/*Correo*/}
                            <div className="flex flex-row gap-[32px]">
                                <label>Correo:</label>
                                <div>
                                    <input
                                    type="email"
                                    className={`bg-yellow-400 text-red-600 ${error.email ? "border-1":"border-green-600"}`}
                                    value={form.email}
                                    onChange={(e)=>setForm({...form, email:e.target.value})}
                                    />
                                     {error.email && (<p className="text-xs">Correo no valido</p>)}
                                </div>        
                            </div>
                        </div>
                        {/*Contraseña y confirmación*/}
                        <div className="mt-[28px] flex flex-row gap-[35px]">
                            {/*Contraseña*/}
                            <div className="flex flex-row gap-[7px]">
                                <label>Contraseña:</label>
                                <div className="relative flex flex-col">
                                    <input
                                    type={showPass ? "text":"password"}
                                    className={`bg-yellow-400 text-red-600 ${error.email ? "border-1":"border-green-600"}`}
                                    value={form.password}
                                    onChange={(e)=>setForm({...form, password:e.target.value})}
                                    required
                                    />
                                    <BiShow
                                        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-600"
                                        size={20}
                                        onClick={() => setShowPass(!showPass)}
                                    />
                                    {error.password &&(<p className="text-xs">Contraseña no valida</p>)}
                                </div>
                            </div>
                            {/*Confirmación*/}
                            <div className="flex flex-row gap-[15px]">
                                <label>Confirmar</label>
                                <div>
                                    <input
                                    type="password"
                                    className={`bg-yellow-400 text-red-600 ${error.email ? "border-1":"border-green-600"}`}
                                    value={form.confpass}
                                    onChange={(e)=>setForm({...form, confpass:e.target.value})}
                                    />
                                    {error.confpass&&(<p className="text-xs">Confirme la contraseña</p>)}
                                    {error.confpass&&(<p className="text-xs">Confirme la contraseña</p>)}
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>         
                        {/*Botones*/}
                        <br/>
                        <div className="flex flex-row gap-7 justify-center">
                            <button
                            type="submit"
                            className="bg-yellow-400 text-red-600 p-[8px] cursor-pointer hover:scale-115">
                                Crear usuario
                            </button>
                            <button 
                            className="bg-yellow-400 text-red-600 p-[8px] cursor-pointer hover:scale-115">
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
