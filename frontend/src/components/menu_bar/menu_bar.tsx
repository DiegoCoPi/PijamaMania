"use client";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Drop_menu from "../dropdown-menu/dropdown-menu";

interface JwtPayload {
  exp: number;
}

interface User{
  id:number,
  name:string,
  lastname:string,
  email:string,
}

function Menu_Bar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      setUser(null);
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      } else {
        setUser(JSON.parse(storedUser));
      }
    } catch {
      localStorage.clear();
      setUser(null);
    }

    
  }, []);

  // Función interna para limpiar el estado y storage (evita repetir código)
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="flex justify-center">
      <div className="flex justify-center p-4 w-full bg-blue-600">
        <ul className="flex space-x-20 text-[rgba(255,215,0,1)]">

          <li><Link href="/" className="menu text-xl">Inicio</Link></li>
          <li><Link href="/babies-children" className="menu text-xl">Bebés-niños y niñas</Link></li>
          <li><Link href="/teenegers-adults" className="menu text-xl">Adolescentes-Adultos</Link></li>
          <li><Drop_menu/></li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu_Bar;
