import React from "react";
import PortfolioCardPokelog from "./PortfolioCardPokelog.jsx";
import PortfolioCardPortfolio from "./PortfolioCardPortfolio.jsx";

export const Projects = () => {
    return (
        <>
            <div id="projects" className="mt-10 md:mt-12 lg:mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                    {/* Section Title */}
                    <div className="flex items-center gap-2 mb-8 p-3 text-gray-200 font-bold font-arabic text-xl">
                        {/* Rotating triangle */}
                        <div className="w-6 h-6 animate-spin-slow">
                            <svg viewBox="0 0 100 100" fill="currentColor" className="text-blue-400">
                                <polygon points="50,15 90,85 10,85" />
                            </svg>
                        </div>
                        <span>MY PROJECTS</span>
                    </div>

                    {/* Project Cards Container */}
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        <PortfolioCardPokelog />
                        <PortfolioCardPortfolio />
                    </div>
                </div>
            </div>
        </>
    );
};