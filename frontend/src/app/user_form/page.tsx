function User_Login(){

    return(
        //Div principal 
        <div className="m-20">
            <form className="bg-cyan-400">    
                <h1 className="text-6xl text-center">Ingresar</h1>
                <div className="flex flex-col gap-3 items-center mt-10">
                    <div className="flex flex-row gap-4">
                        <label>Ingrese tu nombre(s):</label>
                        <input type="text" 
                        className="bg-blue-600"
                        />
                    </div>
                </div>
            </form>
        </div>
    )

}
export default User_Login