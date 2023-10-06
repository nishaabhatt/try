"use client"
import React, {useState} from "react"
import Link from "next/link"
 import Image from "next/image";


const product = {
  
  heading: {
    title:"Women Collections",
  },

 items:[
  {
    id:1,
    img: "/handbad1.webp",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top rating",
  href:"product",
  },
  {
    id:2,
    img: "/jwellery1.jpeg",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "highest rated",
    href:"/",
  },
  {
    id:3,
    img: "/jwellery1.jpeg",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top trending",
    href:"/",
  },
  {
    id:4,
    img: "/jwellery1.jpeg",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:5,
    img: "/jwellery1.jpeg",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "highest rated",
    href:"/",
  },
  {
    id:6,
    img: "/jwellery1.jpeg",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:7,
    img: "/jwellery1.jpeg",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:8,
    img: "/handbag.webp",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top trending",
    href:"/",
  },
  {
    id:9,
    img: "/perfume.jpeg",
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
]
}



const Womens = () => {
 

  const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category
  const filteredProducts = selectedCategory
    ? product.items.filter((product) => product.category === selectedCategory)
    : product.items;



  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

 const filteredData = product.items.filter((item) => item.category === selectedCategory)

  return (
    <div className="relative w-full max-w-[90%] px-5 py-10 md:px-10 mx-auto">
        <h2 className="max-w-xl mx-auto text-center text-3xl lg:text-4xl font-bold py-10">
            {product.heading.title}</h2>

     <select className="p-4 bg-white border border-gray-300" onSelect={console.log()} value={selectedCategory}
     onChange={handleCategoryChange} >
     {product.items.map((item) => (
    <option key={item?.id} value={item.category}>
      {item?.category}
    </option>
      ))}
     </select>


<div className="relative">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 my-14
    px-5 md:px-0" >

     {
      filteredData.length !== 0 ? (filteredData.map((item,id) => (
        <Link key={item?.id} href={item.href} className="transform overflow-hidden bg-white duration-300 hover:scale-105 
        cursor-pointer">
          <Image src={item?.img} className="w-full h-[280px]" height={800} width={800}  alt="" />
           <div className="p-4 text-black/[0.9]">
             <h2 className="text-lg font-medium">{item?.heading}</h2>
             <div className="flex items-center text-black/[0.5]">
               <p className="mr-2 text-lg font-semibold">{item?.p1}</p>
               <p className="text-base font-medium line-through">{item?.p2}</p>
               <p className="ml-auto text-base font-medium text-green-500">{item?.p3}</p>
             </div>
           </div>
        </Link>
      ))) : (
        product.items.map((item,id) => (
          <Link key={item?.id} href={item.href} className="transform overflow-hidden bg-white duration-300 hover:scale-105 
          cursor-pointer">
            <Image src={item?.img} className="w-full h-[280px]" height={800} width={800}  alt="" />
             <div className="p-4 text-black/[0.9]">
               <h2 className="text-lg font-medium">{item?.heading}</h2>
               <div className="flex items-center text-black/[0.5]">
                 <p className="mr-2 text-lg font-semibold">{item?.p1}</p>
                 <p className="text-base font-medium line-through">{item?.p2}</p>
                 <p className="ml-auto text-base font-medium text-green-500">{item?.p3}</p>
               </div>
             </div>
          </Link>
        ))
      )
     }
  

    
        </div>
      </div>
    </div> 
  )
}

export default Womens