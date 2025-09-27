"use client"
import {Cards_Interface} from "./cards_interface"
import {useState} from "react"

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
        <div className="flex justify-center space-x-20 p-10">
            {cards.map((card, index)=>(
                <div key={index}  className="p-4 rounded-xl shadow-md border border-yellow-400 text-yellow-400 
                     bg-[linear-gradient(180deg,rgba(250,38,160,1)_41%,rgba(33,42,255,1)_82%)] 
                     hover:scale-105 transition-transform">
                    <img src={card.img} alt={card.name} className="w-full h-40 object-cover rounded-md"/>
                    <h2>{card.name}</h2>
                    <h3>Precio: ${card.price}</h3>
                    <div>
                        <p>Tallas:</p>
                        <div></div>
                        <br/>
                        
                        <div className="flex justify-center space-x-3">
                            <p><strong>Cantidad:</strong></p>
                            <br/>
                            <div className="flex justify-center space-x-4">
                                <button onClick={()=>incrementClick(index)} className="rouded-lg">
                                    <img 
                                        src="/signs/Signo_mas.png" 
                                        alt="Signo más" width={24} height={24}
                                        className="bg-[rgba(255,215,0,1)]"
                                    />
                                </button>
                                <p>{card.quantity}</p>
                                <button onClick={()=>decrementClick(index)} className="rounded-lg">
                                    <img src="/signs/Signo_menos.png" 
                                        alt="Signo menos" width={24} height={24}
                                        className="bg-[rgba(255,215,0,1)]"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/*Buy_Button */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Init_Cards

