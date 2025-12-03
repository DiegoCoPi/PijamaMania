import Image from "next/image"


function User_Icon(){
    return(
        <div className="flex flex-col gap-5 mr-20 items-center">
            <div>
                <Image
                src="/img/icono_usuario.png"
                alt="ususrio"
                height={50}
                width={50}                
                />
            </div>
            <div>
                <h2>Ingrese o crea tu cuenta</h2>
            </div>
        </div>
    )
}

export default User_Icon