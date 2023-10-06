// // components/OfferPage.js
// import React from 'react';

// const page = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
//       <div className="container mx-auto max-w-screen-xl">
//         <h1 className="text-4xl font-semibold text-center mb-6">Special Offers</h1>
//         {/* Add your offer content here */}
//       </div>
//     </div>
//   );
// };

// export default page;

// components/SummerFestivalOffers.js

import React from "react";

const SummerFestivalOffers = () => {
  return (
    <section className="bg-indigo-600 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Summer & Festival Offers
        </h1>
        <p className="text-lg mb-8">
          Get ready for the best deals of the season! Don not miss out on our
          special offers for summer and festivals.
        </p>
        <a
          href="#"
          className="bg-white text-indigo-600 hover:bg-indigo-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default SummerFestivalOffers;

