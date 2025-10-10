import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Mathematics() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Mathematics</h1>
            <p className="text-lg text-gray-700">
            Your data science portfolio content goes here...
            </p>
        </div>
        </main>
        <Footer />
    </>
  );
}