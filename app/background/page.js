import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Background() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Background</h1>
            {/* Section Header (H2) */}
            <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
                Professioinal Experience
            </h2>
        </div>
        </main>
        <Footer />
    </>
  );
}