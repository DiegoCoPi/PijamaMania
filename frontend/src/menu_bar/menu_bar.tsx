//import BabiesChildren from "@/pijamas/babies_children/babies_children"
import Link from "next/link"

function Menu_Bar(){
    return(
        <nav className="flex justify-center m-10 text-4xl">
            <div className="ml-10 mr-10 mt-10 p-8 bg-purple-900 rounded-full">
                <ul className="flex space-x-20 text-[rgba(255,215,0,1)]">
                    <li><Link href="/" className="hover">Inicio</Link></li>
                    <li><Link href="/babies-children" className="hover">Bebés-niños y niñas</Link></li>
                    <li><a href="/teenegers-adults" className="hover">Adolescentes-Adultos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu_Bar