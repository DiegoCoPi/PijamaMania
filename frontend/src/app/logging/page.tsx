"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiShow } from "react-icons/bi";

function Logging() {
    const router = useRouter();

    // Estados para los inputs y mensajes
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Detectar si es correo o teléfono
            const data: any = { password };
            if (emailOrPhone.includes("@")) {
                data.email = emailOrPhone;
            } else {
                data.phone = emailOrPhone;
            }

            const res = await axios.post("http://localhost:3000/user/login", data);
            setMessage(res.data.message);
            console.log("Usuario logueado:", res.data.user);

            // Redirigir a otra página (ejemplo: dashboard)
            router.push("/dashboard");
        } catch (error: any) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Error de conexión con el servidor");
            }
        }
    };

    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <h1 className="title">Ingrese a su cuenta</h1>
            <br />
            <form
                onSubmit={handleLogin}
                className="form-bg flex text-yellow-400 flex-col gap-[10px] p-[15px] w-96"
            >
                <div className="flex flex-col gap-7">
                    <div className="flex flex-row gap-2">
                        <label>Correo/telefono:</label>
                        <input
                            type="text"
                            className="bg-yellow-400 text-red-600 flex-1 p-2 rounded"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label>Contraseña:</label>
                        <div className="relative flex-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="bg-yellow-400 text-red-600 w-full p-2 rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <BiShow
                                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-600"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-400 text-red-600 p-3 w-max cursor-pointer rounded-2xl"
                    >
                        Ingresar
                    </button>
                    {message && <p className="text-red-500">{message}</p>}
                    <div className="flex justify-between mt-2">
                        <a onClick={() => router.push("/forgot_pass")} className="cursor-pointer">
                            ¿Olvidó su contraseña?
                        </a>
                        <a onClick={() => router.push("/user_form")} className="cursor-pointer">
                            Crear cuenta
                        </a>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Logging;
