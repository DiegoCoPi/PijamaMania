"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  name: string;
  lastname: string;
  email: string;
  idNumber: number;
}

export default function User_Icon() {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [pathname]);

  const handleClick = () => {
    router.push(user ? "/" : "/login");
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-row gap-2 items-center cursor-pointer transition duration-300"
    >
      <Image
        src="/img/icono_usuario.png"
        alt="usuario"
        height={20}
        width={20}
      />

      {user ? (
        <h2>{user.name} {user.lastname}</h2>
      ) : (
        <h2>Iniciar Sesión</h2>
      )}
    </div>
  );
}
