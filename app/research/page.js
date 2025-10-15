import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Research() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Research</h1>
            
            <p className="text-lg text-gray-700 mb-6">
            While working at Handix Scientific, I had the opportunity to apply my analytical and computational skills in a research-driven setting. 
            Coming from a background in mathematics, it felt natural to formalize complex scientific questions and develop algorithms and tools to answer them.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            At Handix, I led the data analysis for <strong className="font-bold">SAIL-Net</strong>, a 1.5-year DOE-funded field campaign in the East River Watershed of Colorado. 
            The project deployed a network of six low-cost aerosol sensors to study how aerosol concentrations vary across complex mountain terrain. Understanding this variability is key for atmospheric models, which often struggle to represent conditions accurately in such regions.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Core Research Questions
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            The SAIL-Net campaign aimed to answer three core questions:
          </p>

          <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
            <li>What is the temporal variability of aerosols?</li>
            <li>What is the spatial variability of aerosols?</li>
            <li>How should measurement networks be designed to capture aerosol–cloud interactions?</li>
          </ol>

          <p className="text-lg text-gray-700 mb-6">
            The full findings were{' '}
            <a 
              href="https://doi.org/10.5194/acp-25-2745-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              published
            </a>
            , but here I’ll highlight my analytical approach and the tools I used to explore these questions.
          </p>

          {/* Two figures side by side */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div>
              <img 
                src="/research_fig1.jpeg" 
                alt="SAIL-Net summer"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Figure 1: SAIL-Net monitoring site in East River Watershed (summer)
              </p>
            </div>
            <div>
              <img 
                src="/research_fig2.jpeg" 
                alt="SAIL-Net winter"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Figure 2: SAIL-Net monitoring site in East River Watershed (winter)
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Uncovering Temporal Variability
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Understanding temporal variability required analyzing patterns across multiple timescales (diurnal, seasonal, and interannual) while also comparing how these patterns evolved across sites. 
            I developed statistical analyses and visualization pipelines in Python to characterize these changes and quantify their consistency across different locations.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Uncovering Spatial Variability
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            To study spatial variability, I examined how differences between sites related to their physical characteristics and spatial separation. 
            While spatial proximity is often assumed to drive measurement similarity, my regression analyses showed that altitude was a far stronger predictor of aerosol similarity than horizontal distance. 
            I also used a normalized coefficient of variation to quantify the overall variability across all six sites through time, revealing how spatial relationships evolved under different meteorological conditions.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Network Design
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            A major goal of the campaign was to inform measurement network design by identifying which sites best represented regional aerosol conditions. 
            Using representation error metrics, I evaluated how well each site captured overall variability and how representativeness changed over time.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            I also compared measurements from the fixed sites to tethered balloon flights conducted during the broader SAIL campaign. 
            Interestingly, the six fixed sites, distributed across elevation gradients, often produced &quot;pseudo–vertical profiles&quot; that mirrored the balloon observations, which was further evidence that aerosol variability in complex terrain is strongly tied to altitude.
          </p>


          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Final Remarks
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            This project was a blend of computational rigor and field-based discovery. 
            I shaped the analysis from start to finish by building data pipelines, performing statistical analyses, and interpreting results within a physical context. I also went on several field work visits, snowshoeing and skiing to remote monitoring sites to service instruments and validate data. 
            It was a perfect intersection of my love for nature, mathematics, and hands-on science.
          </p>

          <div className="my-8">
            <img 
              src="/research_fig3.jpeg" 
              alt="Field work"
              className="w-3/4 mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 3: Field work at the SAIL-Net sites.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Code Availability
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            To support future research, I made the code from my analyis publicly available as a starting point for others working with the SAIL-Net dataset, which can be accessed through the{' '}
            <a 
              href="https://doi.org/10.5281/zenodo.12747225"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ARM Data Discovery
            </a>
            . The repository for this analysis is available on my{' '}
            <a 
              href="https://github.com/leahgibson/sailnet_pops_data_analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              GitHub
            </a>
            .
          </p>


        </div>
        </main>
        <Footer />
    </>
  );
}