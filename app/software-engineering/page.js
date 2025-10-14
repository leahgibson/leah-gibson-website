import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SoftwareEngineering() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Software</h1>

            <p className="text-lg text-gray-700 mb-6">
            When collecting air quality measurements, one of the main goals is often to identify the sources of those compounds. 
            This is done through source apportionment, a general term for any method that organizes measurements into distinct source profiles. 
            The most common approach is Positive Matrix Factorization (PMF), a matrix factorization technique that decomposes the observed data into source profiles or fingerprints and their relative contributions. 
            Each fingerprint corresponds to a potential emission source.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            However, assigning a real-world source to each fingerprint can be tedious and subjective. 
            The go-to reference for known source profiles is the EPA&apos;s SPECIATE database, which contains over 6,000 profiles and 1,500 analytes. 
            Finding which known source best matches a fingerprint requires manually comparing across this massive database which is a slow and inconsistent process.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            To automate and standardize this step, I created{' '}
            <a 
              href="https://github.com/leahgibson/pmf2speciate" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
          >
              pmf2speciate
          </a>
            , an open-source Python package that identifies PMF source profiles using a multi-tiered random forest classifier trained on the EPA SPECIATE database. 
            The tool speeds up source identification, reduces subjectivity, and provides a reproducible, data-driven workflow.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Data Preparation
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            The EPA SPECIATE dataset is not only large but it is also incredibly messy. 
            Each profile quantifies the contribution of an analyte to a fingerprint as a percent weight (out of 100), but these data are entered manually, leading to typos, inconsistent capitalization, punctuation, and naming. 
            For example, the same source might appear as &quot;Biomass Burning: Wildfire,&quot; &quot;Wildfire,&quot; or &quot;Burning: Wildfire&quot; in different samples. 
            To clean and group these entries, I used a large language model (LLM) to cluster similar names into unified source categories. 
            Say what you will about LLMs, but this was one case where they saved me days of manual cleanup.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Once profiles were grouped, I split the data into training and test sets. 
            Because many sources had limited or uneven sample counts, I augmented the data by generating synthetic samples using each profile&apos;s reported uncertainties, or when uncertainties were unavailable, by adding Gaussian noise. 
            This ensured the model had enough variability to generalize while maintaining realistic distributions.

          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Model Architecture
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            The classification follows a two-tier hierarchy:
          </p>

          <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-4">
            <li>
              <strong className="font-bold">Tier 1:</strong> Classify the fingerprint by generation mechanism (e.g., combustion, volatilization, microbial, etc.).
            </li>
            <li>
              <strong className="font-bold">Tier 2:</strong> Within that generation mechanism, classify the fingerprint by specific source.
            </li>
          </ul>

          <p className="text-lg text-gray-700 mb-6">
            I trained a random forest classifier for each level using sklearn. 
            Tier 1 contains one model that classifies generation mechanisms; Tier 2 contains separate models trained on the sources within each mechanism. 
            Currently, there are three generation mechanisms, giving four total models.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Each model outputs class probabilities using sklearn&apos;s <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">predict_proba</code>, allowing pmf2speciate to assign a confidence score to both classification levels.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Model Training and Performance
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Performance varies by source class. Sources with many well-defined profiles (like gasoline emissions or biomass burning) achieve higher accuracy, while sparse categories relying on synthetic-generated samples perform less consistently.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            The overall Tier 1 model achieves strong separation between generation mechanisms, with all F1 scores above 0.95. 
            Within each mechanism, Tier 2 models achieve macro-averaged accuracies ranging from roughly 0.6 to 0.8.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Each model&apos;s confusion matrix highlights this variability. 
            Some classes show near-perfect normalized accuracy (1.0), which could indicate slight overfitting, especially for sources with few training samples or low chemical variability. 
            Others perform worse, likely due to sparse data or overlapping chemical fingerprints between similar sources.
          </p>

          {/* Confusion Matrix Figures - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div>
              <img 
                src="/software_fig1.png" 
                alt="Tier 1 Confusion Matrix"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Figure 1: Tier 1 confusion matrix - Generation mechanisms
              </p>
            </div>
            <div>
              <img 
                src="/software_fig2.png" 
                alt="Tier 2 Combustion Confusion Matrix"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Figure 2: Tier 2 confusion matrix - Combustion sources
              </p>
            </div>
            <div>
              <img 
                src="/software_fig3.png" 
                alt="Tier 2 Volatilization Confusion Matrix"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Figure 3: Tier 2 confusion matrix - Volatilization sources
              </p>
            </div>
            <div>
              <img 
                src="/software_fig4.png" 
                alt="Tier 2 Microbial Confusion Matrix"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                Figure 4: Tier 2 confusion matrix - Microbial sources
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            For now, I prioritize building a working, end-to-end system that automates source identification and returns interpretable confidence scores. 
            The next step will be refining underperforming classes.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Package Usage
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            The package is designed to be easy to use. 
            Identifying a fingerprint takes just a few lines of code:
          </p>

          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
            <code>{`from pmf2speciate import SourceClassifier

factor_profile = {
   "71-43-2": 15.2,
   "108-88-3": 8.7,
   "100-41-4": 5.1,
   "1330-20-7": 12.3,
   # ... more species
}

classifier = SourceClassifier()
result = classifier.identify_source(factor_profile)

print("Classification Result:")
print(f"Generation Mechanism: {result['generation_mechanism']} (confidence: {result['generation_confidence']:.3f})")
if result["specific_source"]:
   print(f"Specific Source: {result['specific_source']} (confidence: {result['source_confidence']:.3f})")
   print(f"Overall Confidence: {result['overall_confidence']:.3f}")`}</code>
          </pre>

          <p className="text-lg text-gray-700 mb-4">
            Fingerprints can also be compared to the average source profile:
          </p>

          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
            <code>{`from pmf2speciate import plot_factor

plot_factor(factor_profile, result["generation_mechanism"], result["specific_source"])`}</code>
          </pre>

          <p className="text-lg text-gray-700 mb-6">
            This lets users visually verify whether they agree with the classification, preserving expert judgment while providing automated guidance.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Additional utilities include viewing model info:
          </p>

          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
            <code>{`from pmf2speciate import SourceClassifier

classifier = SourceClassifier()
print(classifier.get_model_info())`}</code>
          </pre>

          <p className="text-lg text-gray-700 mb-4">
            and visualizing (average) source profiles within each generation mechanism:
          </p>

          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
            <code>{`from pmf2speciate import plot_profiles

plot_profiles("Combustion")
plot_profiles("Microbial")
plot_profiles("Volatilization")`}</code>
          </pre>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Code Availability
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            The pmf2speciate package is available on{' '}
            <a 
              href="https://github.com/leahgibson/pmf2speciate" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              GitHub
            </a>
            {' '}and can be installed via pip.
          </p>


        </div>
        </main>
        <Footer />
    </>
  );
}