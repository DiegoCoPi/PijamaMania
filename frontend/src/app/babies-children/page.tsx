'use client'
import { Cards_Interface } from "@/init_cards/cards_interface"
import Menu_Bar from "@/menu_bar/menu_bar"
import { useState } from "react"
import Footer from "@/footer/footer"
import Image from "next/image"
import Buy_Button from "@/buttons/button_buy"
import Size_Buttons from "@/sizes/size"

const BabiesChildren= ()=>{
    const [cardBC, setCardBC]=useState<Cards_Interface[]>([
        {img:"/pijamas/babies_children/Harry_Potter.jpg", name: "Harry Potter", price: 45500, size: "L", quantity:0 },
        {img:"/pijamas/babies_children/Intensamente.jpg", name:"Intensamente", price:45825, size:"M", quantity:0},
        {img:"/pijamas/babies_children/Mickey_Mouse.jpg", name:"Mickey Mouse", price:45825, size:"M", quantity:0},
        {img:"/pijamas/babies_children/Sonic.jpg", name:"Sonic", price:45825, size:"M", quantity:0},
    ])

    const[cardMove, setCardMove]=useState(0)

    //Funcionamiento botoes de Flecha
    const prevCard=()=>{
        setCardMove((prev)=>(prev>0?prev-1:cardBC.length-3))
    }

    const nextCard =()=>{
        setCardMove((next)=>(next < cardBC.length-3? next+1 : 0))
    }

    const decrement=(index:number)=>{
        setCardBC((prevCard)=>{
            const newCard = [...prevCard]
            if(newCard[index].quantity>0){newCard[index].quantity-=1}
            return newCard
        })
    }
    
    const increment=(index:number)=>{
        setCardBC((nextCard)=>{
            const newCard=[...nextCard]
            newCard[index].quantity+=1
            return newCard
        })
    }

    return(
    
    <div>
        
        <div className="text-center mt-8">
            <h1 className="title text-7xl">Bebes-niños y niñas</h1>
        </div>
       
        <div>
            <p className="paragraph m-10 text-2xl">
                ¡Haz que cada noche sea una aventura! 🌙✨
                <br/>
                En esta sección encontrarás pijamas y cobijas llenas de color, suavidad y fantasía, pensadas para 
                que los más pequeños disfruten de un descanso cómodo, divertido y mágico. Descubre diseños inspirados 
                en sus personajes favoritos y deja que vivan sus sueños con estilo y comodidad.
                Explora nuestra colección o usa el buscador si ya tienes algo especial en mente. 💫
            </p>
        </div>
        <Menu_Bar/>
        <br/>
        <h2 className="text-aling-center title">Catalogo de bebes-niños y niñas</h2>
        {/*Tarjetas*/}
        <div className="relative w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between">            
                {/* Botón Izquierda */}
                <button onClick={prevCard}>
                    <Image
                        src="/signs/izquierda.png"
                        alt="flecha_izquierda"
                        height={50}
                        width={50}
                    />
                </button>
                {/* Carrusel */}
                <div className="overflow-hidden w-[900px]"> 
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${cardMove * (100 / 3)}%)` }}
                    >
                    {cardBC.map((card, index) => (
                        <div key={index} className="min-w-[33.3%] p-4 flex-shrink-0">
                            <div className="p-4 rounded-xl text-yellow-400 bg-[linear-gradient(180deg,rgba(250,38,160,1)_41%,rgba(33,42,255,1)_82%)] 
                                            hover:scale-105 transition duration-500">
                                <Image
                                    src={card.img}
                                    alt={card.name}
                                    height={200}
                                    width={200}
                                    className="object-cover w-full h-[200px] rounded-lg"
                                />
                                <h2 className="mt-2 font-bold">{card.name}</h2>
                                <h3><strong>Talla:</strong> <Size_Buttons /></h3>
                                <h3><strong>Precio: $</strong>{card.price}</h3>
                                <div className="flex items-center space-x-2 mt-2">
                                    <h3><strong>Cantidad:</strong></h3>
                                    <div className="flex space-x-1 items-center">
                                        <button onClick={() => increment(index)}>
                                            <Image
                                                src="/signs/signo_mas.png"
                                                alt="signo_mas"
                                                height={20}
                                                width={20}
                                                className="bg-[rgba(255,215,0,1)]"
                                            />
                                        </button>
                                        <h3 className="px-2 bg-purple-900 text-white rounded"><strong>{card.quantity}</strong></h3>
                                        <button onClick={() => decrement(index)}>
                                            <Image
                                                src="/signs/signo_menos.png"
                                                alt="signo_menos"
                                                height={20}
                                                width={20}
                                                className="bg-[rgba(255,215,0,1)]"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2">
                                   <Buy_Button />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
            {/* Botón Derecha */}
                <button onClick={nextCard}>
                    <Image
                        src="/signs/derecha.png"
                        alt="flecha_derecha"
                        height={50}
                        width={50}
                    />
                </button>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>

    )
}
export default BabiesChildren