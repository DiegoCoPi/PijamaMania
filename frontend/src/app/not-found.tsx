"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFoundPage() {

    const [seconds, setSeconds] = useState(10);
    const router = useRouter();

    useEffect(() => {
        if (seconds <= 0) {
            router.push("/");
            return;
        }

        const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
        return () => clearInterval(timer);
    }, [seconds, router]);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-red-600 text-8xl">ERROR 404</h1>
            <p className="text-red-900 text-4xl">¡UPS! Página no disponible</p>
            <Image
                src="/img/luigi_asustado.png"
                alt="luigi"
                width={200}
                height={200}
                className="mt-6 transition-opacity duration-700 ease-in-out"
            />
            <div className="title text-4xl">
                {seconds > 0 && (
                    <p>Será redirigido a la página de inicio en {seconds} segundos</p>
                )}
            </div>
        </div>
    );
}
