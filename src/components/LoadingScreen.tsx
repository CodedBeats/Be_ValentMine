export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center animate-fadeOut z-50">
            <p className="text-white text-xl tracking-widest">
                Loading love...
            </p>
        </div>
    );
}
