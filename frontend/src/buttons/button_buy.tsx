import Image from "next/image"

function Buy_Button(){

    return(
        <div className="flex justify-center ">
            <button className="flex items-center space-x-3 bg-yellow-400 text-purple-900 rounded-lg px-4 py-2
                                hover:scale-120 cursor-pointer">
                <Image
                    src="/signs/carrito-de-compras.png"
                    alt="carrito compras"
                    width={20}
                    height={20}
                />
                <p><strong>Comprar</strong></p>
            </button>
        </div>
    )
}

export default Buy_Button