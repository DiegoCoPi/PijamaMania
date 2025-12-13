import Image from "next/image"


function User_Icon(){
    return(
        <div className="flex flex-row gap-2 items-center cursor-pointer transition duration-300">
            <div>
                <Image
                src="/img/icono_usuario.png"
                alt="ususrio"
                height={20}
                width={20}
                />
            </div>
            <div>
                <h2 className=" text-yellow-400 text-xl hover:bg-yellow-400 hover:text-blue-700 ">Iniciar Sección</h2>
            </div>
        </div>
    )
}

export default User_Icon