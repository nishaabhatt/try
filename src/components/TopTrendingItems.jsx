import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const product = {
  
 items:[
  {
    id:1,
    img: '/jwellery1.jpeg',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top rating",
  href:"/",
  },
  {
    id:2,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "highest rated",
    href:"/",
  },
  {
    id:3,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top trending",
    href:"/",
  },
  {
    id:4,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:5,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "highest rated",
    href:"/",
  },
  {
    id:6,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:7,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:8,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top trending",
    href:"/",
  },
  {
    id:9,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:10,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:11,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:12,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:13,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
]
}

const TopTrendingItems = () => {
  return (
   <div className='w-full max-w-[95%] px-5 py-10 md:px-10 mx-auto'>
    <h2 className='max-w-xl mx-auto text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10'>Top Trending Items</h2>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-14
    px-5 md:px-0'>
        
        {product.items.map((item,id) => (
       <Link key={item?.id} href={item.href} className='transform overflow-hidden bg-white duration-300 hover:scale-105 
       cursor-pointer'>
         <Image src={item?.img} height={600} width={600}  className='w-[190px] h-[160px] md:w-[230px] md:h-[230px] lg:w-full lg:h-[280px]' alt="" />
          <div className='p-4 text-black/[0.9]'>
            <h2 className='text-sm md:text-lg font-medium'>{item?.heading}</h2>
            <div className='flex items-center text-black/[0.5]'>
              <p className='mr-2 text-sm md:text-lg font-semibold'>{item?.p1}</p>
              <p className='hidden lg:block text-base font-medium line-through'>{item?.p2}</p>
              <p className='hidden lg:block ml-auto text-sm md:text-base font-medium text-green-500'>{item?.p3}</p>
            </div>
            <p className='lg:hidden text-sm md:text-base font-medium line-through'>{item?.p2}</p>
              <p className='lg:hidden ml-auto text-sm md:text-base font-medium text-green-500'>{item?.p3}</p>
          </div>
       </Link>
     ))}

    </div>
   </div>  
  )
}


export default TopTrendingItems;