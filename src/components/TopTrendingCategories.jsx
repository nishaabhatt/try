"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const product = {
  
  heading: {
    title:"Women's Collections",
  },

 items:[
  {
    id:1,
    img: '/jwellery1.jpeg',
    heading: "Diamond Jwellery",
    p1: "$20.00",
     href:"diamondJwellery",
  },
  {
    id:2,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    href: "/"
   
  },
  {
    id:3,
    img: '/perfume2.webp',
    heading: "Product name",
    p1: "$20.00",
    href:"/",
  },
  {
    id:4,
    img: '/handbag.webp',
    heading: "Product name",
    p1: "$20.00",
    
    href:"/",
  },
  {
    id:5,
    img: '/watch-3.jpg',
    heading: "Product name",
    p1: "$20.00",
    
    href:"/",
  },
  {
    id:6,
    img: '/watch-3.jpg',
    heading: "Product name",
    p1: "$20.00",
    
    href:"/",
  }
] 
}


const TopTrendingCategories = () => {


  return (
    <div className='w-full max-w-[95%] px-5 py-10 md:px-10 mx-auto'>
        <h2 className='max-w-xl mx-auto text-center text-2xl md:text-3xl lg:text-4xl font-bold py-10'>
            Top  Trending Categories </h2>

        

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-14
         px-5 md:px-0'>
   
          {product.items.map((item,id) => (
            <Link key={item?.id} href={item.href} className='transform overflow-hidden bg-white duration-300 hover:scale-105 
            cursor-pointer'>
              <Image src={item?.img} height={600} width={600}  className='sm:w-[100px] sm:h-[100px] md:w-[200px] lg:w-full md:h-[200px] lg:h-auto rounded-full' alt="" />
               <div className='px-3 text-black/[0.9]'>
                 <h2 className='text-sm md:text-md font-medium'>{item?.heading}</h2>
                 <div className='flex items-center text-black/[0.5]'>
                   <p className='text-sm mr-2 md:text-md font-semibold'>{item?.p1}</p>
                 </div>
               </div>
            </Link>
          ))}
        
        </div>
    </div>
  )
}

export default TopTrendingCategories