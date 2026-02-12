import { useState, useEffect } from "react";

const images = [
    "src/assets/1.jpg", 
    "src/assets/2.jpg", 
    "src/assets/3.jpg", 
    "src/assets/4.jpg", 
    "src/assets/5.jpg", 
    "src/assets/6.jpg", 
    "src/assets/7.jpg", 
];

export default function Slideshow() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
        }, 2500) // change slide every 2.5s

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="overflow-hidden w-full select-none">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${index * 100}%)`,
                }}
            >
                {images.map((src, i) => (
                    <div key={i} className="min-w-full px-1">
                        <img
                            src={src}
                            className="rounded-xl w-full h-64 object-cover pointer-events-none"
                            draggable="false"
                        />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full transition ${
                            i === index
                                ? "bg-pink-500 scale-110"
                                : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>

            <p className="mt-3 text-black font-semibold text-center">
                Some of my favorite memories :3
            </p>
        </div>
    );
}
