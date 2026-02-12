

export default function QuestionCard({ question, onYes, onNo }: { question: string, onYes: () => void, onNo: () => void}) {
    return (
        <div className="text-center space-y-4">
            <p className="text-lg">{question}</p>

            <div className="flex gap-4 justify-center">
                <button
                    onClick={onYes}
                    className="bg-pink-900 px-5 py-2 rounded-full font-bold hover:scale-105 transition"
                >
                    Yes
                </button>

                <button
                    onClick={onNo}
                    className="bg-gray-600 px-5 py-2 rounded-full font-bold hover:scale-105 transition"
                >
                    No
                </button>
            </div>
        </div>
    );
}
