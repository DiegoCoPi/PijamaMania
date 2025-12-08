function Forgot_Pass(){
    return(
        <div>
            <h1 className="title">Recuperación de contraseña</h1>
            <div className="form-2 flex flex-col gap-3">
                <div className="flex flex-col gap-3 p-4 justify-center">
                    <label className="text-yellow-400">Correo Electrónico</label>
                    <input
                    type="text"
                    className="bg-yellow-400 text-red-600"
                    />
                </div>
                <button>
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default Forgot_Pass