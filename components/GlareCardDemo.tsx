import { GlareCard } from "./glare-card";

export function GlareCardDemo() {
    const handleClick = () => {
        window.location.href = "https://rzp.io/l/xXWBKOUw";
    };

    return (
        <div className="flex flex-col items-center justify-center mb-10">
            <h1 className="text-5xl font-bold text-white mb-5">Hurry Up!</h1> {/* Heading above the card */}
            <GlareCard className="flex flex-col items-center justify-center p-6">
                <p className="text-white font-bold text-lg mt-4">Join Now!</p> {/* Added "Join Now" text */}
                <p className="text-white font-bold text-xl mt-2">₹ 12,500 (Inc. GST)</p>
              
                <button
                    type="button" // Add this line
                    onClick={handleClick}
                    className="mt-4 border border-gray-500 bg-transparent text-gray-300 px-6 py-2 rounded-lg z-50 hover:bg-gray-600 transition duration-300 cursor-pointer"
                >
                    ENROLL NOW
                </button>
            </GlareCard>
        </div>
    );
}
