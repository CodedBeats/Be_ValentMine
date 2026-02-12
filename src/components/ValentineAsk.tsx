

export default function ValentineAsk({ name, onYes, onNo }: { name: string, onYes: () => void, onNo: () => void}) {
    return (
        <div className="text-center mt-6 space-y-4 animate-fadeIn">
            <p className="text-2xl font-semibold">
                Will you be my Valentine, {name}? 💖
            </p>

            <div className="flex gap-4 justify-center">
                <button
                    onClick={onYes}
                    className="bg-pink-500 px-5 py-2 rounded-full"
                >
                    YES
                </button>

                <button
                    onClick={onNo}
                    className="bg-gray-600 px-5 py-2 rounded-full"
                >
                    no
                </button>
            </div>
        </div>
    );
}
