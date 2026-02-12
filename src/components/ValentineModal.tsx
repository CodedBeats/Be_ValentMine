import HeartRain from "./HeartRain";
import Slideshow from "./SlideShow";

export default function ValentineModal() {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <HeartRain />
            <div className="bg-[#f57cba] rounded-2xl p-4 w-72 relative z-10">
                <Slideshow />
            </div>
        </div>
    );
}
