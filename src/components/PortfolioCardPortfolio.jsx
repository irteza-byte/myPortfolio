import React from 'react';

export default function PortfolioCardPortfolio() {
    return (
        // Same excellent responsiveness, but with a dark-mode palette
        <div className="group w-full max-w-sm mx-auto transition-all duration-700 transform hover:scale-[1.02]">
            {/* Dark gradient border wrapper */}
            <div
                className="p-[2px] rounded-2xl bg-gray-800 group-hover:bg-gradient-to-tr group-hover:from-blue-500 group-hover:to-blue-800 transition-all duration-700">
                {/* Inner content with a dark background */}
                <div className="rounded-2xl bg-gray-900 relative overflow-hidden shadow-xl shadow-gray-950/50">

                    {/* Dark gradient overlay on hover */}
                    <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-900 to-blue-500 pointer-events-none transition-opacity duration-700 z-0"/>

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Image */}
                        <div className="w-full h-40 overflow-hidden rounded-t-2xl">
                            <img
                                src="/my_Portfolio.png"
                                alt="Portfolio"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold font-manrope text-gray-100 transition-all duration-500 group-hover:text-blue-400">
                                Irteza's Portfolio
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">
                                A personal portfolio website to showcase my skills and projects.
                            </p>

                            {/* Tags */}
                            <div className="flex justify-center gap-2 mt-3 flex-wrap">
                                {["React", "Tailwind CSS"].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-800 text-sm text-gray-300 py-1 px-2 rounded-md transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
                                {/* Live Demo Button */}
                                <a
                                    href="https://my-portfolio-vyfm.vercel.app/"
                                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-transform duration-300 shadow-md bg-gradient-to-r from-blue-600 to-blue-500 border border-transparent hover:scale-95 hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                    Live Demo
                                </a>

                                {/* View Code Button */}
                                <a
                                    href="https://github.com/irteza-byte/myPortfolio"
                                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-gray-200 text-sm font-semibold bg-gray-800 border border-gray-700 transition-transform duration-300 shadow-sm hover:scale-95 hover:bg-gray-700"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 0 1 3.003-.404 11.49 11.49 0 0 1 3.003.404c2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.628-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12Z"/>
                                    </svg>
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}