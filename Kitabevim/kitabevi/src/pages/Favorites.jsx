import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBinFill } from "react-icons/ri";
import { removeFromFavorites } from '../redux/favoriteSlice';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.items);
  const removefavoriteDispatch = useDispatch();

  const removefromFavoriteItem = (product) => {
    removefavoriteDispatch(removeFromFavorites(product));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-orange-300 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Favori listeniz</h2>

        {favorites.length === 0 ? (
          <p className="text-center text-xl text-gray-500">Favori listenizde ürün bulunmuyor.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.no}
                  className="w-48 h-72 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-medium text-gray-700 mb-2">{product.no}</h2>
                <RiDeleteBinFill
                  size={30}
                  color="gray"
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => removefromFavoriteItem(product)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
