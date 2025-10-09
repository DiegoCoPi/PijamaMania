import { Cards_Interface } from "@/init_cards/cards_interface"
import { useState } from "react"

const BabiesChildren= ()=>{
    const [cardBC, setCardBC]=useState<Cards_Interface[]>([
        {img:"/pijamas/babies_children/Harry_Potter.jpg", name: "Harry_Potter", price: 45500, size: "L", quantity:100 },
        {img:"/pijamas/babies_children/Intensamente.jpg", name:"Intensamente", price:45825, size:"M", quantity:90},
        {img:"/pijamas/babies_children/Mickey_Mouse.jpg", name:"Mickey_Mouse", price:45825, size:"M", quantity:99},
        {img:"/pijamas/babies_children/Sonic.jpg", name:"Sonic", price:45825, size:"M", quantity:99},
    ])

    const[cardMove, setCardMove]=useState(0)

    //Funcionamiento botoes de Flecha
    const prevCard=()=>{
        setCardMove((prev)=>(prev>0?prev-1:cardBC.length-3))
    }

    const nextCard =()=>{
        setCardMove((next)=>(next < cardBC.length-3? next+1 : 0))
    }

    const prev_Slide=(index:number)=>{
        setCardBC((prevCard)=>{
            const newCard = [...prevCard]
            if(newCard[index].quantity>0){newCard[index].quantity-=1}
            return newCard
        })
    }
    
    const next_Slide=(index:number)=>{
        setCardBC((nextCard)=>{
            const newCard=[...nextCard]
            newCard[index].quantity+=1
            return newCard
        })
    }

    return(
        <div>
        </div>
    )
}
export default BabiesChildren