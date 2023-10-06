"use client"
// import React, { useState, useEffect } from 'react';
//  import { MdDeleteOutline } from 'react-icons/md';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);


// useEffect(() => {
//         // Retrieve the cart items from localStorage when the component mounts
//         const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         setCartItems(storedCartItems);
//       }, []);
     

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };


//   const removeFromCart = (itemIndex) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems.splice(itemIndex, 1);
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };


//   const handleQuantityChange = (itemIndex, newQuantity) => {
//     if (newQuantity >= 1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[itemIndex].quantity = newQuantity;
//       setCartItems(updatedCartItems);
//       localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//     }
//   };

//   return (
//     <div className="container mx-auto py-10">
//       <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item, index) => (
//             <div key={index} className="flex mb-4">
//               <div className="flex-grow ml-4">
//                 <div className="flex flex-row gap-20 justify-between items-center">
//                   <p className="text-lg font-semibold">{item.name}</p>

//                   <div className="ml-4">
//                     <button onClick={() => handleQuantityChange(index, item.quantity - 1)} className="border w-10 h-10 text-center border-gray-300">
//                       -
//                     </button>
//                     <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))} className="border w-20 h-10 text-center border-gray-300" />
//                     <button onClick={() => handleQuantityChange(index, item.quantity + 1)} className="border w-10 h-10 text-center border-gray-300">
//                       +
//                     </button>
//                   </div>
//                   <p className="flex-grow ml-4 font-medium text-md">Quantity: {item.quantity}</p>
//                 </div>
//                 <p className="text-gray-600">${item.price}</p>
//                 <div className="flex items-center"></div>
//               </div>
//               <div className="flex flex-col items-end">
//                 <p className="text-xl font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
//                 <button onClick={() => removeFromCart(index)} className="text-red-600 underline cursor-pointer">
//                   <MdDeleteForever />
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//           <hr className="my-6" />
//           <div className="flex justify-end">
//             <div className="text-xl font-semibold">Total: ${calculateTotalPrice().toFixed(2)}</div>
//           </div>
//           <div className="mt-6">
//             <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
            // Retrieve the cart items from localStorage when the component mounts
            const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            setCartItems(storedCartItems);
          }, []);

        const removeFromCart = (itemIndex) => {
                const updatedCartItems = [...cartItems];
                updatedCartItems.splice(itemIndex, 1);
                setCartItems(updatedCartItems);
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        };
            
            
              const handleQuantityChange = (itemIndex, newQuantity) => {
                if (newQuantity >= 1) {
                  const updatedCartItems = [...cartItems];
                  updatedCartItems[itemIndex].quantity = newQuantity;
                  setCartItems(updatedCartItems);
                  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                }
              };

  return (
    // <div className="container mx-auto py-10">
    //   <h1 className="text-2xl lg:text-4xl font-bold  justify-between  text-center mb-10">Shopping Cart</h1>

    //   {cartItems.length === 0 ? (
    //     <p>Your cart is empty.</p>
    //   ) : (
    //     <div>
    //       <table className="w-full border-collapse border border-gray-300 ">
    //         <thead className='bg-blue-100 p-8'>
    //           <tr>
    //             <th className="border border-gray-100 shadow-md p-4 ">Product Name</th>
    //             <th className="border border-gray-100 shadow-md p-4">Quantity</th>
    //             <th className="border border-gray-100 shadow-md p-4">Update Quantity</th>
    //             <th className="border border-gray-100 shadow-md p-4">product Price</th>
    //             <th className='border border-gray-100 shadow-md p-4'>Delete product</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {cartItems.map((item, index) => (
    //             <tr key={index}>
    //               <td className="border border-gray-300 p-3 justify-between text-center">{item.name}</td>
    //               <td className="border border-gray-300 p-3 justify-between text-center">{item.quantity}</td>
    //               {/* You can add the quantity bar here if needed */}
                  
                  
    //              <td className='justify-between text-center p-3'>
    //               <button onClick={() => handleQuantityChange(index, item.quantity - 1)} className="border w-10 h-10 text-center border-gray-300">
    //                  -
    //                  </button>
    //                  <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))} className="border w-20 h-10 text-center border-gray-300" />
    //                  <button onClick={() => handleQuantityChange(index, item.quantity + 1)} className="border w-10 h-10 text-center border-gray-300">
    //                    +
    //                 </button>
    //                 </td> 

    //                 <td className="border border-gray-300 p-3 justify-between text-center">${(item.price * item.quantity).toFixed(2)}</td>

    //                 <td className='justify-between text-center p-3'><button onClick={() => removeFromCart(index)} className="text-red-600 underline cursor-pointer">
    //                   <MdDeleteOutline size={25}/>               
    //             </button></td>

    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>

    //       <hr className="my-6" />
    //       <div className="flex justify-end">
    //         <div className="text-xl font-semibold">Total: ${calculateTotalPrice().toFixed(2)}</div>
    //       </div>
    //       <div className="mt-6">
    //         <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Checkout</button>
    //       </div>
    //     </div>
    //   )}
    // </div>

    <div className="container mx-auto px-10 py-6 md:py-10">
  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-6 md:mb-10">Shopping Cart</h1>

  {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className='bg-blue-100'>
            <tr>
              <th className="border border-gray-100 shadow-md p-2 md:p-4">Product Name</th>
              <th className="border border-gray-100 shadow-md p-2 md:p-4">Quantity</th>
              <th className="border border-gray-100 shadow-md p-2 md:p-4">Update Quantity</th>
              <th className="border border-gray-100 shadow-md p-2 md:p-4">Product Price</th>
              <th className='border border-gray-100 shadow-md p-2 md:p-4'>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 md:p-3 text-center">{item.name}</td>
                <td className="border border-gray-300 p-2 md:p-3 text-center">{item.quantity}</td>
                <td className="border border-gray-300 p-2 md:p-3 text-center">
                  <button onClick={() => handleQuantityChange(index, item.quantity - 1)} className="border w-8 md:w-10 h-8 md:h-10 text-center border-gray-300">
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    className="border w-12 md:w-20 h-8 md:h-10 text-center border-gray-300"
                  />
                  <button onClick={() => handleQuantityChange(index, item.quantity + 1)} className="border w-8 md:w-10 h-8 md:h-10 text-center border-gray-300">
                    +
                  </button>
                </td>
                <td className="border border-gray-300 p-2 md:p-3 text-center">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="border border-gray-300 p-2 md:p-3 text-center">
                  <button onClick={() => removeFromCart(index)} className="text-red-600 underline cursor-pointer">
                    <MdDeleteOutline size={25} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="my-4 md:my-6" />
      <div className="flex justify-end">
        <div className="text-lg md:text-xl font-semibold">Total: ${calculateTotalPrice().toFixed(2)}</div>
      </div>
      <div className="mt-4 md:mt-6">
        <button className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  )}
</div>




  );
};

export default Cart;
