import React from "react";
import Marquee from "react-fast-marquee";

export const Skills = () => {
    let logos = ['/css.png','/javascript.png','/html.png','/react.png','/tailwind.png']
    return (
        <div id="Skills" className="mt-25">

            {/* Section Title */}
            <div className="flex items-center gap-2 mb-15 p-3 text-gray-200 font-bold font-arabic text-xl">
                {/* Rotating triangle */}
                <div className="w-6 h-6 animate-spin-slow">
                    <svg viewBox="0 0 100 100" fill="currentColor" className="text-blue-400">
                        <polygon points="50,15 90,85 10,85" />
                    </svg>
                </div>
                <span>MY TECH-STACK</span>
            </div>

            {/* Marquee with skill logos */}
            <div className="rotate-3 mt-5">
                <Marquee speed={50} gradient={false} pauseOnHover={true}>
                    {
                        logos.map((logo,index)=> (
                            <div
                                key={index}
                                className="p-4 rounded-2xl w-fit bg-gray-900 border border-gray-800 shadow-xl shadow-gray-950/50 hover:shadow-2xl hover:shadow-blue-500/10 transition mr-25">
                                <img src={logo} className="w-16 h-16 object-contain" alt="Skill Logo" />
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}