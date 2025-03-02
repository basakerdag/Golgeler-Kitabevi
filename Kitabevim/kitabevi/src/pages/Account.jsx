import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/userSlice"; 
import {resetFavorites} from "../redux/favoriteSlice";
import {resetCart} from "../redux/cartSlice";

export default function Account() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser); 
  const dispatch = useDispatch(); 
  const exitNavigate = useNavigate();

  const exit = () => {
    dispatch(logoutUser()); 
    dispatch(resetCart());
    dispatch(resetFavorites());
    exitNavigate('/login'); 
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-orange-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        {loggedInUser ? (
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Hoş geldiniz, <span className="text-indigo-600">{capitalizeFirstLetter(loggedInUser.name)} {capitalizeFirstLetter(loggedInUser.surname)}</span>!
          </h2>
        ) : (
          <h2 className="text-2xl font-medium text-gray-600 mb-4">Giriş yapmadınız.</h2>
        )}

        <button
          onClick={exit}
          className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6"
        >
          <IoMdExit className="mr-2" />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}
