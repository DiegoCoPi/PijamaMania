'use client'
import Cards_Babies_Children from "@/cards/cards_babies_children"
import Footer from "@/footer/footer"
import Menu_Bar from "@/menu_bar/menu_bar"

const BabiesChildren= ()=>{
    return(
    
    <div>
        
        <div className="text-center mt-8">
            <h1 className="title text-7xl">Bebes-niños y niñas</h1>
        </div>
        <br/>
        <Menu_Bar/>
        <br/>
        <div>
            <p className="paragraph m-10 text-2xl">
                ¡Haz que cada noche sea una aventura! 🌙✨
                <br/>
                En esta sección encontrarás pijamas y cobijas llenas de color, suavidad y fantasía, pensadas para 
                que los más pequeños disfruten de un descanso cómodo, divertido y mágico. Descubre diseños inspirados 
                en sus personajes favoritos y deja que vivan sus sueños con estilo y comodidad.
                Explora nuestra colección o usa el buscador si ya tienes algo especial en mente. 💫
            </p>
        </div>
        <div>
            <Cards_Babies_Children/>
        </div>
    </div>
    )
}
export default BabiesChildren