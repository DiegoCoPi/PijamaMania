import {useState} from "react"


const Size_Buttons=() => {
    return(
        <div className="flex text-center space-x-4">
            <div className="bg-[rgba(255,215,0,1)] text-purple-900 p-2 rounded-full h-6 w-6 flex items-center justify-center
                            hover:bg-purple-900 hover:text-[rgba(255,215,0,1)] transition-colors duration-300 ">
                <button>
                    <p><strong>S</strong></p>
                </button>
            </div>
            <br/>
            <div className="bg-[rgba(255,215,0,1)] text-purple-900 p-2 rounded-full h-6 w-6 flex items-center justify-center
                            hover:bg-purple-900 hover:text-[rgba(255,215,0,1)] transition-colors duration-300 ">
                <button>
                    <p><strong>M</strong></p>
                </button>
            </div>
            <br/>
            <div className="bg-[rgba(255,215,0,1)] text-purple-900 p-2 rounded-full h-6 w-6 flex items-center justify-center
                            hover:bg-purple-900 hover:text-[rgba(255,215,0,1)] transition-colors duration-300 ">
                <button>
                    <p><strong>L</strong></p>
                </button>
            </div>
        </div>
    )
}

export default Size_Buttons