import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { FaTurkishLiraSign } from "react-icons/fa6";

const Shopping = () => {
  const cart = useSelector((state) => state.cart.items);
  const removebasketDispatch = useDispatch();
  const cartNavigate = useNavigate();

  const removeFromBasket = (product) => {
    removebasketDispatch(removeFromCart(product));
  };

  const cartShopping = () => {
    cartNavigate("/cart");
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-start justify-center">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sepetiniz</h2>
          
          {cart.length === 0 ? (
            <p className="text-xl text-gray-500">Sepetinizde ürün bulunmuyor.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                  <img
                    src={product.image}
                    alt={product.no}
                    className="w-48 h-72 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">{product.no}</h3>
                  <RiDeleteBinFill
                    size={25}
                    color="gray"
                    className="cursor-pointer hover:text-red-500 mb-4"
                    onClick={() => removeFromBasket(product)}
                  />
                  <div className="flex items-center gap-1 text-lg font-semibold">
                    <h2>{product.price}</h2>
                    <FaTurkishLiraSign />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="w-full md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md ml-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Toplam Sepet Tutarı</h2>
            <div className="text-3xl font-bold text-gray-900 flex items-center gap-1">
              {totalPrice} <FaTurkishLiraSign />
            </div>
            <button
              onClick={cartShopping}
              className="mt-6 w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Satın Almaya Devam Et
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shopping;
