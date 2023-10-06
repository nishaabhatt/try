// "use client"
// import {useState} from "react";
// import DiamondJwelleryCarosel from "@/components/carosel/DiamondJwelleryCarosel"
// import React from 'react'
// import {IoMdHeartEmpty} from "react-icons/io";
// import {TbReplace, TbTruckDelivery} from "react-icons/tb";
// import {MdSecurity} from "react-icons/md";
// import RelatedProducts from "@/components/RelatedProducts";
// import { useRouter } from 'next/navigation';

// const ProductDetails = () => {

//     const router = useRouter();

//     const [quantity, setQuantity] = useState(1);
//     const [itemAdded, setItemAdded] = useState(false);

//     const handleQuantityChange = (newQuantity) => {
//         if(newQuantity >= 1 )
//         setQuantity(newQuantity);
//     }

//     const incrementQuantity = () => {
//         handleQuantityChange(quantity+1);
//     }

//     const decrementQuantity = () => {
//         handleQuantityChange(quantity-1);
//     }
 
//      const addToCart = (productPrice) => {
//     try {
//         //Construct the cart item object
//         const cartItem = {
//           name: "Oxidised Owning My Perfectionist Tendencies Necklace", // Replace with the actual product name
//           price: productPrice, // Replace with the actual product price
//           quantity: quantity,
//         };
  
//        // Retrieve the current cart items from localStorage
//         const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
//        // Check if the same product already exists in the cart
//         const existingCartItemIndex = cartItems.findIndex(
//           (item) => item.name === cartItem.name
//         );
  
//         if (existingCartItemIndex !== -1) {
//         //  If the same product exists, update its quantity
//           cartItems[existingCartItemIndex].quantity += quantity;
//         } else {
//         //  If it doesn't exist, add the new item to the cart
//           cartItems.push(cartItem);
//         }
  
//       //  Store the updated cart items in localStorage
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
//       //  Set itemAdded to true to change the button text
//         setItemAdded(true);
  
//       //  Redirect to the cart page
//         router.push("/cart");
//       } catch (error) {
//        // Handle any potential errors here
//         console.error("Error adding item to cart:", error);
//       }
//     };
      

//       const pricingData = [
//         {
//           name: 'Runaway Kind Of Girl-Duffel Bag ',
//           subname: 'Stone',
//           priceEarlier: 30.00,
//           pricePast: 20.00, 
//           discount: 10,
//         },
 
//       ];
    
//       // Use this data to dynamically render pricing options
    
//       const renderPricingOptions = () => {
//         return pricingData.map((option, index) => (
//           <div key={index}>
//             <div className='text-[24px] md:text-[28px] lg:text-[34px] font-semibold mb-2 '>{option.name}</div>
//             <div className='text-sm lg:text-lg font-semibold mb-5 pt-5'>{option.subname}</div>
//             <div className='flex pt-3 px-5'>
//                 <p className='text-lg lg:text-xl font-semibold line line-through'>${option.priceEarlier}.00</p>
//                 <p className='text-lg lg:text-xl font-semibold pl-5'>${option.pricePast}.00</p>
//                 <p className='ml-auto text-sm lg:text-lg font-medium text-green-500'>{option.discount}% off</p>
//             </div>
//             <div className='text-sm lg:text-md font-medium text-black/[0.5] '>incl. of taxes</div>
//           </div>
//         ));
//       };
    
      

//   return (

   


//    <div className='w-full md:py-20  max-w-[90%] px-10 py-10 md:px-10 mx-auto'>

//    <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] px-10'> 
   
//         {/* left col start */}
//         <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto'>
//             <DiamondJwelleryCarosel />
//         </div>
//         {/* left col end */}

//         {/* right col start */}
//         <div className='flex-[1] py-3 mt-10 '>

//         <div className="product-pricing my-5 ">{renderPricingOptions()}</div>

//            {/* feature */}
//             <div className=' product-data-warranty my-10  mr-10 ml-10'>
//                 <div className='product-warranty-data '>
//                     <TbTruckDelivery className="warranty-icon hover:bg-green-400" />
//                     <p className='hover:cursor-pointer'>Free Delivery</p>
//                 </div>
//                 <div className='product-warranty-data  '>
//                     <TbReplace className="warranty-icon hover:bg-green-400" />
//                     <p className='hover:cursor-pointer'>30 days replacement</p>
//                 </div>
//                 <div className='product-warranty-data'>
//                     <TbTruckDelivery className="warranty-icon hover:bg-green-400" />
//                     <p className='hover:cursor-pointer'>Safe Delivery</p>
//                 </div>
//                 <div className='product-warranty-data'>
//                     <MdSecurity className="warranty-icon hover:bg-green-400" />
//                     <p className='hover:cursor-pointer'>Years warranty</p>
//                 </div>
//             </div>

//              {/* quanti */}
//              <button onClick={decrementQuantity} className="border border-gray-300 h-10 w-10 font-bold">-</button>
//              <input type="number" min="1" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} 
//              className="border  w-20 h-10 text-center border-gray-300 "/>
//              <button onClick={incrementQuantity} className="border border-gray-300 h-10 w-10 font-bold">+</button>




//             {/* add to cart */}
           
//           <button
//             onClick={() => addToCart(pricingData[0].pricePast)} // Pass the correct product price
//             className={`py-4 mt-10 border w-full font-medium transition-transform border-green-500 text-black hover:bg-green-500 hover:text-white active:bg-green-950 hover:cursor-pointer ${
//               itemAdded ? "bg-white text-green" : ""
//             }`}
//           >
//             {itemAdded ? "Added to Cart" : "ADD TO CART"}
//           </button>
//            {/* // whishlist button */}
//             <button className='py-4  border w-full font-medium mt-2  transition-transform
//             active:scale-95 mb-3 border-green-500 text-black hover:bg-green-500 hover:text-white
//              active:bg-green-950 hover:cursor-pointer flex items-center justify-center'>
//                 WHISHLIST <IoMdHeartEmpty size={20} className="pl-1"/></button>

//              <div>
//                 <div className='text-lg font-bold mb-4 mt-4'>Product Details</div>
//                 <div className='lg:text-md mb-5 mx-20px px-20px lg:mx-10px  '>"Used as overnight travel bag, weekend bag, weekender travel duffels, hospital bag, great choice for overnight or weekend trip, two-days business travel, short journey.
// Women duffle bag is made of 100% Genuine Leather, 100% Polyester lining, quality smooth heavy-duty dual brass zippers, comfortable and durable.
// PERFECT SIZE & COLOR - One Main Zippered Compartment for Essentials and 2- Front Pockets. Multiple Zipper Pocket along with Phone Holder Inside the Bag. Front Large Capacity Zipper Pocket Helps You Easily Organize all Your Essential Items.
// STYLISH - Hand made by professional artisans. It can be used as a travel bag, Boarding Bag Luggage Garment Bag, overnight bag, weekend cabin duffel bag, carry on duffel, etc .
// HIGH QUALITY MATERIAL - The Cow hide leather travel bag is made of high quality thick leather, durable lining, with custom hardware, heavy-duty zipper. Dual Magnetic as well as Zipper closure for your security. FITS OVERHEAD & UNDERSEAT - 
// This under seat, carry-on luggage bag is ideal for air travel, business trips or excursions. "</div>
//              </div>

//         </div>
//         {/* right col end */}
//    </div>   

//    <RelatedProducts />

//    </div>
//   )
// }

//  export default ProductDetails;

"use client"
import { useState, useEffect } from "react";
import DiamondJwelleryCarosel from "@/components/carosel/DiamondJwelleryCarosel";
import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import RelatedProducts from "@/components/RelatedProducts";
import { useRouter } from 'next/navigation';

const ProductDetails = () => {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1)
      setQuantity(newQuantity);
  }

  const incrementQuantity = () => {
    handleQuantityChange(quantity + 1);
  }

  const decrementQuantity = () => {
    handleQuantityChange(quantity - 1);
  }

  const addToCart = (productPrice) => {
    try {
      // Construct the cart item object
        const cartItem = {
          name: "Oxidised Owning My Perfectionist Tendencies Necklace", // Replace with the actual product name
          price: productPrice, // Replace with the actual product price
          quantity: quantity,
        };
  
       // Retrieve the current cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
       // Check if the same product already exists in the cart
        const existingCartItemIndex = cartItems.findIndex(
          (item) => item.name === cartItem.name
        );
  
        if (existingCartItemIndex !== -1) {
        //  If the same product exists, update its quantity
          cartItems[existingCartItemIndex].quantity += quantity;
        } else {
        //  If it doesn't exist, add the new item to the cart
          cartItems.push(cartItem);
        }
  
      //  Store the updated cart items in localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
      //  Set itemAdded to true to change the button text
        setItemAdded(true);
  
      //  Redirect to the cart page
        router.push("/cart");
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const renderPricingOptions = () => {
            return pricingData.map((option, index) => (
              <div key={index}>
                <div className='text-[24px] md:text-[28px] lg:text-[34px] font-semibold mb-2 '>{option.name}</div>
                <div className='text-sm lg:text-lg font-semibold mb-5 pt-5'>{option.subname}</div>
                <div className='flex pt-3 px-5'>
                    <p className='text-lg lg:text-xl font-semibold line line-through'>${option.priceEarlier}.00</p>
                    <p className='text-lg lg:text-xl font-semibold pl-5'>${option.pricePast}.00</p>
                    <p className='ml-auto text-sm lg:text-lg font-medium text-green-500'>{option.discount}% off</p>
                </div>
                <div className='text-sm lg:text-md font-medium text-black/[0.5] '>incl. of taxes</div>
              </div>
            ));
          };

  const pricingData = [
    {
      name: 'Runaway Kind Of Girl-Duffel Bag ',
      subname: 'Stone',
      priceEarlier: 30.00,
      pricePast: 20.00,
      discount: 10,
    },
  ];

  useEffect(() => {
    // You can add responsive design logic here if needed
    // For example, adjust styles or layout based on screen size
  }, []);

  return (
    <div className='w-full py-10 px-5 md:px-10 lg:px-20 mx-auto'>
      <div className='flex flex-col lg:flex-row gap-10'>
        {/* left col start */}
        <div className='w-full md:w-auto flex-1 max-w-[900px] mx-auto'>
          <DiamondJwelleryCarosel />
        </div>
        {/* left col end */}
        {/* right col start */}
        <div className='flex-1  py-2 mt-10 lg:mt-0 lg:pt-0 lg:py-0'>
          <div className="md:my-5">{renderPricingOptions()}</div>
          {/* feature */}
          <div className='my-10 md:mr-10 md:ml-10'>
          <div className='product-warranty-data flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4'>
  <div className='flex items-center hover:bg-green-400 cursor-pointer'>
    <TbTruckDelivery className='warranty-icon' />
    <p>Free Delivery</p>
  </div>
  <div className='flex items-center hover:bg-green-400 cursor-pointer'>
    <TbReplace className='warranty-icon' />
    <p>30 days replacement</p>
  </div>
  <div className='flex items-center hover:bg-green-400 cursor-pointer'>
    <TbTruckDelivery className='warranty-icon' />
    <p>Safe Delivery</p>
  </div>
  <div className='flex items-center hover:bg-green-400 cursor-pointer'>
    <MdSecurity className='warranty-icon' />
    <p>Years warranty</p>
  </div>
</div>

          </div>
          {/* quantity */}
          <div className='flex items-center justify-center space-x-4'>
            <button onClick={decrementQuantity} className="border border-gray-300 h-10 w-10 font-bold">-</button>
            <input type="number" min="1" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} className="border w-20 h-10 text-center border-gray-300" />
            <button onClick={incrementQuantity} className="border border-gray-300 h-10 w-10 font-bold">+</button>
          </div>
          {/* add to cart */}
          <button
            onClick={() => addToCart(pricingData[0].pricePast)}
            className={`py-4 mt-10 border w-full font-medium transition-transform border-green-500 text-black hover:bg-green-500 hover:text-white active:bg-green-950 hover:cursor-pointer ${
              itemAdded ? "bg-white text-green" : ""
            }`}
          >
            {itemAdded ? "Added to Cart" : "ADD TO CART"}
          </button>
          {/* wishlist button */}
          <button className='py-4 border w-full font-medium mt-2 transition-transform active:scale-95 mb-3 border-green-500 text-black hover:bg-green-500 hover:text-white active:bg-green-950 hover:cursor-pointer flex items-center justify-center'>
            WHISHLIST <IoMdHeartEmpty size={20} className="pl-1" />
          </button>
          <div>
            <div className='text-lg font-bold mb-4 mt-4'>Product Details</div>
            <div className='lg:text-md mb-5'>
            Used as overnight travel bag, weekend bag, weekender travel duffels, hospital bag, great choice for overnight or weekend trip, two-days business travel, short journey.
 Women duffle bag is made of 100% Genuine Leather, 100% Polyester lining, quality smooth heavy-duty dual brass zippers, comfortable and durable.
 PERFECT SIZE & COLOR - One Main Zippered Compartment for Essentials and 2- Front Pockets. Multiple Zipper Pocket along with Phone Holder Inside the Bag. Front Large Capacity Zipper Pocket Helps You Easily Organize all Your Essential Items.
 STYLISH - Hand made by professional artisans. It can be used as a travel bag, Boarding Bag Luggage Garment Bag, overnight bag, weekend cabin duffel bag, carry on duffel, etc .
 HIGH QUALITY MATERIAL - The Cow hide leather travel bag is made of high quality thick leather, durable lining, with custom hardware, heavy-duty zipper. Dual Magnetic as well as Zipper closure for your security. FITS OVERHEAD & UNDERSEAT - 
 This under seat, carry-on luggage bag is ideal for air travel, business trips or excursions. 
            </div>
          </div>
        </div>
        {/* right col end */}
      </div>
      <RelatedProducts />
    </div>
  );
}

export default ProductDetails;



