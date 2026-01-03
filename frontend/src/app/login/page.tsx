"use client";   
import axios, { Axios } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react";

function LoginUser(){
    
    const router = useRouter()

    const[form,setForm]=useState({
        identifier:"",
        password:""
    })

    const[error, setError]=useState("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const payload = form.identifier.includes("@")
        ?{email: form.identifier, password: form.password}
        :{phone: form.identifier, password: form.password};

        try {
            const response = await axios.post("http://localhost:3000/user/login",payload);

            //Guardado de datos del ususario
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("idNumber", response.data.access_token);
            router.push("/");
        } 
        catch (error) {
            if (axios.isAxiosError(error)) {
            setError(
                error.response?.data?.message || "Usuario y/o contraseña incorrectos"
            );
            } else {
            setError("Error inesperado, inténtalo más tarde");
            }
        }
    };


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
                            name="identifier"
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
                        <div className="flex justify-center mt-2">
                            <button type="submit" className="buttons p-2 cursor-pointer hover:scale-110">
                                Acceder
                            </button>
                        </div>
                        {/* Links */}
                        <div className="flex flex-row gap-8">
                            <Link href="/forgot-pass" className="href-link">¿Olvido su contraseña?</Link>
                            <Link href="/user-form" className="href-link">Crea tu cuenta</Link>
                            <Link href="/" className="href-link">Volver a Inicio</Link>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
    );
}

export default LoginUser