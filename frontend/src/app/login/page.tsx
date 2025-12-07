import { BiShow } from "react-icons/bi"

function Logging(){
    return(
        <section className="flex justify-center">
            <div className="flex items-center">
                <form className="form-bg flex text-yellow-400 flex-col gap-[10px] p-[15px]">
                    <div>
                        <label>Correo/telefóno</label>
                        <input
                        type="input"
                        className={`bg-yellow-400 text-red-600`}
                        />
                        
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <div className="relative flex flex-col">
                            <input
                            type="password"
                            className="bg-yellow-400"
                            />
                            <BiShow
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-600"
                            />
                        </div>
                    </div>
                    
                </form>
            </div>
        </section>
    )
}
export default Logging