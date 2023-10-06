import React from "react"
import Link from "next/link";
import Image from "next/image";

import {GiHamburgerMenu} from "react-icons/gi";
import {Disclosure} from "@headlessui/react";
import { AiOutlineHome} from "react-icons/ai";
import {VscPerson} from "react-icons/vsc";
import {GrRestroomWomen} from "react-icons/gr";
import {GiEmeraldNecklace} from "react-icons/gi";
import {TbPerfume} from "react-icons/tb";
import {MdOutlineCollections} from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {RiCloseFill} from "react-icons/ri";


const SideNavbar = () => {
  return (
    <div >
       <Disclosure as="nav" className="md:hidden">

        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center
        rounded-md p-2 text-gray-900 hover:text-white focus:ouline-none focus:ring-2 focus:ring-inset
        focus:ring-white  hover:bg-gray-900 ">
            <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true"/>
        </Disclosure.Button>

      

        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 
        peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start items-center">
               <Link href="/"><Image src="/logo.jpg" alt="" height={600} width={600}  className="h-[110px] w-[110px] mt-10 cursor-pointer mx-auto" /></Link> 
            
            <div className="my-10 border-b border-gray-100 pb-4">
                <Link href="/"><div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <AiOutlineHome  className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Home</h3>
                </div></Link>
                
                <Link href="mencat"><div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <VscPerson className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Mens</h3>
                </div></Link>
                
                <Link href="women">
                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <GrRestroomWomen  className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Womens</h3>
                </div></Link>
               
                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <GiEmeraldNecklace  className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Jwellery</h3>
                </div>
                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <TbPerfume  className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Perfume</h3>
                </div>
                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <MdOutlineCollections  className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Collections</h3>
                </div>

            </div>


                   {/* {acc, wishlisht, cart} */}
                 <div className="my-5 border-b border-gray-100 pb-4">
                   <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                      p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <BiUser  className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Account</h3>
                    </div>
                    <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                      p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <FiHeart  className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Wishlist</h3>
                    </div>

                    <Link href="cart">
                    <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-200
                      p-2 rounded-md cursor-pointer hover:shadow-lg">
                    {/* {icon} */}
                    <HiOutlineShoppingBag  className="text-2xl text-gray-600 group-hover:text-white"/>
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Cart</h3>
                    </div>
                    </Link>
                    
                </div>

            </div>
        </div>
        </Disclosure>  
     
    </div>
  
  )
}

export default SideNavbar