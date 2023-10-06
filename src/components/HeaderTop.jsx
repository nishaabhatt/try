// import React from "react";

// import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

// const HeaderTop = () => {
//   return (
//     <div className="border-b border-gray-200 hidden sm:block">
//       <div className="container py-4">
//         <div className="flex justify-between items-center">
//           <div className="hidden lg:flex gap-1">
//             <div className="header_top__icon_wrapper">
//               <BsFacebook />
//             </div>
//             <div className="header_top__icon_wrapper">
//               <BsTwitter />
//             </div>
//             <div className="header_top__icon_wrapper">
//               <BsInstagram />
//             </div>
//             <div className="header_top__icon_wrapper">
//               <BsLinkedin />
//             </div>
//           </div>

//           <div className="text-gray-500 text-[12px]">
//             <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
//           </div>

//           <div className="flex gap-4">
            
//             <select
//               className="text-gray-500 text-[12px] w-[80px]"
//               name="language"
//               id="language"
//             >
//               <option value="English">English</option>
//               <option value="French">French</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderTop;

import React from 'react';

const content = {
  heading: 'Limited-time offer: “Hurry! 25% off all products ends in 3 days!',
};

const HeaderTop = () => {
  return (
    <div className="bg-[#153d4f] w-full hidden md:block">
      <div className="container mx-auto px-4 py-1">
        {content.heading && (
          <p className="text-center text-white font-medium text-[15px]">
            {content.heading}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderTop;
