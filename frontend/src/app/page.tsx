import Cards_Initial from "@/cards/cards_initial"
import Footer from "@/footer/footer"
import Menu_Bar from "@/menu_bar/menu_bar"

function Initial (){
    return(
        <div>
            <div className="title text-9xl mt-8">
                <h1>PIJAMAMANIA</h1>
            </div>
            <Menu_Bar/>
            <br/>
            <div className="ml-20 mr-20 mt-5 mb-5">
                <p className="paragraph text-3xl">
                    ¡Bienvenidos a Pijamamania un lugar en donde tus mayores fantasias y sueño se transforma
                    en un traje comodo, liviano y llmativo para llevarlo contigo cada noche al dormir e inclusivo
                    en tus sueños
                </p>
            </div>
            <br/>
            <h2 className="title">Nuestro Catálogo inicial</h2>
            <Cards_Initial/>
        </div>
    )
}
export default Initial