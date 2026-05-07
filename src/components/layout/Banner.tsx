export default function Banner() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6">
            <h1 className="text-3xl font-bold mb-2">Welcome to EngageIQ Dashboard</h1>
            <video preload="auto" autoPlay loop muted className="background-video rounded-lg mb-4">
                <source src="https://intuitive.ai/wp-content/uploads/2025/10/home-vid.mp4" type="video/mp4" />
            </video>
            <p className="text-lg text-white/90">
                Get real-time insights into your customer engagement and sales performance.
            </p>
        </div>
    );
}