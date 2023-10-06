"use client"
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";

const product = {
    items: [
        {
            id:1,
            img: "/jwellery1.jpeg",
            heading: "Product name",
            p1: "$20.00",
            p2: "$25.00",
            p3: "20% off",
            category: "top rating",
          href:"/",
          },
          {
            id:1,
            img: "/perfume.jpeg",
            heading: "Product name",
            p1: "$20.00",
            p2: "$25.00",
            p3: "20% off",
            category: "top rating",
          href:"/",
          },
          {
            id:2,
            img: "/perfume.jpg",
            heading: "Product name",
            p1: "$20.00",
            p2: "$25.00",
            p3: "20% off",
            category: "top rating",
          href:"/",
          },
          {
            id:3,
            img: "/perfume2.webp",
            heading: "Product name",
            p1: "$20.00",
            p2: "$25.00",
            p3: "20% off",
            category: "highest rated",
          href:"/",
          },
          {
            id:4,
            img: "/perfume3.jpg",
            heading: "Product name",
            p1: "$20.00",
            p2: "$25.00",
            p3: "20% off",
            category: "bestseller",
          href:"/",
          },
          {
            id:5,
            img: "/perfume4.jpg",
            heading: "Product name",
            p1: "$20.00",
            p2: "$25.00",
            p3: "20% off",
            category: "highest rated",
          href:"/",
          },
          {
            id:6,
            img: "/perfume5.jpg",
            heading: "Product name",
            p1: "$20.00",
            p2: "$25.00",
            p3: "20% off",
            category: "bestseller",
          href:"/",
          },
          {
            id:7,
            img: "/perfume6.avif",
            heading: "Product name",
            p1: "$20.00",
            p2: "$25.00",
            p3: "20% off",
            category: "top rating",
          href:"/",
          },
          
    ]
}

const Page = () => {

    const allCategories = product.items.map((item) => item.category);
    const uniqueCategories = [...new Set(allCategories)]
    
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const filterData = selectedCategory ? product.items.filter((product) => product.category === selectedCategory)
     : product.items;
  
     const handleEventChanger = (event) => {
      setSelectedCategory(event.target.value);
     };
  
     const filteredData = product.items.filter((item) => item.category === selectedCategory)
  
    return (
      <div className="w-full max-w-[90%] px-5 py-10 md:px-10 mx-auto">
          <h2 className="max-w-xl mx-auto text-center text-3xl lg:text-4xl font-bold py-10">
              Perfume Collection</h2>
  
        <label>choose category:</label>
        <select className="my-10 ml-5 p-4  bg-white border focus:outline-none shadow text-gray-600 rounded 
         focus:ring ring-gray-200 group  flex-end" onSelect={console.log()} value={selectedCategory}
         onChange={handleEventChanger}>
        
              <option value="">All</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
  
        </select>
  

  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 my-14
           px-5 md:px-0">
     
          {filteredData.length!==0 ? (filteredData.map((item,id) => (
               <Link key={item?.id} href={item.href} className="transform overflow-hidden bg-white duration-300 hover:scale-105 
               cursor-pointer">
                 <Image src={item?.img} className="w-full h-[280px]" height={600} width={600}  alt="" />
                  <div className="p-4 text-black/[0.9]">
                    <h2 className="text-lg font-medium">{item?.heading}</h2>
                    <div className="flex items-center text-black/[0.5]">
                      <p className="mr-2 text-lg font-semibold">{item?.p1}</p>
                      <p className="text-base font-medium line-through">{item?.p2}</p>
                      <p className="ml-auto text-base font-medium text-green-500">{item?.p3}</p>
                    </div>
                  </div>
               </Link>
          ))) :(product.items.map((item,id) => (
              <Link key={item?.id} href={item.href} className="transform overflow-hidden bg-white duration-300 hover:scale-105 
              cursor-pointer">
                <Image src={item?.img} className="w-full h-[280px]" height={600} width={600}  alt="" />
                 <div className="p-4 text-black/[0.9]">
                   <h2 className="text-lg font-medium">{item?.heading}</h2>
                   <div className="flex items-center text-black/[0.5]">
                     <p className="mr-2 text-lg font-semibold">{item?.p1}</p>
                     <p className="text-base font-medium line-through">{item?.p2}</p>
                     <p className="ml-auto text-base font-medium text-green-500">{item?.p3}</p>
                   </div>
                 </div>
              </Link>
            )))
  }
          
          </div>
      </div>
    )
  }

export default Page
