"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Form_buy(){

  const router = useRouter()

  return(
    <div>
      <h1 className="title text-6xl">Formulario de confirmación de pago</h1>
      <br/>
      <br/>
      <div className="bg-[linear-gradient(45deg,_rgb(199,2,101)_25%,_rgb(101,36,138)_50%,_rgb(199,2,101)_75%,_rgb(101,36,138)_100%)] ml-10 mr-10">
        <form>
          {/*Encabezado de imagenes*/}
          <div className="flex flex-row gap-6 ml-10 mr-10 pt-5">
            <div>
              <Image
                src="/img/unicornio.png"
                alt="unicionio"
                height={100}
                width={100}
              />
            </div>
            <h2 className="title text-6xl mt-8">Formulario de confirmación de pago</h2>
            <div>
              <Image
                src="/img/spiderman.png"
                alt="unicionio"
                height={100}
                width={100}
              />
            </div>
          </div>
          <br/>
          {/*Aqui acaba el encabezado con las imagenes del formulario*/}
          {/*Aqui iniciamos con las casillas de los formulatios */}
          <br/>
          <div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex flex-row space-x-2">
                  <label htmlFor="name" className="justify-center">Nombre(s):</label>
                  <input className="bg-yellow-400 rounded-se-2xl text-violet-900 pl-2 w-80" 
                     id="name" name="name" type="input" placeholder="sin ñ ni tildes"/>
              </div>
              <br/>
              <div className="flex flex-row space-x-2">
                  <label htmlFor="lastname">Apellido(s):</label>
                  <input className="bg-yellow-400 rounded-se-2xl text-violet-900 pl-2 w-80" 
                     id="lastname" name="lastname" type="input" placeholder="sin ñ ni tildes"/>
              </div>
            </div>
            <br/>
            <div className="flex flex-row gap-50 justify-center">
              <button className="bg-[linear-gradient(180deg,_rgb(5,167,227)_20%,_rgb(5,227,157)_40%,_rgb(112,5,227)_60%,_rgb(212,5,227)_80%)]
                      text-yellow-500 font-extrabold hover:scale-120 cursor-pointer rounded-4xl m-5 p-3">
                <div className="flex flex-row gap-2">
                  <Image
                    src="/img/chulo_verde.png"
                    alt="freen_check"
                    height={20}
                    width={20}
                  />
                  <p>Confirmar</p>
                </div>
              </button>
              <button 
              type="button"
              onClick={()=>router.push("/")}
              className="bg-[linear-gradient(180deg,_rgb(5,167,227)_20%,_rgb(5,227,157)_40%,_rgb(112,5,227)_60%,_rgb(212,5,227)_80%)]
                      text-yellow-500 font-extrabold hover:scale-120 cursor-pointer rounded-4xl m-5 p-3">
                <div className="flex flex-row gap-2">
                  <Image
                  src="/img/equis_roja.png"
                  alt="red_x"
                  width={20}
                  height={20}
                  />
                  <p>Cancelar</p>
                </div>        
              </button>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  )
}