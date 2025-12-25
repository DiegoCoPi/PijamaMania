"use client";
import axios, { AxiosError } from "axios";
import { Monofett } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiShow } from "react-icons/bi";

function CreateForm(){

    const router = useRouter()

    const [error, setError]=useState({
            idNumber:false,
            name:false,
            lastname:false,
            birthdate:false,
            email:false,
            phone:false,
            address:false,
            password:false,
            confpass:false,
            age:false
        })

        //Vacia las casillas
        const [form, setForm] = useState({
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


        const isAdult = (birthdate: string): boolean => {
            const today = new Date()
            const birth = new Date(birthdate)

            let age = today.getFullYear() - birth.getFullYear()
            const monthDiff = today.getMonth() - birth.getMonth()

            if (monthDiff < 0 ||(monthDiff === 0 && today.getDate() < birth.getDate())){
                age--
            }

            return age >= 18
        }


            //Mabejo de ocultar y mostrar contraseña
        const [showPass, setShowPass]=useState(false)
        const [showConfpass, setShowConfpass]=useState(false)

        //Manejar los cambios en la casillas (inputs)
        /*-----------------------------------------------------------------------------------------*/
        const handleSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
            
            e.preventDefault();

            const newErrors ={
                idNumber: form.idNumber.trim()==="",
                name: form.name.trim()==="",
                lastname: form.lastname.trim()==="",
                birthdate:form.birthdate.trim()==="",
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

            //Se calida la edad
            if(!isAdult(form.birthdate)){
                setError(prev =>({...prev, age:true}))
                alert("Debe teener al menos 18 años de edad")
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
            
            //Aqui se incorpora el axios de la pagina web

            try{
                const response =await axios.post('http://localhost:3000/user',form)
                alert("El usuario ha sido creado exitosamente");
            }
                
            catch(error){
                const axiosError = error as AxiosError;
                if(axiosError.response?.status===409){
                    alert("El usuario ya se encuentra registrado")
                }
                else{
                    alert("Error al crear el usuario"+axiosError.message)
                }
            }
                setForm({
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

                setError({
                    idNumber:false,
                    name:false,
                    lastname:false,
                    birthdate:false,
                    email:false,
                    age:false,
                    phone:false,
                    address:false,
                    password:false,
                    confpass:false
                })
            

    }


    return(
            <div>
                <h1 className="title text-6xl">Bienvenidos al formulario de registro de usuarios</h1>
                {/*Aqui empieza el formulario*/}
                <div className=" flex justify-center mt-[30px]">
                    <form onSubmit={handleSubmit} className="form-bg rounded-2xl text-yellow-400 p-8">
                        {/*Columna 1 casillas de Nombres, apellidos, fecha de nacimiento*/}
                        <div className="flex flex-row gap-5">
                            <div className="flex flex-col">
                                {/*Nombre(s)*/}
                                <div className="space-x-7">
                                    <label>Nombre(s):</label>
                                    <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e)=>setForm({...form,name:e.target.value})}
                                    placeholder="Ingrese su(s) nombre(s)"
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                    ${error.name? "border-2 border-[rgb(26,0,156)]":"border-transparent"}`}
                                    />
                                    <div className="h-[30px]">
                                        {error.name &&(
                                            <p className="text-center text-xs">
                                                <strong>Debe ingresar su(s) nombre(s)</strong>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {/*Apellidos*/}
                                <div className="space-x-5">
                                    <label>Apellidos(s):</label>
                                    <input
                                    type="text"
                                    value={form.lastname}
                                    onChange={(e)=>setForm({...form, lastname:e.target.value})}
                                    placeholder="Ingrese su(s) apellido(s)"
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                        ${error.lastname?"border-2 border-pink-400":"border-transparent"}`}
                                    />
                                    <div className="h-[30px]">
                                        {error.lastname &&(
                                            <p className="text-center text-xs">
                                                <strong>Ingrese su(s) apellido(s)</strong>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {/*Fecha de Nacimiento*/}
                                <div className="space-x-3">
                                    <label>F.Nacimiento:</label>
                                    <input
                                    type="Date"
                                    value={form.birthdate}
                                    onChange={(e)=>{
                                        const value = e.target.value
                                        setForm({...form, birthdate:value});
                                        
                                        if(!value){
                                            setError(prev=>({...prev, birthdate:true, age:false}))
                                        }

                                        else if(!isAdult(value)){
                                            setError(prev=>({...prev, birthdate:false, age:true}))
                                        }
                                        else{
                                            setError(prev=>({...prev, birthdate:false, age:false}))
                                        }
                                    }}
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                    ${error.birthdate? "border-2 border-pink-400":"border-transparent"}`}
                                    />
                                    <div className="h-[30px]">
                                        {error.birthdate &&(
                                            <p className="text-center text-xs">
                                                <strong>Ingrese su fecha de nacimiento</strong>
                                            </p>
                                        )}
                                        {error.age &&(
                                            <p className="text-center text-xs">
                                                <strong>Edad no permitida</strong>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {/*Documento*/}
                                <div className="space-x-1">
                                    <label>N° Documento:</label>
                                    <input
                                    type="text"
                                    value={form.idNumber}
                                    placeholder="Ingrese N° documento"
                                    onChange={(e)=>setForm({...form,idNumber:e.target.value })}
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                    ${error.idNumber ? "border-2 border-pink-400":"border-transparent"}`}/>
                                    <div className="h-[30px]">
                                        {error.idNumber&&(
                                            <p className="text-center text-xs"><strong>Ingrese un número de documento</strong></p>
                                        )}
                                    </div>
                                </div>
                                {/*Télefóno*/}
                                <div className="space-x-2">
                                    <label>Núm. Teleóno:</label>
                                    <input
                                    type="text"
                                    value={form.phone}
                                    placeholder="Ingrese N° telefóno"
                                    onChange={(e)=>setForm({...form,phone:e.target.value })}
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                    ${error.phone ? "border-2 border-pink-400":"border-transparent"}`}/>
                                    <div className="h-[30px]">
                                        {error.phone &&(
                                            <p className="text-center text-xs">
                                                <strong>Ingrese un número de documento</strong>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/*Columna 2 Correo, Dirección, contraseña y confirmación */}
                            <div className="flex flex-col">
                                {/*Dirección */}
                                <div className="space-x-7">
                                    <label>Dirección:</label>
                                    <input
                                    type="text"
                                    value={form.address}
                                    placeholder="Ingrese su dirección"
                                    onChange={(e)=>setForm({...form,address:e.target.value})}
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                    ${error.address ? "border-2 border-pink-400":"border-transparent"}`}
                                    />
                                    <div className="h-[30px]">
                                        {error.address &&(
                                            <p className="text-center text-xs">
                                                <strong>Ingrese su dirección</strong>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {/*Correo */}
                                <div className="space-x-11">
                                    <label>Correo:</label>
                                    <input
                                    type="text"
                                    value={form.email}
                                    placeholder="Ingrese la dirección"
                                    onChange={(e)=>setForm({...form, email:e.target.value})}
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                    ${error.email ? "border-2 border-pink-400":"border-transparent"}`}
                                    />
                                    <div className="h-[30px]">
                                        {error.email &&(
                                            <p className="text-center text-xs">
                                                <strong>Ingrese un correo valido</strong>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {/*Contraseña */}
                                <div className="space-x-3">
                                    <label>Contraseña:</label>
                                    <input
                                    type="text"
                                    value={form.password}
                                    placeholder="Ingrese la dirección"
                                    onChange={(e)=>setForm({...form, password:e.target.value})}
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                    ${error.password ? "border-2 border-pink-400":"border-transparent"}`}
                                    />
                                    <div className="h-[30px]">
                                        {error.password &&(
                                            <p className="text-center text-xs">
                                                <strong>Ingrese la contraseña valido</strong>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {/*Confimación */}
                                <div className="space-x-5">
                                    <label>Confirmar:</label>
                                    <input
                                    type="text"
                                    value={form.confpass}
                                    placeholder="Ingrese la dirección"
                                    onChange={(e)=>setForm({...form, confpass:e.target.value})}
                                    className={`bg-[gold] text-pink-600 rounded-[5px] p-[1px]
                                    ${error.confpass ? "border-2 border-pink-400":"border-transparent"}`}
                                    />
                                    <div className="h-[30px]">
                                        {error.confpass &&(
                                            <p className="text-center text-xs">
                                                <strong>Ingrese la contraseña valido</strong>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-row gap-8">
                                    <Link href="/login" className="text-link">
                                        ¿Usuario registrado?
                                    </Link>
                                    <Link href="/" className="text-link">
                                        Volver a Inicio
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-0">
                            <button onClick={()=>router.push("/")} type="submit" className="buttons">
                                Crear Cuenta
                            </button>
                        </div>    
                    </form>
                </div>                
            </div>
        )

}

    export default CreateForm;
