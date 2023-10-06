// components/WhatsAppButton.js

// import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';

// const WhatsAppButton = () => {
//   return (
//     <div id="whatsapp-fab" className="fixed bottom-10 right-10 z-10">
//       <a
//         href="https://api.whatsapp.com/send?phone=9760590847"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition duration-300"
//       >
//         {/* <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className=""
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//           />
//         </svg> */}

// <svg xmlns="http://www.w3.org/2000/svg"
//  viewBox="0 0 24 24"
//   fill="none"
//    stroke="currentColor"
//     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
//       <path d="M3 10c1.95 0 3.55-1.6 3.55-3.55S4.95 3 3 3s-3.55 1.6-3.55 3.45C-.55 8.4 1.05 10 3 10zm8-10c-4.42 0-8 3.58-8 8 0 3.73 2.92 8.59 8 15l1.88-5.64L16.17 9.4l4.7-4.7L19 4c-4.01-.04-7.34 2.93-8 4zm1.17 6.63c-.04.12-.1.23-.17.34-.47 1.17-1.73 2.68-2.56 3.28-.16.11-.31.22-.47.31-.17.1-.33.2-.51.28-.47.24-.98.37-1.52.37-.18 0-.36-.01-.54-.02-1.05-.05-2.03-.42-2.82-1.21l-.01-.01c-.35-.35-.55-.78-.56-1.24a1.61 1.61 0 01.3-.92c.35-.45.8-.76 1.27-.87a.46.46 0 00.37-.22c.08-.14.2-.25.34-.32.72-.4 1.77-.7 2.8-.8.43-.05.86.03 1.27.17a3.58 3.58 0 001.42.05c.37-.1.72-.24 1.06-.41.36-.17.69-.38.99-.62.1-.09.21-.16.32-.23.42-.27.82-.58 1.17-.94.07-.08.16-.14.25-.21.38-.34.71-.74.99-1.17.1-.18.18-.38.26-.58.06-.18.11-.35.17-.53.16-.57.26-1.18.3-1.8 0-1.04-.13-2.02-.37-2.84-.04-.2-.1-.39-.17-.58a1.61 1.61 0 00-.34-.63c-.23-.26-.5-.46-.79-.63z" />
//     </svg>

//       </a>
//     </div>
//   );
// };

// export default WhatsAppButton;

import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

function WhatsAppButton() {
    const iconStyle = {
        color: 'green', // Set the color to green
        fontSize: '4rem', // Adjust the icon size as needed
      };

  return (
    <div id="whatsapp-fab" className="fixed bottom-10 right-10 z-10">
      <a
        href="https://api.whatsapp.com/send?phone=9760590847"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full  hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={40} style={iconStyle} />
        {/* <Image src="/whatsapp.png" height={50} width={60} alt='' className='h-50 w-50'/> */}
      </a>
    </div>
  );
}

export default WhatsAppButton;

