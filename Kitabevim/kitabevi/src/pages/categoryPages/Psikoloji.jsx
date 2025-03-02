import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { addToCart } from "../../redux/cartSlice";
import products from "../../Products";
import { addToFavorites, removeFromFavorites } from "../../redux/favoriteSlice";
import { FaTurkishLiraSign } from "react-icons/fa6";


export default function Psikoloji() {
  const addbasketDispatch = useDispatch();
  const addfavoriteDispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const { items: favorites } = useSelector((state) => state.favorites);

  const addToBasket = (product) => {
    if (!loggedInUser) {
      alert("Önce giriş yapmalısınız!");
    } else {
      addbasketDispatch(addToCart(product));
      alert("Ürün sepetinize eklendi ^-^");
    }
  };

  const addFavoriteItem = (product) => {
    if (!loggedInUser) {
      alert("Önce giriş yapmalısınız!");
    } else {
      if (favorites.includes(product.id)) {
        addfavoriteDispatch(removeFromFavorites(product));
        alert("Ürün favorilerinizden çıkarıldı ^-^");
      } else {
        addfavoriteDispatch(addToFavorites(product));
        alert("Ürün favorilerinize eklendi ^-^");
      }
    }
  };

  return (
    <div className="p-6 bg-[#FAF3E0] min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#8B5E3B] mb-6">ÜRÜNLER</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((product) => product.id >= 11 && product.id <= 15)
          .map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-2 transition hover:scale-105">
              <img
                src={product.image}
                className="w-40 h-60 object-cover rounded-md"
                alt="product"
              />
              <h2 className="text-lg font-semibold text-gray-800">{product.no}</h2>
              <h2 className="text-sm text-gray-600">{product.author}</h2>
              <div className="flex gap-4 mt-4">
                <FaShoppingBasket
                  size={30}
                  className="text-red-500 cursor-pointer hover:text-red-700 transition"
                  onClick={() => addToBasket(product)}
                />
                <IoHeartSharp
                  size={30}
                  className={`cursor-pointer transition ${favorites.some((item) => item.id === product.id) ? "text-red-500 hover:text-red-700" : "text-gray-400 hover:text-gray-600"}`}
                  onClick={() => addFavoriteItem(product)}
                />
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                     <h2>{product.price}</h2>
                     <FaTurkishLiraSign />
                 </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
