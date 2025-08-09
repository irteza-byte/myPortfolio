import React from 'react';

export const Hero_section = () => {
    return (
        <div id="home" className="flex flex-col items-center justify-center text-gray-200 mt-12 px-4 sm:px-6 lg:px-8 text-center">

            {/* Profile Image */}
            <img
                src="/my-img.png"
                alt="Irteza"
                className="w-32 sm:w-40 md:w-52 rounded-full mb-6 ring-2 ring-blue-500/50 shadow-xl shadow-blue-500/10"
            />

            {/* Intro Text */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300">
                <span className="font-manrope font-bold">Hi, I'm </span>
                <span className="font-arabic font-bold text-2xl">
                    <button
                        role="link"
                        className="relative bg-[linear-gradient(#4b5563,#4b5563),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-100 transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#59A6F5]"
                    >
                        Irteza
                    </button>
                </span> 👋🏻
            </h1>

            {/* Headline */}
            <h1 className="font-manrope font-bold leading-tight mt-4 text-3xl sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-[#61b0f6] via-[#61b0f6] to-[#468cf1] bg-clip-text text-transparent">
                    Software Developer
                </span>
                <br />
                Who loves Building things
                <br />
                for the{" "}
                <span className="bg-gradient-to-r from-[#61b0f6] via-[#61b0f6] to-[#468cf1] bg-clip-text text-transparent">
                    web.
                </span>
            </h1>
        </div>
    );
};