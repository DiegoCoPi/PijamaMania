"use client";   
import axios, { Axios } from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react";

function LoginUser(){
    
    const router = useRouter()

    /*const[email, setEmail]=useState("")
    const[phone, setPhone]=useState("")
    const[pass, setPass]=useState(false)*/

    const[form,setForm]=useState({
        email:"",
        phone:"",
        password:""
    })

    const[error, setError]=useState("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();

        setError("")
    
        try{
            const response = await axios.post('http://localhost:3000/user/login',form);
            alert("Ingreso exitoso")
            router.push("/")
        }
        catch(error){
            if(axios.isAxiosError(error)){
                setError(error.response?.data?.message || "Usuario y/o contraseña erronea");
            }
            else{
                setError("Error inesperado, intenalo más tarde")        
            }
        }
    }
   return (
            <div>
            <h1 className="title mt-0">Ingrese a su cuenta</h1>
                <div className="flex justify-center mt-5 text-[rgb(1,44,56)]">
                    <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 bg-[rgb(109,164,0)] w-max p-4">

                        {/* Correo o Teléfono */}
                        <div className="flex justify-center flex-row gap-2">
                        <label>Correo/Tel:</label>
                        <input
                            name="email"
                            className="bg-white text-black w-39"
                            onChange={handleChange}
                        />
                        </div>

                        {/* Contraseña */}
                        <div className="flex justify-center flex-row gap-1.5">
                        <label>Contraseña:</label>
                        <input
                            name="password"
                            type="password"
                            className="bg-white text-black w-39"
                            onChange={handleChange}
                        />
                        </div>

                        {/* Error */}
                        {error && (
                        <p className="text-red-700 text-sm text-center">
                            {error}
                        </p>
                        )}

                        {/* Botón */}
                        <div className="flex justify-center">
                        <button
                            type="submit"
                            className="buttons p-2 cursor-pointer hover:scale-110"
                        >
                            Acceder
                        </button>
                        </div>

                        {/* Links */}
                        <div className="flex flex-row gap-10">
                        <a
                            onClick={() => router.push("/forgot-pass")}
                            className="cursor-pointer hover:text-yellow-400"
                        >
                            ¿Olvidó su contraseña?
                        </a>
                        <a
                            onClick={() => router.push("/user-form")}
                            className="cursor-pointer hover:text-yellow-400"
                        >
                            ¿Eres nuevo?, crea tu cuenta aquí
                        </a>
                        </div>

                    </div>
                    </form>
                </div>
            </div>
    );
}

export default LoginUser