"use client"
import React, {useState,useEffect, use} from "react";
import logo from '../../public/logo.jpg';
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {IoSearchOutline} from "react-icons/io5";

const HeaderMain = () => {

  const [cartItemCount, setCartItemCount] = useState(0);
  const [wishlistItemCount, setWishlistItemCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    setCartItemCount(totalCount);
  }, []);

 

  return (
    
    <div className="border-b border-gray-200 py-4">
  <div className="container flex justify-between items-center">
    
    <div className="h-10 w-[30%] sm:w-[300px] md:w-[15%] flex relative">
   <input className="h-full w-full rounded-sm px-4 text-black text-base outline-none
   border-[1px] border-slate-200 focus-visible:border-black duration-200 " type="text"
   placeholder='Search...' />
   <span className="absolute w-8 h-8 rounded-full flex items-center justify-center
   top-1 right-1  text-black text-xl "><IoSearchOutline /></span>
</div>

    <div className="font-bold text-center pb-4 sm:pb-0 text-blackish">
      <Link href="/">
        <Image
          src={logo}
          height={10}
          width={140}
          alt=""
          className="h-[6rem] w-[5rem] pt-5 sm:h-[8rem] sm:w-auto md:h-[6rem] md:w-auto lg:h-[8rem] lg:w-auto"
        />
      </Link>
    </div>

    <div className="flex gap-4 text-gray-500 text-[20px] md:text-[30px]">

      <Link href="login"><BiUser /></Link>
      

      <Link href="wishlist">
        <FiHeart />
      </Link>

      <Link href="cart">
        <div className="relative">
          <HiOutlineShoppingBag />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[15px] h-[15px] md:w-[18px]
           md:h-[18px] text-[8px] md:text-[12px] text-white grid place-items-center translate-x-1 
           -translate-y-1">
            {cartItemCount}
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>

  );
};

export default HeaderMain;


