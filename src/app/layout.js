'use client'
import {useState} from "react";
import HeaderTop from "@/components/HeaderTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './globals.css'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderMain from "@/components/HeaderMain"
import WhatsAppButton from "@/components/fab"



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children })
{

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar= () => {
    setIsOpen(!isOpen)
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <Navbar  toggleSidebar={toggleSidebar}/>
        
       
        {children}
        <WhatsAppButton />
        </body>
        <Footer />
    </html>
  );
}
