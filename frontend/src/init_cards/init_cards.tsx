//import Image from "next/image"
import {Cards_Interface} from "./cards_interface"

function Init_Cards(){
    
    const Cards_Content:Cards_Interface[]=[
        {img:"/pijamas/Pijama_Simpson.jpg",name:"Los Simpsons",price:45500, size:"L", stock:20},
        {img:"/pijamas/Pijama_Mickey_Mouse.jpg",name:"Mickey Mouse",price:45550, size:"M", stock:15},
        {img:"",name:"",price:45550, size:"XL", stock:5},
    ]
    
    return(
        <div className="flex justify-center space-x-20 p-10">
            {Cards_Content.map((card, index)=>(
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
                        
                        <div className="text-aling text-center">
                            <p><strong>Cantidad:</strong></p>
                            <div>
                                <p>{card.stock}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Init_Cards