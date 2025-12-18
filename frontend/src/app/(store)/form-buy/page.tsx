"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ErrorsType = {
  name?: boolean;
  lastname?: boolean;
  phone?: boolean;
  quantity?: boolean;
  products?: boolean;
};

export default function Form_buy() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState("");
  const [errors, setError] = useState<ErrorsType>({});
  const [showModal, setShowModal] = useState(false);

  const clicSubmit = () => {
    const newErrors: ErrorsType = {};

    if (!name.trim()) newErrors.name = true;
    if (!lastname.trim()) newErrors.lastname = true;
    if (!phone) newErrors.phone = true;
    if (!quantity) newErrors.quantity = true;
    if (!products) newErrors.products = true;

    setError(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setShowModal(true);
  };

  return (
    <div>
      {/*Formulario*/}
      <div className="bg-[linear-gradient(45deg,_rgb(199,2,101)_25%,_rgb(101,36,138)_50%,_rgb(199,2,101)_75%,_rgb(101,36,138)_100%)] 
                      m-20 rounded-4xl">
        <form>
          {/*Encabezado de imagenes*/}
          <div className="flex flex-row justify-center gap-30 ml-10 mr-10 pt-5">
            <div>
              <Image
                src="/img/unicornio.png"
                alt="unicornio"
                height={100}
                width={100}
              />
            </div>
            <h2 className="title text-6xl mt-8">Formulario de pago</h2>
            <div>
              <Image
                src="/img/spiderman.png"
                alt="spiderman"
                height={100}
                width={100}
              />
            </div>
          </div>
          <br/>

          {/*Nombre*/}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex flex-row space-x-2">
              <label htmlFor="name" className="justify-center text-3xl text-amber-300">
                Nombre(s):
              </label>
              <input
                className={`bg-yellow-400 rounded-se-2xl text-violet-900 pl-2 w-80
                  ${errors.name ? "border-4 border-red-600" : "border-transparent"}`}
                id="name"
                name="name"
                type="text"
                placeholder="sin ñ ni tildes"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {errors.name && (
              <p className="text-yellow-500">¡Diligencia esta casilla, por favor!</p>
            )}

            {/*Apellido*/}
            <div className="flex flex-row space-x-2">
              <label htmlFor="lastname" className="justify-center text-3xl text-amber-300">
                Apellido(s):
              </label>
              <input
                className={`bg-yellow-400 rounded-se-2xl text-violet-900 pl-2 w-80
                  ${errors.lastname ? "border-4 border-red-500" : "border-transparent"}`}
                id="lastname"
                name="lastname"
                type="text"
                placeholder="sin ñ ni tildes"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            {errors.lastname && (
              <p className="text-yellow-500">¡Diligencie esta casilla, por favor!</p>
            )}

            {/*Teléfono*/}
            <div className="flex flex-row space-x-2">
              <label htmlFor="phone" className="justify-center text-3xl text-amber-300">
                Teléfono:
              </label>
              <input
                className={`bg-yellow-400 rounded-se-2xl text-violet-900 pl-2 w-80
                  ${errors.phone ? "border-4 border-red-500" : "border-transparent"}`}
                id="phone"
                name="phone"
                type="text"
                placeholder="sin espacios y solo dígitos"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && (
              <p className="text-yellow-500">¡Diligencie esta casilla, por favor!</p>
            )}

            {/*Cantidad y Producto*/}
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row space-x-2">
                <label htmlFor="quantity" className="justify-center text-3xl text-amber-300">
                  Cantidad:
                </label>
                <input
                  className={`bg-yellow-400 rounded-2xl text-violet-900 pl-2 w-20
                    ${errors.quantity ? "border-4 border-red-500" : "border-transparent"}`}
                  id="quantity"
                  name="quantity"
                  type="number"
                  placeholder="0"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              {errors.quantity && (
                <p className="text-yellow-500">¡Diligencie esta casilla, por favor!</p>
              )}

              <div>
                <label htmlFor="products" className="justify-center text-yellow-500 text-3xl">
                  Producto(s):
                </label>
                <input
                  className={`bg-yellow-400 rounded-2xl text-violet-900 pl-2 w-20
                    ${errors.products ? "border-4 border-red-500" : "border-transparent"}`}
                  id="products"
                  name="products"
                  type="text"
                  placeholder="0"
                  value={products}
                  onChange={(e) => setProducts(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/*Botones*/}
          <div className="flex flex-row gap-50 justify-center mt-5">
            <button
              type="button"
              onClick={clicSubmit}
              className="bg-[linear-gradient(180deg,_rgb(5,167,227)_20%,_rgb(5,227,157)_40%,_rgb(112,5,227)_60%,_rgb(212,5,227)_80%)]
                  text-yellow-500 font-extrabold hover:scale-120 cursor-pointer rounded-4xl m-5 p-3"
            >
              <div className="flex flex-row gap-2">
                <Image src="/img/chulo_verde.png" alt="check" width={20} height={20} />
                <p>Confirmar</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="bg-[linear-gradient(180deg,_rgb(5,167,227)_20%,_rgb(5,227,157)_40%,_rgb(112,5,227)_60%,_rgb(212,5,227)_80%)]
                  text-yellow-500 font-extrabold hover:scale-120 cursor-pointer rounded-4xl m-5 p-3"
            >
              <div className="flex flex-row gap-2">
                <Image src="/img/equis_roja.png" alt="cancel" width={20} height={20} />
                <p>Cancelar</p>
              </div>
            </button>
          </div>
        </form>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-pink-500 bg-opacity-30 flex items-center justify-center z-50">
          <div className="m-30 pt-10 pb-10 bg-[linear-gradient(45deg,_rgb(5,167,227)_20%,_rgb(5,227,157)_40%,_rgb(112,5,227)_60%,_rgb(212,5,227)_80%)] rounded-4xl p-10 shadow-2xl">
            <h3 className="title text-center">¿Desea confirmar la compra?</h3>
            <div className="flex flex-row gap-20 justify-center mt-10">
              <button
                type="button"
                className="cursor-pointer hover:scale-150"
                onClick={() => router.push("/confirm-message")}
              >
                <Image src="/img/chulo_verde.png" alt="si" width={40} height={40} />
                <h3 className="text-center">SI</h3>
              </button>

              <button
                type="button"
                className="cursor-pointer hover:scale-150"
                onClick={() => setShowModal(false)}
              >
                <Image src="/img/equis_roja.png" alt="no" width={40} height={40} />
                <h3 className="text-center">NO</h3>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
