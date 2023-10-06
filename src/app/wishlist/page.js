// 'use client'
// import React, { useEffect, useState } from 'react'

// const Wishlist = () => {

//     const [whishlistItem, setWishlistItem ] = useState([]);

//     useEffect(() => {
//         const storedWishlistItem = JSON.parse(localStorage.getItem("wishlistItem")) || [];
//         setWishlistItem(storedWishlistItem);
//     }, []);

//     const removeFromWishlist = (itemIndex) => {
//         const updatedWishlistItems = [...whishlistItems];
//         updatedWishlistItems.splice(itemIndex,1);
//         setWishlistItem(updatedWishlistItems);
//         localStorage.setItem('wishlistItems',JSON.stringify(updatedWishlistItems));
//     };

//   return (
//     <div className='container mx-auto px-10 py-5 md:py-10'>
//         <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-center mb-6 md:mb-10'>Whishlist</h2>
    
//     {whishlistItem.length == 0 ? (
//         <p>Your cart is empty</p>
//     ): (
//         <div> 
//             <div className='overflow-x-auto'>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Product Name</th>
//                             <th>Product Price</th>
//                             <th>Delete Product</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {whishlistItem.map((item,id) => (
//                             <tr key={id}>
//                                 <td>{item.name}</td>
//                                 <td>{item.price}</td>
//                                 <td><button onClick={() => removeFromWishlist(id)}>delte</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )}
    
//     </div>
//   )
// }

// export default Wishlist


'use client'
import React, { useEffect, useState } from 'react'
import {MdDeleteOutline} from "react-icons/md";

const Wishlist = () => {
    const [wishlistItem, setWishlistItem] = useState([]); // Corrected the variable name

    useEffect(() => {
        const storedWishlistItem = JSON.parse(localStorage.getItem("wishlistItems")) || []; // Corrected the storage key
        setWishlistItem(storedWishlistItem);
    }, []);

    const removeFromWishlist = (itemIndex) => {
        const updatedWishlistItems = [...wishlistItem]; // Corrected the variable name
        updatedWishlistItems.splice(itemIndex, 1);
        setWishlistItem(updatedWishlistItems);
        localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));
    };

    return (
        <div className='container mx-auto px-10 py-5 md:py-10'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-center mb-6 md:mb-10'>Wishlist</h2>

            {wishlistItem.length === 0 ? ( // Corrected the comparison operator
                <p>Your wishlist is empty</p>
            ) : (
                <div>
                    <div className='overflow-x-auto'>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className='bg-blue-100'>
                                <tr>
                                    <th className="border border-gray-100 shadow-md p-2 md:p-4">Product Name</th>
                                    <th className="border border-gray-100 shadow-md p-2 md:p-4">Product Price</th>
                                    <th className="border border-gray-100 shadow-md p-2 md:p-4">Delete Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistItem.map((item, id) => (
                                    <tr key={id}>
                                        <td className="border border-gray-300 p-2 md:p-3 text-center">{item.name}</td>
                                        <td className="border border-gray-300 p-2 md:p-3 text-center">{item.price}</td>
                                        <td className="border border-gray-300 p-2 md:p-3 text-center">
                                            <button onClick={() => removeFromWishlist(id)} 
                                            className="text-red-600 underline cursor-pointer">
                                                <MdDeleteOutline size={25} />
                                            </button>
                                        </td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Wishlist;
