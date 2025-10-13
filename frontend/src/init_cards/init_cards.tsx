"use client"
import Image from "next/image";
import { Cards_Interface } from "./cards_interface"
import { useState } from "react"
import Buy_Button from "@/buttons/button_buy"
import Size_Buttons from "@/sizes/size"

function Init_Cards() {
    const [cards, setCards] = useState<Cards_Interface[]>([
        {img:"/pijamas/adults/Los_Simpsons.jpg", name: "Los Simpsons", price: 45500, stock:50,quantity: 0 },
        {img:"/pijamas/babies/Elmo.jpg", name: "Elmo", price:47000, stock:50,quantity:0},
        {img:"/pijamas/children/Cerditos.jpg", name: "Cerditos", price:47000, stock:50,quantity:0},
        {img:"/pijamas/children/Mickey_Mouse.jpg", name: "Mickey Mouse",price:45800,stock:50,quantity:0},
        {img:"/pijamas/adults/Messi_Inter_Mia.jpg", name: "Messi Inter Mia", price:47000, stock:50,quantity:0},
        {img:"/pijamas/babies/Harry_Potter.jpg", name: "Harri Potter", price:47000, stock:50,quantity:0},
    ]);

    const [currentcards, setCurrentcards] = useState(0);

    // Botones flechas
    const prevCards = () => {
        setCurrentcards((prev) => (prev > 0 ? prev - 1 : cards.length - 3)); // retrocede 1
    };

    const nextCards = () => {
        setCurrentcards((next) => (next < cards.length - 3 ? next + 1 : 0)); // avanza 1
    };

    // Incremento y decremento
    const incrementClick = (index: number) => {
        setCards((nextCards) => {
            const newCards = [...nextCards]
            newCards[index].quantity += 1
            return newCards
        })
    }

    const decrementClick = (index: number) => {
        setCards((prevCards) => {
            const newCards = [...prevCards]
            if (newCards[index].quantity > 0) {
                newCards[index].quantity -= 1
            }
            return newCards
        })
    }

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
                
                {/* Botón Izquierda */}
                <button onClick={prevCards}>
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
                        style={{ transform: `translateX(-${currentcards * (100 / 3)}%)` }}
                    >
                        {cards.map((card, index) => (
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
                                            <button onClick={() => incrementClick(index)}>
                                                <Image
                                                    src="/signs/signo_mas.png"
                                                    alt="signo_mas"
                                                    height={20}
                                                    width={20}
                                                    className="bg-[rgba(255,215,0,1)]"
                                                />
                                            </button>
                                            <h3 className="px-2 bg-purple-900 text-[rgba(255,215,0,1)] rounded"><strong>{card.quantity}</strong></h3>
                                            <button onClick={() => decrementClick(index)}>
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
                                    <br/>
                                    <div className="mt-2">
                                        <Buy_Button />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botón Derecha */}
                <button onClick={nextCards}>
                    <Image
                        src="/signs/derecha.png"
                        alt="flecha_derecha"
                        height={50}
                        width={50}
                    />
                </button>
            </div>
        </div>
    )
}

export default Init_Cards
