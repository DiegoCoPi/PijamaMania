import { useState } from "react";

const Buy_form = ()=>{

    

    return(
        <div className="flex justify-center bg-purple-800 text-[rgba(255,215,0,1)] w-3/5">
            <form>
                {/* Casilla para nombres*/}
                <label for="fname">Nombre(s) completos:</label><br/>
                <input className="bg-[rgba(255,215,0,1)]" type="text" id="fname" name="fname"></input><br/><br/>
                {/* Casilla para apellidos*/}
                <label for="flastname">Apellido(s) completos:</label><br/>
                <input className="bg-[rgba(255,215,0,1)]" type="text" id="flastname" name="flastname"></input><br/><br/>
                {/*Casiila*/}

            </form>
        </div>
    )
    
}

export default Buy_form