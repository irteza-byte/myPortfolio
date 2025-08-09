// import React, { useState } from 'react';

export const Header = () => {


    return (

        <div className="hidden md:block mx-4 md:mx-10 mt-5 rounded-xl sticky top-4 z-50 backdrop-blur-md
                bg-gray-950/40 text-gray-200 shadow-xl shadow-blue-500/7 border border-gray-800">

        <div className="flex justify-between items-center px-4 md:px-8 py-5 relative">
                {/* Logo */}
                <h1 className="font-bold text-2xl mx-auto md:mx-0 md:absolute md:left-8
                               text-blue-400 tracking-wide transition-colors duration-300">
                    <a href="#top">Irteza.dev();</a>
                </h1>

                {/* Navigation Menu for Desktop */}
                <div className=" flex gap-8 md:gap-12 ml-auto">
                    {/* Updated to use anchor links */}
                    <a href="#home" className="relative font-medium px-2 py-1 cursor-pointer group text-gray-400 hover:text-white transition-colors duration-300">
                        Home
                        <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#Skills" className="relative font-medium px-2 py-1 cursor-pointer group text-gray-400 hover:text-white transition-colors duration-300">
                        Skills
                        <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#about" className="relative font-medium px-2 py-1 cursor-pointer group text-gray-400 hover:text-white transition-colors duration-300">
                        About
                        <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#projects" className="relative font-medium px-2 py-1 cursor-pointer group text-gray-400 hover:text-white transition-colors duration-300">
                        Projects
                        <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#Contact-me" className="relative font-medium px-2 py-1 cursor-pointer group text-gray-400 hover:text-white transition-colors duration-300">
                        Contact me
                        <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </div>


        </div>



    );
};