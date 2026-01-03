"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface User {
  idNumber: number;
  name: string;
  lastname: string;
}


export default function DropMenu() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null)

  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },[])

  return (
    <div className="relative">
      {/* Botón */}

      <span onClick={() => setOpen(prev => !prev)} className="cursor-pointer text-yellow-400 select-none">
        {user ? `Hola, ${user.name} ${user.lastname} ▾` : "Accede a tu cuenta ▾"}
      </span>
      {open &&(
        <div className="absolute bg-yellow-400 text-blue-500 p-2 w-40 rounded-xl">
          
          <ul>
            {user?(
              <>
                <li className="block hover:bg-blue-500 hover:text-yellow-400 p-1">
                  <Link href="/profile">Perfil</Link>
                </li>
                <li onClick={()=>{
                    localStorage.removeItem("user") 
                    setUser(null)
                  }}>
                  Cerrar Sección
                </li>
                <li className="block hover:bg-blue-500 hover:text-yellow-400 p-1">
                  <div className="flex flex-row">
                    <Image
                      src="/signs/anadir-al-carrito.png"
                      alt="carrito"
                      height={20}
                      width={20}
                      />
                    <Link href="/buy-car">Compras</Link>
                  </div>
                </li>
              </>
            ):(
              <>
                <li className="block hover:bg-blue-500 hover:text-yellow-400 p-1">
                  <Link href="/login" className="block">
                    Acceder
                  </Link>
                </li>
                <li className="block hover:bg-blue-500 hover:text-yellow-400 p-1">
                  <Link href="/user-form">Crear Cuenta</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div> 
  );
}
