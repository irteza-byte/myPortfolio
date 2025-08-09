import React from "react";

export const ContactForm = () => {
    return (
        // Adjusted the max-width for better responsiveness on larger screens
        <div id="Contact-me" className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
                {/* Section Title */}
                <div className="flex items-center gap-2 mb-8 p-3 text-gray-200 font-bold font-arabic text-xl">
                    {/* Rotating triangle */}
                    <div className="w-6 h-6 animate-spin-slow">
                        <svg viewBox="0 0 100 100" fill="currentColor" className="text-blue-400">
                            <polygon points="50,15 90,85 10,85" />
                        </svg>
                    </div>
                    <span>CONTACT ME</span>
                </div>
            </div>

            {/* Adjusted flex container to stack on mobile and use responsive widths */}
            <div className="flex flex-col md:flex-row p-3 gap-6">
                {/* Contact Info Section */}
                <div className="flex flex-col gap-4 w-full md:w-[30%]">
                    {/* Phone Card (Blue) */}
                    <div
                        className="flex flex-col justify-center border-2 rounded-2xl border-blue-600
            bg-gradient-to-br from-blue-600 to-blue-800 p-4 shadow-xl shadow-blue-900/40 hover:scale-105 transition-transform"
                    >
                        <div className="flex gap-3 items-center">
                            <div className="p-2 rounded-xl bg-gray-800 shadow-md">
                                <i className="fa-solid fa-phone text-blue-400 text-lg"></i>
                            </div>
                            <p className="text-white text-lg font-manrope font-semibold">Phone</p>
                        </div>
                        <h1 className="mt-2 text-white text-xl font-bold font-manrope tracking-wide">
                            +92-301-2705077
                        </h1>
                    </div>

                    {/* Email Card (Dark) */}
                    <div
                        className="flex flex-col justify-center bg-gray-900 rounded-2xl p-4
            border-2 border-gray-800 shadow-xl shadow-gray-950/50 hover:scale-105 transition-transform"
                    >
                        <div className="flex gap-3 items-center">
                            <div className="p-2 rounded-xl bg-gray-800 shadow-sm">
                                <i className="fa-solid fa-envelope text-gray-400 text-lg"></i>
                            </div>
                            <p className="text-gray-200 text-lg font-manrope font-semibold">Email</p>
                        </div>
                        <h1 className="mt-2 text-gray-100 text-lg font-bold font-manrope">
                            irtezaabbas@gmail.com
                        </h1>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-[70%]">
                    <div className="flex flex-col gap-3">
                        <form className="flex flex-col gap-3" method="POST" action="https://formsubmit.co/abbasirteza792@gmail.com">
                            {/* Name Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="bg-gray-800 p-3 pl-10 border border-gray-700 rounded-lg w-full
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                                />
                                <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-gray-800 p-3 pl-10 border border-gray-700 rounded-lg w-full
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                                />
                                <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                <textarea
                    rows="6"
                    placeholder="Enter your message"
                    className="bg-gray-800 p-3 pl-10 border border-gray-700 rounded-lg w-full
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-500"
                ></textarea>
                                <div className="absolute top-3 left-3 text-gray-500">
                                    <i className="fa-solid fa-message"></i>
                                </div>
                            </div>
                            <button
                                className="group relative inline-flex h-12 items-center justify-center rounded-md
              bg-gradient-to-r from-blue-600 to-blue-500 px-6 font-medium text-white w-full
              shadow-lg shadow-blue-500/20 hover:scale-[0.98] transition-transform duration-300"
                            >
                                <span>Send Message</span>
                                <div className="relative ml-1 h-5 w-5 overflow-hidden">
                                    <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 -translate-x-4"
                                        >
                                            <path
                                                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </form>

                        {/* Send Button */}

                    </div>
                </div>
            </div>
        </div>
    );
};
