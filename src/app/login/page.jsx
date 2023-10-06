// import React from 'react'

// const page = () => {
//   return (
//     // components/Login.js
//     <div className="my-20 flex items-center justify-center">
//       <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-xl">
//         <h2 className="text-2xl font-semibold mb-6">Log In</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-600">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400 required"
//               placeholder="Your Email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-600">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400 required"
//               placeholder="Password"
//             />
//           </div>
//           <div className="mb-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//             >
//               Log In
//             </button>
//           </div>
//         </form>
//         <p className="text-gray-600 text-sm text-center">
//           Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };


// export default page;

// components/Login.js
"use client"
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in both email and password fields.");
      return;
    }

    // Your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Log In</h2>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-gray-600 text-sm text-center">
          Dont have an account?{' '}
          <a href="signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;


