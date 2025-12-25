"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface User{
  idNumber: number;
  name: string;
}

export default function Form_buy() {

  const router = useRouter()
  const [user, setUser] = useState()
  const [payment, setPayment] = useState(false)

  if(!payment){
    alert("Por favor elija un medio de pago")
  }

  


  {/*Contador y memoria de productos */}
 
  return (
    <div>
        <h1 className="title-buy">Formualrio de confirmación de compra</h1>
        <form className="buy-form mt-[50px]">
              {/*Casilla Fila 1 */}
              <div className="flex flex-col gap-3">
                {/*Casilla de nombre */}
                <div className="flex flex-row gap-3">
                    <label>Nombres:</label>
                    <input
                    type="text"
                    className="bg-[rgb(121,4,255)] border-3 border-yellow-400"
                    />
                </div>
                {/*Casilla de Apellido*/}
                <div className="flex flex-row gap-3">
                    <label>Apellidos:</label>
                    <input
                    type="text"
                    className="bg-[rgb(121,4,255)] border-3 border-yellow-400"
                    />
                </div>
                {/*Casilla de valor a pagar*/}
                <div className="flex flex-row gap-5">
                    <label>Total:</label>
                    <input
                    type="text"
                    className="bg-[rgb(121,4,255)] border-3 border-yellow-400 w-30"
                    />
                </div>
                <div>
                  {/*radio button para medio de pago */}
                  <label>Medio de pago:</label>
                  <div className="flex flex-row justify-center gap-5">
                    {/*Nequi */}
                    <label>
                      <input
                      type="radio"
                      name="payment"
                      value="nequi"
                      />
                      Nequi
                    </label>
                    {/*Tarjeta Debito */}
                    <label>
                      <input
                      type="radio"
                      name="payment"
                      value="card"
                      />
                      Tarjeta
                    </label>
                    {/*Daviplata */}
                    <label>
                      <input
                      type="radio"
                      name="payment"
                      value="daviplata"
                      />
                      Daviplata
                    </label>
                  </div>
                </div>
              </div>
            <div className="flex justify-center space-x-21 mt-5 ">
              <button 
              className="form-button cursor-pointer">
                Confirmar
              </button>
              <button className="form-button cursor-pointer">
                Cancelar
              </button>
            </div>
      </form>
    </div>
  );
}
