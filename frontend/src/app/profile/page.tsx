"use client";
import { AuthToken } from "@/components/auth/auth";
import axios from "axios";
import { useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"
import { useFormState } from "react-dom";
import { json } from "stream/consumers";

interface User{
    idNumber:number,
    name:string,
    lastname:string,
    birthdate:string,
    email:string,
    phone:number,
    address:string,
    password:string,
    confpass:string
}

export default function UserProfile(){

    const router = useRouter()

    const [user, setUser] =useState<User | null>(null)
    const[form,setForm]=useState({
        idNumber:"",
        name:"",
        lastname:"",
        birthdate:"",
        email:"",
        phone:"",
        address:"",
        password:"",
        confpass:""
    })

    const [isEdit, setIsEdit] =useState(false)


    useEffect(()=>{

        const token = localStorage.getItem("token")
        const storageUser = localStorage.getItem("user")
        

        if(!token || !storageUser){
            alert("Por favor ingrese a su cuenta")
            router.push("/login")
            return
        }

       const parderUser : User = JSON.parse(storageUser)

       setUser(parderUser)

       setForm({
            idNumber: String(parderUser.idNumber ?? ""),
            name: parderUser.name ?? "",
            lastname: parderUser.lastname ?? "",
            birthdate: parderUser.birthdate ?? "",
            email: parderUser.email ?? "",
            phone: parderUser.phone ? String(parderUser.phone) : "",
            address: parderUser.address ?? "",
            password:parderUser.password ?? "",
            confpass: parderUser.confpass ?? ""
        });


      

    },[])

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!isEdit) return;

        try{
            const token = localStorage.getItem("token")
            const {data} = await axios.put("http://localhost:3000/user",form,{
                headers:{
                    Authorizaton:`Bearer ${token}`
                }
            })
            localStorage.setItem("user",JSON.stringify(data))
            setIsEdit(false)
        }
        catch{
            alert("Error al editar datos")
        }
    }

    return(
        <div>
            <h1 className="title">Perfil de usuario</h1>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="bg-blue-600 text-white p-5">
                    <h2 className="text-center text-2xl mb-3">{form.name} {form.lastname}</h2>
                    <div className="flex flex-row gap-6">
                        {/*Columna 1*/}
                        <div className="flex flex-col gap-6">
                            {/*Nombres*/}
                            <div className="flex flex-row gap-5">
                                <label>Nombre:</label>
                                <input type="text"
                                className="bg-blue-900 pl-2" 
                                value={form.name}
                                disabled={!isEdit}
                                onChange={(e)=>setForm({...form, name:e.target.value})}
                                />
                            </div>
                            {/*Apellidos*/}
                            <div className="flex flex-row gap-5">
                                <label>Apellidos:</label>
                                <input type="text" 
                                value={form.lastname} 
                                disabled={!isEdit}
                                onChange={(e)=>setForm({...form, lastname:e.target.value})}
                                className="bg-blue-900 pl-2"
                                />
                            </div>
                            {/*Número de documentacióm*/}
                            <div>
                                <label>Documento</label>
                                <input type="text" 
                                value={form.idNumber} 
                                disabled={!isEdit}
                                onChange={(e)=>setForm({...form,idNumber:e.target.value})}
                                className="bg-blue-900 pl-2"
                                />
                            </div>
                            {/*Fecha Nacimiento */}
                            <div className="flex flex-row gap-5">
                                <label>Fecha nacimiento:</label>
                                <input type="date" 
                                value={form.birthdate} 
                                disabled={!isEdit}
                                onChange={(e)=>setForm({...form, birthdate:e.target.value})}
                                className="bg-blue-900 pl-2"
                                />
                            </div>
                        </div>
                        {/*Columna 2*/}
                        <div className="flex flex-col gap-6">
                            {/*Correo */}
                            <div className="flex flex-row gap-5">
                                <label>Correo:</label>
                                <input type="text" 
                                value={form.email}
                                disabled={!isEdit}
                                onChange={(e)=>setForm({...form, email:e.target.value})}
                                className="bg-blue-900 w-60 pl-2"
                                />
                            </div>
                            {/*Dirección */}
                            <div className="flex flex-row gap-3">
                                <label>Dirección:</label>
                               <input type="text" 
                                value={form.address}
                                disabled={!isEdit}
                                onChange={(e)=>setForm({...form, address:e.target.value})}
                                className="bg-blue-900 w-60 pl-2"
                                />
                            </div>
                            {/*Telefóno*/}
                            <div className="flex flex-row gap-3">
                                <label>Telefono:</label>
                                <input
                                value={form.phone}
                                disabled={!isEdit}
                                onChange={(e)=>setForm({...form, phone:e.target.value})}
                                className="bg-blue-900 w-60 pl-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-20 mt-10">
                        <button type="button" className="button" onClick={()=>setIsEdit(true)}>
                            Hacer Cambios
                        </button>
                        <button type="button" onClick={()=>router.push("/")}className="button">
                            Volver al Inicio
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}