import { useState } from "react"
import { Cards_Interface } from "./cards_interface"
import Image from "next/image"
import Size_Buttons from "@/sizes/size"

const Cards_Adults_Teenegers=()=>{
    
    const [cards, setCards]=useState<Cards_Interface[]>([
        {img:"/pijamas/adults/Atletico_Nacional.jpg", name:"Atletico Nacional", price:45800, stock:25,quantity:0},
        {img:"/pijamas/adults/Atletico_Nacional.jpg", name:"Atletico Nacional", price:45800, stock:25,quantity:0},
        {img:"/pijamas/adults/Atletico_Nacional.jpg", name:"Atletico Nacional", price:45800, stock:25,quantity:0},
        {img:"/pijamas/adults/Atletico_Nacional.jpg", name:"Atletico Nacional", price:45800, stock:25,quantity:0},
        {img:"/pijamas/adults/Atletico_Nacional.jpg", name:"Atletico Nacional", price:45800, stock:25,quantity:0},
    ])

    const [currentCards, setCurrentcards]=useState(0)
    const beforeCard=()=>{
        setCurrentcards((prev)=>(prev>0?prev-1:cards.length-3))
    }

    const nextCard=()=>{
        setCurrentcards((next)=>(next<cards.length-3?next+1:0))
    }

    const incrementClic = (index:number)=>{
        setCards((nextCard)=>{
            const newCard =[...nextCard]
            newCard[index].quantity+=1
            return newCard     
        })
    }

    const decrementClic = (index:number)=>{
        setCards((beforeCard)=>{
            const newCard = [...beforeCard]
            if(newCard[index].quantity>0){
                newCard[index].quantity-=1
            }
            return newCard
        })
    }

    return(
        <div className="flex imtem-center justify-between">
            {cards.map((card, index)=>(
                <div key={index} className="min-w-[33.3%] p-4 flex-shrink-0">
                    <div className="m-8 text-[rgba(255,215,0,1)] bg-[linear-gradient(180deg,rgba(250,38,160,1)_41%,rgba(33,42,255,1)_82%)
                                    hover:scale-130">
                        <Image
                            src={card.img}
                            alt={card.name}
                            height={200}
                            width={200}
                        />
                        <h3><strong>{card.name}</strong></h3>
                        <h3><strong>Talla: $</strong><Size_Buttons/></h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Cards_Adults_Teenegers