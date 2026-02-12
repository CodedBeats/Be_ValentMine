import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeartMeter from "./components/HeartMeter";
import QuestionCard from "./components/QuestionCard";
import ValentineAsk from "./components/ValentineAsk";
import ValentineModal from "./components/ValentineModal";

const questions = [
    "Am I your favorite human?",
    "Do I give the best hugs?",
    "Are you the cutest girl in the world?",
    "Do we look cute together?",
    "Do I make your heart happy?",
];

export default function App() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isPumping, setIsPumping] = useState(false);
    const [showAsk, setShowAsk] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showQuestions, setShowQuestions] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    const handleYes = () => {
        const newProgress = Math.min(progress + 20, 100);
        setProgress(newProgress);

        if (newProgress === 100) {
            setIsPumping(true);
            setShowAsk(true);
        } else {
            setQuestionIndex((questionIndex + 1) % questions.length);
        }
    };

    const handleNo = () => {
        setProgress(0);
        setQuestionIndex(0);
    };

    const handleFinalYes = () => {
        setShowModal(true);
        setShowQuestions(false);
    };

    const handleFinalNo = () => {
        setProgress(0);
        setQuestionIndex(0);
        setIsPumping(false);
        setShowAsk(false);
    };

    return (
        <div className="max-w-sm min-w-screen min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-black to-pink-900 text-white">
            {loading && <LoadingScreen />}

            {!loading && (
                <>
                    { showQuestions && (
                        <>
                        <HeartMeter progress={progress} isPumping={isPumping} />

                        {!showAsk && (
                            <QuestionCard
                                question={questions[questionIndex]}
                                onYes={handleYes}
                                onNo={handleNo}
                            />
                        )}

                        {showAsk && (
                            <ValentineAsk
                                name="August"
                                onYes={handleFinalYes}
                                onNo={handleFinalNo}
                            />
                        )}
                        </>
                    )}
                    

                    {showModal && <ValentineModal />}
                </>
            )}
        </div>
    );
}
