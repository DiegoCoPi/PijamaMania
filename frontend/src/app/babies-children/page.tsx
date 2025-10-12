'use client'
import { Cards_Interface } from "@/init_cards/cards_interface"
import Menu_Bar from "@/menu_bar/menu_bar"
import { useState } from "react"
import Footer from "@/footer/footer"
import Image from "next/image"
import Buy_Button from "@/buttons/button_buy"

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
            <h1 className="title font-leckerli mt-8">Bebes y Niños</h1>
            <div>
                <Menu_Bar/>
            </div>
            <br/>
            <p className="paragraph flex text-left text-lg m-6">
               En esta sección puede encontrar toda la comodidad, fantasia y ensueño en nuestras pijamas y cobijas
               para que tu bebe tenga la mejor experiencia en cada sueño desde la comodidad de una prenda hasta el
               anhelo de verse en la piel de tu personaje favorito.
            </p>
            {/*Tarjetas de compras*/}
            <div className="min-w-[33.3%] text-ailng-center p-4 flex-shrink-0">    
                <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${cardMove * (100 / 3)}%)` }}
                >
                    {cardBC.map((card,index)=>(
                        <div key={index} className="p-4 rounded-xl text-yellow-400 bg-[linear-gradient(180deg,rgba(250,38,160,1)_41%,rgba(33,42,255,1)_82%)] 
                                                    hover:scale-105 transition duration-500">
                            <Image
                                src={card.img}
                                alt={card.name}
                                height={200}
                                width={200}
                                className="object-cover w-full h-[200px] rounded-lg space-x-8"
                            />
                            <h2><strong>{card.name}</strong></h2>
                            <h3>Precio: <strong>${card.price}</strong></h3>
                            
                            <div className="flex space-x-1 items-center">
                                <button onClick={()=>(increment(index))}>
                                    <Image
                                        src="/signs/Signo_mas.png"
                                        alt="signo mas"
                                        height={20}
                                        width={20}
                                        className="bg-[rgba(255,215,0,1)]"
                                    />
                                </button>
                                <h3>{card.quantity}</h3>
                                <button onClick={()=>(decrement(index))}>
                                    <Image
                                        src="/signs/Signo_menos.png"
                                        alt="signo menos"
                                        height={20}
                                        width={20}
                                        className="bg-[rgba(255,215,0,1)]"
                                    />
                                </button>
                            </div>
                            <div>
                                <Buy_Button/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
export default BabiesChildren