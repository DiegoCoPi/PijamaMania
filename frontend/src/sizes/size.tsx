import { useState } from "react";

const Size_Buttons = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const clickSize = (size: string) => {
    setSelectedSize((prev) => (prev === size ? null : size));
  };

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="flex text-center space-x-4 cursor-pointer">
        {sizes.map((size)=>(
            <div key={size} className={`rounded-full h-8 w-8 flex items-center justify-center transition-colors duration-300
                ${selectedSize === size? "bg-purple-900 text-[rgba(255,215,0,1)]": "bg-[rgba(255,215,0,1)] text-purple-900"} 
                hover:bg-purple-900 hover:text-[rgba(255,215,0,1)]`} onClick={() => clickSize(size)}>
                <button className="cursor-pointer">
                    <p><strong>{size}</strong></p>
                </button>
            </div>
        ))}
    </div>
  );
};

export default Size_Buttons;
