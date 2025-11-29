"use client";
import Image from "next/image"

function User_Login(){

    const calendar=() =>{
        const input = document.getElementById("birthday") as HTMLInputElement;
        if (input?.showPicker) {
      input.showPicker();} 
      else {input?.focus();}
    };

    return(
        //Div principal 
        <div className="m-20">
            <form className="bg-cyan-400 p-3 pb-8">    
                <h1 className="text-6xl text-center">Ingresar</h1>
                <div className="flex flex-col gap-3 items-center mt-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                            <label>Ingrese tu nombre(s):</label>
                            <input type="text" 
                            className="bg-blue-600"
                            />
                        </div>
                        <div className="flex flex-row gap-4">
                            <label>Ingrese tu apellido(s):</label>
                            <input type="text" 
                            className="bg-blue-600"
                            />
                        </div>
                        <div className="flex flex-row gap-8">
                            <label>Correo Electrónico:</label>
                            <input type="text" 
                            className="bg-blue-600"
                            />
                        </div>
                        <div className="flex flex-row gap-4">
                            <label>Fecha de Nacimiento:</label>
                           <input
                                id="birthday"
                                type="text"
                                className="bg-blue-600"
                                placeholder="dd/mm/aaaa"
                                required
                                data-datepicker="true"
                                data-datepicker-format="dd/mm/yyyy"
                                data-datepicker-autohide="true"
                                data-datepicker-title="Selecciona tu fecha de nacimiento"
                                data-datepicker-start-view="month"
                                data-datepicker-maximum-view="decade"
                                data-datepicker-decade-step="10"
                                />
                            <Image
                            src="/img/calendario.png"
                            alt="calendario"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                            onClick={calendar}
                            />
                        </div>
                    </div>
                </div>
                <button className="flex items-center bg-red-500 cursor-pointer border-4 rounded-2xl">Ingresar Cuenta</button>
            </form>
        </div>
    )

}
export default User_Login