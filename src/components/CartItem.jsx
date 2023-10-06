import React from 'react'
import Image from 'next/image';
import {RiDeleteBin6Line} from "react-icons/ri";

const Cart = {
 items: [
    {
      id: 1,
      href: "/",
      img: "/handbad1.webp",


    },
    {
      id: 2,
      href: "/",
      img: "/perfume2.webp",
      

    },
    {
      id: 3,
      href: "/",
      img: "/handbag2.webp",
      

    },

  ]
}

const CartItem = () => {
  return (
 
    <div className='flex py-5 gap-3 md:gap-5 border-b flex-col'>
      {Cart.items.map((item,id) => (
        <>
      <div  className='shrink-0 aspect-square w-[80px] md:w-[120px]'>
        <Image src={item?.img} height={600} width={600} alt='' />
      </div>
     
      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='text-lg md:text-2xl fone-semibold text-black/[0.8]'>abc</div>
          <div className='text-sm md:text-md fone-medium text-black/[0.5] block md:hidden'>description</div>
          <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2' >MRP: $40.00</div>
        </div>
        <div className='tetxt-md font-medium text-black/[0.5] hidden md:block'>description</div>

        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
            <div className='flex items-center gap-1'>
              <div className='font-semibold'>Quantity:</div>
              <select className='hover:text-black'>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
                
              </select>
            </div>
          </div>
          <RiDeleteBin6Line />
        </div>
     
      </div>
      </>
      ))}
    </div>
  )
}

export default CartItem