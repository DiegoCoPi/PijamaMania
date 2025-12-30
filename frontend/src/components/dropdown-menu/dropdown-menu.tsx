"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface User {
  id: number;
  name: string;
  lastname: string;
}

interface Props {
  user: User | null;
}

export default function DropMenu({ user }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botón */}

      <span onClick={() => setOpen(prev => !prev)} className="cursor-pointer text-yellow-400 select-none">
        {user ? `Hola, ${user.name} ▾` : "Accede a tu cuenta ▾"}
      </span>
      {open &&(
        <div className="absolute bg-yellow-400 text-blue-500 p-2 w-40 rounded-xl">
          
          <ul>
            {user?(
              <>
                <li className="block hover:bg-blue-500 hover:text-yellow-400 p-1">
                  <Link href="/profile">Perfil</Link>
                </li>
                <li>
                  <Link href="/">Cerrar Sección</Link>
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
