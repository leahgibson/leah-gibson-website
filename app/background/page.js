import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Background() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Background</h1>

            <p className="text-lg text-gray-700 mb-6">
                Last updated Oct. 10, 2025
            </p>
            
            <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
                Professioinal Experience
            </h2>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">
            Air Quality Data Scientist, <em className="italic">Colorado Department of Public Health and Environment</em> (02/2024 - Present)
            </h3>
            <p className="text-lg text-gray-700 mb-6">
                Designed and built the data backbone for a new air quality program, developing scalable infrastructure, ETL pipelines, real-time dashboards, and analysis tools that accelerated decisions and enabled the team to double monitoring capacity within a year.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">
            Affiliate Scientist, <em className="italic">Lawrence Berkeley National Laboratory</em> (02/2024 - Present)
            </h3>
            <p className="text-lg text-gray-700 mb-6">
                Integrated and analyzed observational, remote sensing, and modeled datasets to quantify dust-on-snow impacts on snowmelt timing, providing novel insights on climate-driven water resource changes affecting 40 million people.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">
            Research Associate II, <em className="italic">Handix Scientific</em> (2022 - 02/2024)
            </h3>
            <p className="text-lg text-gray-700 mb-6">
                Led data analysis and management for a large DOE-funded atmospheric field campaign, processing over 100 GB of sensor data, disseminating datasets, and publishing findings that informed model design, while also maintaining company software and supporting hardware operations.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">
            Graduate Student Researcher, <em className="italic">Colorado State University</em> (2020 - 2022)
            </h3>
            <p className="text-lg text-gray-700 mb-6">
                Developed numerical models and optimization algorithms for complex systems, including a PDE-based simulation framework for chemical pattern formation and graph-theoretic methods with applications to robotics and network design.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
                Education
            </h2>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">
            MS, Applied Mathematics, <em className="italic">Colorado State University</em> (2022)
            </h3>
            <p className="text-lg text-gray-700 mb-6">
                Optimization, causal inference, linear algebra, PDEs, dynamical systems, numerical methods, combinatorics.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">
            BS, Mathematics, <em className="italic">Colorado State University</em> (2020)
            </h3>
            <p className="text-lg text-gray-700 mb-6">
                Minor in Spanish
            </p>

            <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
                Publications
            </h2>
            <p className="text-lg text-gray-700 mb-6">
                Gibson, L. D., et al., Measurement report: An investigation of the spatiotemporal variability in aerosols in the mountainous terrain of the upper Colorado River basin using SAIL-Net, Atmos. Chem. Phys., 25, 2745–2762,{' '}
                <a
                href="https://doi.org/10.5194/acp-25-2745-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
                >
                https://doi.org/10.5194/acp-25-2745-2025
            </a>
            , 2025.
            </p>

            <p className="text-lg text-gray-700 mb-6">
                Adams, Gibson, and Pfaffinger, Lions and Contamination, Triangular Grids, and Cheeger Constants, Research in Computational Topology 2. Association for Women in Mathematics Series, vol 30. Springer, Cham.{' '}
                <a
                href="https://doi.org/10.1007/978-3-030-95519-9_8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
                >
                https://doi.org/10.1007/978-3-030-95519-9_8
            </a>
            , 2022.
            </p>


            <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
                Awards and Honors
            </h2>

            <p className="text-lg text-gray-700 mb-6">
                Center for Interdisciplinary Mathematics and Statistics Fellow (2021)
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Cum laude (2020)
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Boettcher Scholar (2017)
            </p>


        </div>
        </main>
        <Footer />
    </>
  );
}