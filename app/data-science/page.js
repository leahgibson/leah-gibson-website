import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DataScience() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Data Science</h1>
            <p className="text-lg text-gray-700">
            Portfolio coming soon!
            </p>
        </div>
        </main>
        <Footer />
    </>
  );
}