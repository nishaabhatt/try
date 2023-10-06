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
            thumbWidth={80}
            className="productCarousel h-full">

             {/* <img src='/jwellery2.jpg' alt=""/>
             <img src='/jwellery2.1.jpg'  alt=''/>
             <img src='/jwellery2.2.jpg' alt=''/>
             <img src='/jwellery2.3.jpg'  alt=''/>
             <img src='/jwellery2.4.jpg'  alt=''/> */}

<Image src="/jwellery2.jpg" height={600} width={600} alt="" />
  <Image src="/jwellery2.1.jpg" height={600} width={600} alt="" />
  <Image src="/jwellery2.2.jpg" height={600} width={600} alt="" />
  <Image src="/jwellery2.3.jpg" height={600} width={600} alt="" />
  <Image src="/jwellery2.4.jpg" height={600} width={600} alt="" />

            </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;