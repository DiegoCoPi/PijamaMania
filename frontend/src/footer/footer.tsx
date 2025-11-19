import Image from "next/image"
const Footer = ()=>{
    return(
        <footer className="bg-[rgba(232,79,79,1)] text-yellow-400 mt-10 pt-2 pb-2">
            <div className="flex justify-between items-center px-16">
                <div>
                    <p className="text-left pl-1 text-3xl">Todos los derechos reservados © Diego Corrales 2025</p>
                </div>
                <div className="text-right">
                    <h2 className="font-bold">Visitanos en nuestras redes sociales</h2>
                    <button className="cursor-pointer">
                        <div className="flex flex-row space-x-0">
                            <Image
                            src="/social-media/instagram.png"
                            alt="instagram"
                            width={30}
                            height={30}
                            />
                            <p>Instagram</p>
                        </div>
                    </button>
                </div>
            </div>

        </footer>
    )
}
export default Footer 