import React from "react";
import { Meteors } from "./meteors";

export function MeteorsDemo() {
    const handleClick = () => {
        window.location.href = "https://rzp.io/l/xXWBKOUw";
    };

    return (
        <>
            <h1 className="text-5xl md:text-8xl font-bold text-center text-white mb-10">
                Hurry Up 
            </h1>
            <div className="flex justify-center items-center"> {/* Spacing below the card */}
                <div className="relative w-full max-w-sm mx-4"> {/* Changed to max-w-sm for better mobile fit */}
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-100 rounded-2xl blur-3xl" />
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-2 w-2 text-gray-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                />
                            </svg>
                        </div>

                        <h1 className="text-2xl text-white mb-4 relative z-50 text-center">
                            Join Now for Editing Masterclass
                        </h1>

                        <h1 className="text-4xl font-bold text-slate-300 mb-6 relative z-50 text-center">₹ 12,500 (Inc. GST)</h1>

                        <button
                            onClick={handleClick}
                            className="border border-gray-500 bg-transparent text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                        >
                            Join Now
                        </button>

                        {/* Meaty part - Meteor effect */}
                        <Meteors number={20} />
                    </div>
                </div>
            </div>
        </>
    );
}
