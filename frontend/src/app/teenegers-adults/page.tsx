'use client'
import Cards_Adults_Teenegers from "@/cards/cards_adults_teenegers"
import Menu_Bar from "@/menu_bar/menu_bar"
import Footer from "@/footer/footer"

const Teenegers_Adults= ()=>{
    
    return(
        <div>
            <div className="text-center title text-7xl mt-10">
                <h1>Adolecentes y adultos</h1>  
            </div>
            <div className="paragraph m-10 text-2xl">
                <p>
                    En esta sección esta dedicada para los mas grandes y mayores en donde su expesión y estilo pueden reflejarse
                    en un traje comodo en cada sueño, ya que los diseños son más realistas y sirve para compartir en familia
                </p>
            </div>    
            <div>
                <Menu_Bar/>
            </div>
            <br/>
            <div>
                <Cards_Adults_Teenegers/>
            </div>
            <Footer/>
        </div>
    )
}
export default Teenegers_Adults