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
    img: '/handbag2.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top trending",
    href:"/",
  },
  {
    id:4,
    img: '/watch-1.jpg',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:5,
    img: '/handbag3.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "highest rated",
    href:"/",
  },
  {
    id:6,
    img: '/watch-5.webp',
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
    img: '/jwellery2.webp',
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
  }
]
}

const HotNewPicks = () => {
  return (
    <div className="w-full max-w-[95%] px-5 py-5 md:px-5 lg:px-10 mx-auto">
      <h2 className="max-w-xl mx-auto text-center text-2xl lg:text-4xl font-bold mb-6 md:mb-10">
        Hot New Picks
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 my-8 md:my-14 px-2 md:px-0">
        {product.items.map((item) => (
          <Link key={item.id} href={item.href} className="transform overflow-hidden bg-white duration-300 hover:scale-105 cursor-pointer">
            <Image
              src={item.img}
              className="w-[200px] h-[170px] md:w-full md:h-[280px]"
              height={500}
              width={500}
              alt=""
            />
           
<div className="p-3 sm:p-4 text-black/[0.9]">
  <h2 className="text-sm md:text-base lg:text-lg xl:text-xl font-medium mb-1 md:mb-2">
    {item.heading}
  </h2>
  <div className="flex flex-col sm:flex-row items-start sm:items-center text-black/[0.5]">
    <p className="mr-2 text-sm md:text-base font-semibold mb-1 sm:mb-0">
      {item.p1}
    </p>
    <p className="text-sm md:text-base font-medium line-through">
      {item.p2}
    </p>
    <p className="mt-1 ml-0 sm:mt-0 sm:ml-auto text-sm md:text-base font-medium text-green-500">
      {item.p3}
    </p>
  </div>
</div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotNewPicks;



