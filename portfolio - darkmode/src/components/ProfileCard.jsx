import React from "react";

const ProfileCard = () => {
    return (
        <div id="about"  className="mt-10 mx-auto max-w-4xl p-4 md:p-6 lg:p-8 ">
            {/* Section Title */}
            <div className="flex items-center gap-2 mb-8 text-gray-200 font-bold font-arabic text-xl">
                {/* Rotating triangle */}
                <div className="w-6 h-6 animate-spin-slow">
                    <svg viewBox="0 0 100 100" fill="currentColor" className="text-blue-400">
                        <polygon points="50,15 90,85 10,85"/>
                    </svg>
                </div>
                <span>ABOUT ME</span>
            </div>

            {/* Info Card */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900 rounded-xl shadow-xl shadow-gray-950/50 border border-gray-800">
                {/* Image and Resume Button Section */}
                <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
                    <img
                        src="/my-img-portrait.jpg"
                        className="rounded-xl w-full h-auto object-cover max-w-xs md:max-w-full ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/10"
                        alt="My Portrait"
                    />
                    <button
                        className="group mt-4 relative inline-flex h-[56px] items-center justify-start rounded-xl bg-blue-500 py-1 pl-6 pr-14 font-medium text-white w-full md:w-[210px] overflow-hidden">
                        <span className="z-10 pr-2">Resume</span>
                        <div
                            className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-xl bg-blue-400 transition-[width] duration-300 group-hover:w-[calc(100%-8px)]">
                            <div className="mr-3.5 flex items-center justify-center">
                                <i className="fa-solid fa-download"></i>
                            </div>
                        </div>
                    </button>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 text-gray-300 w-full md:w-2/3">
                    <h1 className="text-2xl font-bold font-manrope bg-gradient-to-r from-[#61b0f6] via-[#61b0f6] to-[#468cf1] bg-clip-text text-transparent">
                        Hi there,
                    </h1>
                    <p>
                        I'm currently a 10th-grade student following my passion for web development. Over the past two
                        years, I've been actively learning and building projects that challenge and inspire me.
                    </p>
                    <p>
                        I love crafting engaging user interfaces and exploring how things work behind the scenes with
                        backend technologies.
                    </p>
                    <p>
                        My goal is to keep growing as a developer and eventually become a skilled full-stack engineer.
                        I'm always curious, always building, and always learning.
                    </p>

                    {/* Social Media Section */}
                    <div className="mt-6">
                        <div className="flex flex-col bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 space-y-4">
                            <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap">
                                {/* Social Media Buttons */}
                                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 shadow-md shadow-gray-950/20 group transition-all duration-300">
                                    <a href="https://github.com/irteza-byte"  >
                                    <svg className="transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.933 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.044.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.922.43.372.814 1.104.814 2.226v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    </a>
                                </button>
                                {/*/!* Instagram Button *!/*/}
                                {/*<button className="w-10 h-10 flex items-center justify-center group rounded-lg bg-gray-900 shadow-md shadow-gray-950/20 transition-all duration-300">*/}
                                {/*    <svg*/}
                                {/*        className="transition-all duration-300 group-hover:scale-110"*/}
                                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                                {/*        fill="white"*/}
                                {/*        viewBox="0 0 24 24"*/}
                                {/*        width="24"*/}
                                {/*        height="24"*/}
                                {/*    >*/}
                                {/*        <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8 2a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5H15.75zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />*/}
                                {/*    </svg>*/}
                                {/*</button>*/}

                                {/* Twitter/X Button */}
                                <a href="https://x.com/Irtezaabba22300">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 shadow-md shadow-gray-950/20 group transition-all duration-300">
                                    <svg className="transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="white">
                                        <path d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568Z" fill="white" />
                                    </svg>
                                </button>
                                </a>
                                {/* WhatsApp Button */}
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 shadow-md shadow-gray-950/20 group transition-all duration-300">
                                    <a href="https://wa.me/+923012705077">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="28"
                                        height="28"
                                        className="transition-all duration-300 group-hover:scale-110"
                                    >
                                        <path
                                            fill="white"
                                            d="M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1
    c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4
    c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6
    C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1
    c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14
    M19.1,4.9C15.2,1,8.9,1,5,4.9
    c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9C22,9.3,20.9,6.8,19.1,4.9
    M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3
    C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9"
                                        />
                                    </svg>
                                    </a>



                                </button>
                                {/* LinkedIn Button */}
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 shadow-md shadow-gray-950/20 group transition-all duration-300">
                                    <a href="https://www.linkedin.com/in/irteza-abbas-9807b4330/">
                                    <svg  className="rounded-md transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="white">
                                        <path  fillRule="evenodd" clipRule="evenodd" d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z" fill="white" />
                                    </svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;