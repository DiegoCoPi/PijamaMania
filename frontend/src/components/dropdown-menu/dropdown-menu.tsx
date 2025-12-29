"use client";

import { useState } from "react";
import Link from "next/link";

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
      <span
        onClick={() => setOpen(prev => !prev)}
        className="cursor-pointer text-yellow-400 select-none"
      >
        {user ? `Hola, ${user.name} ▾` : "Accede a tu cuenta ▾"}
      </span>

      {/* Menú */}
      {open && (
        <div className="absolute top-full mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-50">
          <ul className="flex flex-col">
            {user ? (
              <>
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/buy-car"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Carrito de compras
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      localStorage.clear();
                      location.reload();
                    }}
                    className="text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link
                    href="/user-form"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Crear cuenta
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
