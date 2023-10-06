"use client"
import React, { Component } from 'react'
import ReactDOM from "react-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from "next/link";
import Image from 'next/image';


const RelatedProducts = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        }
      };

  return (
    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
        <div className='text-2xl font-bold mb-5'>You Might Also Like</div>
         
        <Carousel responsive={responsive} containerClass='-mx-[10px]' itemClass='px-[10px]'> 
        
        <Link  href="/" className='transform overflow-hidden bg-white duration-300 hover:scale-105 
            cursor-pointer'>
              <Image src="/watch-2.jpg" className='w-[280px] h-[280px]' height={600} width={600}  alt="" />
               <div className='p-4 text-black/[0.9]'>
                 <h2 className='text-lg font-medium'>Product Name</h2>
                 <div className='flex items-center text-black/[0.5]'>
                   <p className='mr-2 text-lg font-semibold'>$20.00</p>
                   <p className='text-base font-medium line-through'>$30.00</p>
                   <p className='ml-auto text-base font-medium text-green-500'>10% off</p>
                 </div>
               </div>
        </Link>

        <Link  href="/" className='transform overflow-hidden bg-white duration-300 hover:scale-105 
            cursor-pointer'>
              <Image src="/perfume.jpeg" className='w-[280px] h-[280px]' height={600} width={600}  alt="" />
               <div className='p-4 text-black/[0.9]'>
                 <h2 className='text-lg font-medium'>Product Name</h2>
                 <div className='flex items-center text-black/[0.5]'>
                   <p className='mr-2 text-lg font-semibold'>$20.00</p>
                   <p className='text-base font-medium line-through'>$30.00</p>
                   <p className='ml-auto text-base font-medium text-green-500'>10% off</p>
                 </div>
               </div>
        </Link>

        <Link  href="/" className='transform overflow-hidden bg-white duration-300 hover:scale-105 
            cursor-pointer'>
              <Image src="/perfume2.webp" className='w-[280px] h-[280px]' height={600} width={600}  alt="" />
               <div className='p-4 text-black/[0.9]'>
                 <h2 className='text-lg font-medium'>Product Name</h2>
                 <div className='flex items-center text-black/[0.5]'>
                   <p className='mr-2 text-lg font-semibold'>$20.00</p>
                   <p className='text-base font-medium line-through'>$30.00</p>
                   <p className='ml-auto text-base font-medium text-green-500'>10% off</p>
                 </div>
               </div>
        </Link>

        <Link  href="/" className='transform overflow-hidden bg-white duration-300 hover:scale-105 
            cursor-pointer'>
              <Image src="/handbag2.webp" className='w-[280px] h-[280px]' height={600} width={600}  alt="" />
               <div className='p-4 text-black/[0.9]'>
                 <h2 className='text-lg font-medium'>Product Name</h2>
                 <div className='flex items-center text-black/[0.5]'>
                   <p className='mr-2 text-lg font-semibold'>$20.00</p>
                   <p className='text-base font-medium line-through'>$30.00</p>
                   <p className='ml-auto text-base font-medium text-green-500'>10% off</p>
                 </div>
               </div>
        </Link>
        <Link  href="/" className='transform overflow-hidden bg-white duration-300 hover:scale-105 
            cursor-pointer'>
              <Image src="/eyeWear2.webp" className='w-[280px] h-[280px]' height={600} width={600}  alt="" />
               <div className='p-4 text-black/[0.9]'>
                 <h2 className='text-lg font-medium'>Product Name</h2>
                 <div className='flex items-center text-black/[0.5]'>
                   <p className='mr-2 text-lg font-semibold'>$20.00</p>
                   <p className='text-base font-medium line-through'>$30.00</p>
                   <p className='ml-auto text-base font-medium text-green-500'>10% off</p>
                 </div>
               </div>
        </Link>
        
          
           </Carousel> ;  
    </div>
  )
}

export default RelatedProducts