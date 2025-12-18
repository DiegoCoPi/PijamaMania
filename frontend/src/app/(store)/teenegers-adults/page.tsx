'use client'
import Cards_Adults_Teenegers from "@/components/cards/cards_adults_teenegers"
import Menu_Bar from "@/components/menu_bar/menu_bar"

const Teenegers_Adults= ()=>{
    
    return(
        <div>
            <div className="text-center title text-7xl mt-10">
                <h1>Adolecentes y adultos</h1>  
            </div>
            <br/>
            <div className="paragraph m-10 text-2xl">
                <p>
                    En esta sección encontrarás pijamas pensados especialmente para adultos y adolescentes, donde el
                    estilo y la personalidad se reflejan en cada diseño. Aquí combinamos comodidad, calidad y un toque
                    más realista en los estampados, perfectos para disfrutar noches de descanso o compartir momentos 
                    especiales en familia. Cada prenda está creada para que expreses tu esencia sin perder suavidad, 
                    confort y libertad al dormir.
                </p>
            </div>    
            <br/>
            <div>
                <Cards_Adults_Teenegers/>
            </div>
        </div>
    )
}
export default Teenegers_Adults