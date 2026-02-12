import { useState, useRef } from "react";

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
    const [offset, setOffset] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const startX = useRef(0)

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX
        setIsDragging(true)
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        const currentX = e.touches[0].clientX
        setOffset(currentX - startX.current)
    }

    const handleTouchEnd = () => {
        setIsDragging(false)

        // Swipe threshold
        if (offset < -50 && index < images.length - 1) {
            setIndex(index + 1)
        } else if (offset > 50 && index > 0) {
            setIndex(index - 1)
        }

        setOffset(0)
    }

    return (
        <div className="overflow-hidden w-full">
            <div
                className={`flex ${!isDragging ? "transition-transform duration-300 ease-out" : ""}`}
                style={{
                transform: `translateX(calc(${-index * 100}% + ${offset}px))`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((src, i) => (
                <div key={i} className="min-w-full px-1">
                    <img
                    src={src}
                    className="rounded-xl w-full h-64 object-cover select-none pointer-events-none"
                    draggable="false"
                    />
                </div>
                ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-3">
                {images.map((_, i) => (
                <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${
                        i === index ? "bg-pink-500" : "bg-gray-300"
                    }`}
                />
                ))}
            </div>

            <p className="mt-3 text-black font-semibold text-center">
                You said yes. I win :3
            </p>
        </div>
    );
}
