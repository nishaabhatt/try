"use client"
import React, { Component }  from 'react'
import Image from 'next/image';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel 
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={60}
            
            className="productCarousel h-full">

   <Image src="/handbad1.webp" height={600} width={600} alt="" />
  <Image src="/handbag1_1.webp" height={600} width={600} alt="" />
  <Image src="/handbag1_2.webp" height={600} width={600} alt="" />
  <Image src="/handbag1_3.avif" height={600} width={600} alt="" />
  <Image src="/handbag1_4.avif" height={600} width={600} alt="" />

            </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;