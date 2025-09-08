function Menu_Bar(){
    return(
        <nav className="flex justify-center mt-10 text-4xl">
            <div className="ml-10 mr-10 mt-10 p-8 bg-purple-900">
                <ul className="flex space-x-20 text-[rgba(255,215,0,1)]">
                    <li><a href="#" className="hover">Inicio</a></li>
                    <li><a href="#" className="hover">Bebés</a></li>
                    <li><a href="#" className="hover">Niños-Niñas</a></li>
                    <li><a href="#" className="hover">Adolescentes-Adultos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu_Bar