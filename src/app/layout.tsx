"use client";
import Link from "next/link";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AuthProvider } from "@/utils/context/Authcontext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="font-[Inter] w-screen overflow-x-hidden">
        <NextTopLoader color="#FFC300" />

        {/* Main Layout Wrapper */}
        <div className="flex flex-col items-center flex-grow z-100000000000">
          {/* Header / Navbar */}
          <header className="w-full shadow-lg z-10 py-2 bg-yellow-300">
            <nav className="flex justify-between items-center max-w-[1400px] mx-auto px-6"> 
              {/* Logo */}
              {/* Hamburger Menu for Mobile */}
               <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-black focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 -scale-x-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
              <Link
                href="/"
                className="text-3xl font-bold text-black tracking-wide h-10 flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  height={100}
                  width={160}
                  className="md:w-[160px] w-[120px] object-cover transition-transform duration-300"
                />
              </Link>

              {/* Desktop Links */}
               <div className="hidden md:flex space-x-6 text-lg">
                <Link href="/" className="hover:text-[#FFC300] transition">
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-[#FFC300] transition"
                >
                  Contact
                </Link>
                <Link
                  href="/food-and-meels"
                  className="hover:text-[#FFC300] transition"
                >
                  Food & Meels
                </Link>
              </div>
              <Link href="/register" className="group relative">
                <div className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-yellow-100 rounded-lg shadow-md group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-500 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-500 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-500 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-500 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    Register
                  </span>
                </div>
              </Link>
            </nav> 

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="md:hidden bg-yellow-300 shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col space-y-4 p-4">
                    <Link
                      href="/"
                      className="hover:text-[#FFC300] transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-[#FFC300] transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      href="/food-and-meels"
                      className="hover:text-[#FFC300] transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Food & Meels
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* Dynamic Page Content */}
          <main className="w-full flex flex-col flex-grow">{children}</main>

          {/* Footer */}
          <footer className="w-full bg-gray-100 text-gray-600 py-6 text-lg shadow-inner">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <span>
                © {new Date().getFullYear()} Aahaar. All Rights Reserved.
              </span>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <Link
                  href="https://www.linkedin.com/company/aahaar-nirvana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition flex items-center space-x-1"
                >
                  <span>LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.46-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.037 0 3.6 2 3.6 4.604v5.588z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/aahaar.nirvana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition flex items-center space-x-1"
                >
                  <span>Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.334-3.337 1.253-.919.919-1.195 2.056-1.253 3.337-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.334 2.418 1.253 3.337.919.919 2.056 1.195 3.337 1.253 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.418-.334 3.337-1.253.919-.919 1.195-2.056 1.253-3.337.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.334-2.418-1.253-3.337-.919-.919-2.056-1.195-3.337-1.253-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162s1.866-4.162 4.162-4.162 4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
                  </svg>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    
    </html>
  );
}
