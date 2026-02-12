

export default function HeartRain() {
    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => (
                <span
                    key={i}
                    className="absolute animate-fall"
                    style={{
                        // eslint-disable-next-line react-hooks/purity
                        left: `${Math.random() * 100}%`,
                        // eslint-disable-next-line react-hooks/purity
                        animationDuration: `${4 + Math.random() * 4}s`,
                        // eslint-disable-next-line react-hooks/purity
                        fontSize: `${16 + Math.random() * 20}px`,
                    }}
                >
                    💖
                </span>
            ))}
        </div>
    );
}
