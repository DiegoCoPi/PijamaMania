"use client"
import Image from "next/image";
import {Cards_Interface} from "./cards_interface"
import {useState} from "react"
import Buy_Button from "@/buttons/button_buy"
import Size_Buttons from "@/sizes/size"

function Init_Cards(){
    
    const [cards, setCards]=useState<Cards_Interface[]>([
        {img:"/pijamas/Pijama_Simpson.jpg",name:"Los Simpsons",price:45500, size:"L", quantity:0},
        {img:"/pijamas/Pijama_Mickey_Mouse.jpg",name:"Mickey Mouse",price:45550, size:"M", quantity:0},
        {img:"/pijamas/Pijama_Barcelona.jpg",name:"F.C.Barcelona",price:45550, size:"XL", quantity:0},
    ])

    const incrementClick=(index:number)=>{
        setCards((prevCards)=>{
            const newCards =[...prevCards]
            newCards[index].quantity+=1
            return newCards
        })
    }

    const decrementClick=(index:number)=>{
        setCards((prevCards)=>{
            const newCards = [...prevCards]
            if (newCards[index].quantity>0){
                newCards[index].quantity-=1
            }
            return newCards
        })
    }
    
    
    return(
        <div>
            {/*<div className="m-24">
                <Image
                    src="/signs/izquierda.png"
                    alt="flecha_izquierda"
                    height={50}
                    width={50}
                />
            </div>*/}
            <div className="flex justify-center space-x-20">
                {cards.map((card,index)=>(
                    <div key={index} className="p-4 rounded-xl text-yellow-400 bg-[linear-gradient(180deg,rgba(250,38,160,1)_41%,rgba(33,42,255,1)_82%)]">
                        <Image
                            src={card.img}
                            alt={card.name}
                            height={200}
                            width={200}
                        />
                        <br/>
                        <h2><strong>{card.name}</strong></h2>
                        <h3><strong>Talla:</strong><Size_Buttons/></h3>
                        <h3><strong>Precio: $</strong>{card.price}</h3>
                        <div className="flex justify-left space-x-2">
                            <h3><strong>Cantidad:</strong></h3>
                            <div className="flex justify-center space-x-1">
                            <button onClick={()=>incrementClick(index)}>
                                <Image
                                    src="/signs/signo_mas.png"
                                    alt="signo_mas"
                                    height={20}
                                    width={20}
                                    className="bg-[rgba(255,215,0,1)]"
                                />
                            </button>
                            <h3 className=" bg-purple-900"><strong>{card.quantity}</strong></h3>
                            <button onClick={()=>decrementClick(index)}>
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
                        <div>
                            <Buy_Button/>
                        </div>
                    </div>
                    
                ))}
            </div>
            
        </div>
            
    )
}

export default Init_Cards

