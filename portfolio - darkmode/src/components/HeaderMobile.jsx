import React, { useState } from "react";
import "./HeaderMobile.css"; // for keyframes

export const HeaderMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleMenu}
                className={` block md:hidden  z-30 fixed top-4 left-4 p-3 rounded-lg backdrop-blur-xl bg-gray-950/40 border border-white/20 shadow-lg transition-all duration-300 ${
                    isMenuOpen ? "animate-icon-close" : "animate-icon-open"
                }`}
            >
                <i
                    className={`fa-solid ${
                        isMenuOpen ? "fa-xmark" : "fa-bars"
                    } text-2xl text-blue-300 transition-all duration-300`}
                ></i>
            </button>

            {/* Slide-in Menu */}
            <div
                className={`z-20 fixed inset-y-0 left-0 w-3/4 max-w-sm backdrop-blur-md bg-gray-950/40 text-gray-200 shadow-xl shadow-blue-500/10 border-r border-gray-800 transform transition-transform duration-500 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-10">
                    {/* Logo */}
                    <h1 className="font-bold text-3xl text-blue-400 tracking-wide">
                        <a href="#top" onClick={toggleMenu}>
                            Irteza.dev();
                        </a>
                    </h1>

                    {/* Navigation Links */}
                    <nav className="flex flex-col items-center gap-6">
                        {["home", "Skills", "about", "projects", "Contact-me"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={toggleMenu}
                                    className="relative font-medium text-xl px-2 py-1 cursor-pointer group text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                    <span className="absolute left-0 -bottom-[3px] h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </>
    );
};
