import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Ultrarunning() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Ultrarunning</h1>
            
            <p className="text-lg text-gray-700 mb-6">
            I didn&apos;t always like running. In fact, I kind of hated it. During grad school, though, it started to grow on me. 
            I loved the challenge and the way trail running let me spend hours in nature while pushing myself. 
            Over time, my runs got longer: first 18 miles from Estes Park to Grand Lake, then 28 on Aspen&apos;s Four Pass Loop, and this year, my first 50k. 
            It&apos;s safe to say I&apos;m hooked. I&apos;m already considering a 50 miler next year.
          </p>

          {/* Figure 1 */}
          <div className="my-8">
            <img 
              src="/ultrarunning_fig1.JPG" 
              alt="Sawatch 50k"
              className="w-3/4 mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 1: From the Sawatch Ascent 50k. Photo taken by Jordan Chapell.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Why Ultrarunning
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Training for a 50k was really fun and rewarding. I loved building a plan, figuring out fueling, and balancing it with the rest of life. 
            It became a grounding routine and, honestly, a natural extension of who I am. 
            I like long-term goals and the satisfaction of consistent, deliberate progress.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Naturally, I couldn&apos;t resist analyzing my training data (as any data scientist would; I don&apos;t make the rules). 
            My watch gave plenty of &quot;fitness metrics,&quot; but many felt like black-box guesses. 
            I was frustrated that I wasn&apos;t told what was going on under the hood. 
            So, I decided to make my own.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Data Processing
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Each run that I tracked generated a <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">.fit</code> file 
            containing pace, heart rate, distance, elevation, and more. 
            I built a command line tool to parse these files into clean CSVs and tag each by run type (long run, threshold, base, etc.). 
            This let me compare how different types of training affected fitness and performance, and made it easy to create consistent, structured data for later analyses.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Race Prediction
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            My latest project used six weeks of training data to predict my 50k mile splits and finish time. 
            I trained two models, a linear regression and a small neural network, using mile-by-mile net elevation gain, altitude, and average heart rate as inputs with an output of mile pace. 
            While pace depends on many factors, such as terrain, fatigue, fueling, etc., these three inputs had the clearest, quantifiable relationships with my pace (Figure 1). 
            Pace scaled roughly linearly with elevation gain, shifted by altitude, and modulated by heart rate.
          </p>

          {/* Figure 2 */}
          <div className="my-8">
            <img 
              src="/ultrarunning_fig2.png" 
              alt="Relationship between pace and training inputs"
              className="w-full mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 2: Relationships between pace and elevation gain, altitude, and heart rate
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            With about 200 samples, the dataset was small for a neural network, but I wanted to compare how a simple linear model versus a nonlinear one handled the data.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Prediction and Results
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            I trained both models, got my predictions which I used to help plan out my race and fueling strategy, and then ran the race. 
            Afterwards, I compared these predictions to my actual splits. 
            Figure 2 shows these results. 
            The linear regression was closer to my total time, estimating just under seven and a half hours, while the neural network predicted around seven hours but matched my mile-by-mile pacing surprisingly well through the first half of the race. 
            In the second half, I slowed more than either model expected mostly from fatigue and increasingly technical terrain, neither of which were represented in the data.
          </p>

          {/* Figure 3 */}
          <div className="my-8">
            <img 
              src="/ultrarunning_fig3.png" 
              alt="Predicted vs actual race splits"
              className="w-full mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 italic mt-2 text-center">
              Figure 3: Comparison of predicted mile splits (linear regression and neural network) versus actual race performance
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            In future iterations, I think this model would benefit from incorporating a metric for fatigue, especially as I start running longer races. 
            In an earlier version, I tried using distance covered as an input to capture fatigue, but since I&apos;d never run 33 miles in one go before the race, both models struggled to extrapolate and predicted unrealistically slow times. 
            As I gather more data and predict future races, I plan to find a new way to include fatigue, perhaps by using previous mile&apos;s pace and net elevation gain as inputs, which would implicitly capture fatigue. 
            All things to try before the next race!
          </p>

          <h2 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
            Code Availability
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            The code for this project is available on my GitHub repository{' '}
            <a 
              href="https://github.com/leahgibson/runlytics" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              runlytics
            </a>
            .
          </p>

        </div>
        </main>
        <Footer />
    </>
  );
}