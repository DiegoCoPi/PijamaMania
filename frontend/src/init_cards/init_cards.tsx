//import Image from "next/image"
import {Cards_Interface} from "./cards_interface"

function Init_Cards(){
    
    const Cards_Content:Cards_Interface[]=[
        {img:"/images/Pijama_Simpson.jpg",name:"Pijama Los Simpsons",price:45500, size:"L", quantity:20},
        {img:"",name:"Pijama 2",price:45550, size:"M", quantity:15},
        {img:"",name:"Pijama 3",price:45550, size:"XL", quantity:5},
    ]
    
    return(
        <div className="flex justify-center space-x-20 p-10">
            {Cards_Content.map((card, index)=>(
                <div key={index}  className="p-4 rounded-xl shadow-md border border-yellow-400 text-yellow-400 
                     bg-[linear-gradient(180deg,rgba(250,38,160,1)_41%,rgba(33,42,255,1)_82%)] 
                     hover:scale-105 transition-transform">
                    <img src={card.img} alt={card.name} className="w-full h-40 object-cover rounded-md"/>
                    <h2>{card.name}</h2>
                    <h3>Precio:${card.price}</h3>
                    <div>
                        <p>Tallas:</p>
                        <div></div>
                        <br/>
                        <p>Cantidad:</p>
                        <div></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Init_Cards