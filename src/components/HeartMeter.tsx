
export default function HeartMeter({ progress, isPumping }: {progress: number, isPumping: boolean}) {
    return (
        <div
            className={`relative w-48 h-48 mb-2 ${isPumping ? "animate-pump" : ""}`}
        >
            <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full">
                <defs>
                    <clipPath id="heartClip">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </clipPath>
                </defs>
                {/* Heart outline */}
                <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    className="stroke-pink-400 stroke-2 fill-none"
                />
                {/* Fill rectangle clipped to heart shape */}
                <rect
                    x="0"
                    y={24 - (24 * progress) / 100}
                    width="24"
                    height={(24 * progress) / 100}
                    fill="rgb(236, 72, 153)"
                    clipPath="url(#heartClip)"
                    className="transition-all duration-500"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center mb-2 text-white font-bold text-xl z-10">
                {progress}%
            </div>
        </div>
    );
}
