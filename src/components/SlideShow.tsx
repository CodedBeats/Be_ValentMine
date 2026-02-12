import { useState, useEffect } from "react";
// imgs
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
];

export default function Slideshow() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
        }, 4000) // change slide every 2.5s

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="overflow-hidden w-full select-none">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
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
