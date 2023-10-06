// // "use client"
// // import React, { useState ,useEffect} from "react"




// // function Navbar() {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] =useState(false);

// //   const toggleMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   }
 
// //   useEffect(() => {
// //     // This effect runs on the client-side after initial render.
// //     // You can add any client-side logic here.
// //   }, []);

// //   return (

// //     <nav className="shadow-sm text-black mb-10">
// //     <div className="container mx-auto px-4">
// //       <div className="flex justify-between items-center py-3">

// //        <button id="mobile-menu-toggle" className="md:hidden text-black " onClick={toggleMenu}>
// //        <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="black"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M4 6h16M4 12h16M4 18h16"
// //               ></path>
// //             </svg>
// //        </button>
// //       </div>
        
// //         <ul   id="main-menu"
// //           className={`${
// //             isMobileMenuOpen ? "block" : "hidden"
// //           }  space-x-4 md:flex w-fit gap-12 mx-auto`}>
// //         <li className="relative group">
// //             <a href="/" className="sm:navbar__link  font-bold relative text-sm md:text-lg ">HOME</a>
// //             <div className="absolute hidden group-hover:block mt-2  bg-white text-gray-900
// //             space-y-2 py-2 px-4 left-0 shadow-lg z-10">
// //               <div className="font-bold">jwellery</div>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //             </div>
// //           </li>
// //           <li className="relative group">
// //             <a href="jwellery" className="navbar__link font-bold relative text-sm md:text-lg">CATEGORY</a>
// //             <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
// //             space-y-2 py-2 px-4 left-0 shadow-lg z-10">
// //               <div className="font-bold">jwellery</div>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //             </div>
// //           </li>
// //           <li className="relative group">
// //             <a href="mencat" className="navbar__link font-bold relative text-sm md:text-lg">MENS</a>
// //             <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
// //             space-y-2 py-2 px-4 left-0 shadow-lg z-10">
// //               <div className="font-bold">jwellery</div>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //             </div>
// //           </li>
// //           <li className="relative group">
// //             <a href="womens" className="navbar__link font-bold relative text-sm md:text-lg">WOMENS</a>
// //             <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
// //             space-y-2 py-2 px-4 left-0 shadow-lg z-10">
// //               <div className="font-bold">jwellery</div>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //             </div>
// //           </li>
// //           <li className="relative group">
// //             <a href="jwellery" className="navbar__link font-bold relative text-sm md:text-lg">JWELLERY</a>
// //             <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
// //             space-y-2 py-2 px-4 left-0 shadow-lg z-10">
// //               <div className="font-bold">jwellery</div>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //             </div>
// //           </li>
// //           <li className="relative group">
// //             <a href="perfume" className="navbar__link font-bold relative text-sm md:text-lg">PERFUME</a>
// //             <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
// //             space-y-2 py-2 px-4 left-0 shadow-lg z-10">
// //               <div className="font-bold">jwellery</div>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //             </div>
// //           </li>
// //           <li className="relative group">
// //             <a href="jwellery" className="navbar__link font-bold relative text-sm md:text-lg">COLLECTIONS</a>
// //             <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
// //             space-y-2 py-2 px-4 left-0 shadow-lg z-10">
// //               <div className="font-bold">jwellery</div>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //             </div>
// //           </li>
// //           <li className="relative group">
// //             <a href="offers" className="navbar__link font-bold relative text-sm md:text-lg">HOT OFFERS</a>
// //             <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
// //             space-y-2 py-2 px-4 left-0 shadow-lg z-10">
// //               <div className="font-bold">jwellery</div>
// //               <li><a href="#" className="hover:text-gray-400">abc</a></li>
// //               <a href="#" className="hover:text-gray-400">abc</a>
// //             </div>
// //           </li>
        
// //         </ul>
       
// //       </div>
    
// //   </nav>
  

// //   )
// //         }

// // export default Navbar

// import React from react;
// import Image from next/image;
// import {IoSearchOutline} from "react-icons/io5";
// import {AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
// import { BsCart2} from "react-icons/bs";


// const Navbar = () => {
//   return (
//     <div className="w-full bg-white text-black">
//         <div className="w-full   border-b-4 border-black">
//         <div className=mx-auto h-40 px-4 flex items-center justify-between gap-2 >

// {/* searchbar starts */}
// <div className="h-10 w-[30%] sm:w-[300px] md:w-[15%] flex relative">
//    <input className="h-full w-full rounded-sm px-4 text-black text-base outline-none
//    border-[1px] border-slate-200 focus-visible:border-black duration-200 " type="text"
//    placeholder=Search... />
//    <span className="absolute w-8 h-8 rounded-full flex items-center justify-center
//    top-1 right-1 bg-yellow text-black text-xl "><IoSearchOutline /></span>
// </div>
// {/* searchbar ends */}

// {/* logo start here */}
//  <div className="px-5 rounded-full bg-transparent flex items-center gap-2 
// duration-300 cursor-pointer">
//    <Image src="/logo.jpg" height={110} width={120} alt= className=className="h-[6rem] w-[5rem] pt-5 sm:h-[8rem] sm:w-auto md:h-[6rem] md:w-auto lg:h-[8rem] lg:w-auto"/>
//  </div>
// {/* logo end here */}

// <div className="flex -mr-10">

// {/* account start here */}
// <div className="px-5 rounded-full bg-transparent flex items-center gap-2 
// duration-300 cursor-pointer text-[20px] md:text-[30px]">
//    <AiOutlineUser size={25}  />
//    {/* <h2 className="text-base font-semibold ">Account</h2> */}
//  </div>
// {/* account end here */}

// {/* wishlist start here */}
//  <div className="px-5 rounded-full bg-transparent flex items-center gap-2 
// duration-300 cursor-pointer">
//    <AiOutlineHeart size={25}  className="hover:text-red-900" />
//    {/* <h2 className="text-base font-semibold hover:bg-hoverBg hover:text-white">Wishlist</h2> */}
//  </div>
// {/* wishlist end here */}

// {/* cart start here */}
// <div className=" flex relative flex-col justify-center px-5 rounded-full bg-transparent 
//  items-center gap-2 duration-300 cursor-pointer">
//    <BsCart2  className="hover:text-red-500 text-3xl" />
//    {/* <h2 className="text-base font-semibold ">Cart</h2> */}
//    <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4
//    rounded-full flex items-center justify-center  text-xs ">0</span>
//  </div>
// {/* cart end here */}

//         </div>

//         </div>


//         </div>
//     </div>
//   )
// }

// export default Navbar

// import React from react;
// import Image from next/image;
// import { IoSearchOutline } from "react-icons/io5";
// import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
// import { BsCart2 } from "react-icons/bs";

// const Navbar = () => {
//   return (
//     <div className="w-full bg-white text-black">
//       <div className="w-full h-full border-b-4 border-black">
//         <div className=max-w-container mx-auto h-30 px-4 flex items-center justify-between gap-2 >

//           {/* Mobile View (Logo on Left, Search Bar in Center) */}
//           <div className="w-full md:hidden flex items-center justify-between">
//             <div className="px-5 rounded-full bg-transparent flex items-center gap-2 duration-300 cursor-pointer">
//               <Image src="/logo.jpg" height={110} width={120} alt= />
//             </div>
//             <div className="h-10 flex relative flex-1">
//               <input className="h-full w-full rounded-sm px-4 text-black text-base outline-none border-[1px] border-slate-200 focus-visible:border-black duration-200" type="text" placeholder=Search... />
//               <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl "><IoSearchOutline /></span>
//             </div>
//           </div>

//           {/* Desktop View */}
//           <div className="hidden md:flex items-center">

//             {/* Searchbar */}
//             <div className="h-10 flex relative">
//               <input className="h-full w-full rounded-sm px-4 text-black text-base outline-none border-[1px] border-slate-200 focus-visible:border-black duration-200" type="text" placeholder=Search... />
//               <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl "><IoSearchOutline /></span>
//             </div>

//             {/* Logo */}
//             <div className="px-5 rounded-full bg-transparent flex items-center gap-2 duration-300 cursor-pointer">
//               <Image src="/logo.jpg" height={110} width={120} alt=" />
//             </div>

//             {/* Account */}
//             <div className="px-5 rounded-full bg-transparent flex items-center gap-2 duration-300 cursor-pointer">
//               <AiOutlineUser size={25} />
//             </div>

//             {/* Wishlist */}
//             <div className="px-5 rounded-full bg-transparent flex items-center gap-2 duration-300 cursor-pointer">
//               <AiOutlineHeart size={25} className="hover:text-red-900" />
//             </div>

//             {/* Cart */}
//             <div className="flex relative flex-col justify-center px-5 rounded-full bg-transparent items-center gap-2 duration-300 cursor-pointer">
//               <BsCart2 className="hover:text-red-500 text-3xl" />
//               <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center text-xs ">0</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar;

import React, { useState } from "react";

function Navbar() {

const [activeDropdown, setActiveDropdown] = useState(null);

const toggleDropdown = (dropdownName) => {
  setActiveDropdown((prevActiveDropdown) =>
    prevActiveDropdown === dropdownName ? null : dropdownName
  );
};

  return (
    <nav className="shadow-sm text-black mb-10 bg-slate-50 mt-1 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menu */}
        <ul className="flex space-x-4 md:flex w-fit gap-12 mx-auto list-none">
          <li className="relative group">
            <a
              href="/"
              className="no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
            >
              HOME
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-yellow-500 no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown("category")}
            >
              CATEGORY
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === "category" ? "block" : "hidden"
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <div className="flex space-x-20">
                <div className="w-1/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Mens Jewelry
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Rings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Necklaces
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-2/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Womens Jewelry
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Bracelets
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Earrings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-3/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Collections
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Summer Collection
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Holiday Collection
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-yellow-500 no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown("jewelry")}
            >
              JEWELRY
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === "jewelry" ? "block" : "hidden"
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <div className="flex space-x-4">
                <div className="w-1/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Mens Jewelry
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Rings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Necklaces
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-2/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Womens Jewelry
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Bracelets
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Earrings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Collections
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Summer Collection
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Holiday Collection
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-yellow-500 no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown("mens")}
            >
              MENS
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === "mens" ? "block" : "hidden"
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <ul className="list-none space-y-1">
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Mens
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Womens
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Perfume
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-yellow-500 no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown("womens")}
            >
              WOMENS
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === "womens" ? "block" : "hidden"
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <ul className="list-none space-y-1">
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Mens
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Womens
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Perfume
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown("collections")}
            >
              COLLECTIONS
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === "collections" ? "block" : "hidden"
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <ul className="list-none space-y-1 z-20">
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Men
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Women
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Perfume
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/* Add more menu items here */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
