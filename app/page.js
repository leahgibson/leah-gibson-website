import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      
    <main className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section 
        className="relative bg-blue-600 text-white py-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/header.JPG')" }}
      >
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Leah D. Gibson</h1>
          <p className="text-xl">Data Scientist | Mathematician | Researcher | Software Engineer | Ultrarunner</p>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Left Side - Headshot and Info */}
            <div className="md:w-1/3 flex flex-col items-center">
              {/* Circular Headshot */}
              <img 
                src="/headshot.JPG" 
                alt="Leah" 
                className="w-48 h-48 rounded-full object-cover shadow-lg mb-4"
              />
              
              {/* Title */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Leah D. Gibson
                </h2>
                <p className="text-gray-600">
                  Denver, Colorado
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-col gap-3 w-full max-w-xs items-center">
                <a 
                  href="https://linkedin.com/in/leahdgibson" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-800 hover:text-blue-800 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  in/leahdgibson
                </a>
                <a 
                  href="https://x.com/c0mbinatorial" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-800 hover:text-blue-800 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @c0mbinatorial
                </a>
                <a 
                  href="https://polarvertex.substack.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-800 hover:text-blue-800 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                  </svg>
                  Polar Vertex
                </a>
                <a 
                  href="https://github.com/leahgibson" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-800 hover:text-blue-800 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  leahgibson
                </a>
                <a 
                  href="https://orcid.org/0009-0000-4429-7019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-800 hover:text-blue-800 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 5.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V8.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V8.416zm1.444 1.303v7.444h2.297c2.359 0 4.053-1.303 4.053-3.722 0-2.438-1.694-3.722-4.053-3.722h-2.297z"/>
                  </svg>
                  0009-0000-4429-7019
                </a>
              </div>
            </div>

            {/* Right Side - About Me Blurb */}
            <div className="md:w-2/3">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Hi, I&apos;m Leah.</h3>
                  
                  {/* FIRST PARAGRAPH */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      With a Master&apos;s in Mathematics and a love for the environment, my career has focused around using my analytical and computational skills to make a positive impact on our planet.
                      I am currently an Air Quality Data Scientist for the Colorado Department of Public Health and Environment where I use quantitative methods to provide data-based answers about Colorado&apos;s air quality.
                  </p>

                  {/* SECOND PARAGRAPH */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                      When I&apos;m not working, I&apos;m still learning and challenging myself in new ways.
                      I share many of my mathe and data side projects on my blog, Polar Vertex.
                      Ultrarunning takes a good portion of my time and captures who I am at my core: determined, disciplined, and happiest outdoors.
                      Long hours on the trail feed my love for nature and remind me that growth comes from showing up and pushing through even when it gets hard.
                      It&apos;s a mindset I carry into every part of my life.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                      
                  </p>
              </div>
          </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">What I Do</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Data Science Card */}
            <Link href="/data-science">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/data_science.png" 
                  alt="Data Science" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Data Science</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Highlights coming soon!
                  </p>
                </div>
              </div>
            </Link>

            {/* Mathematics Card */}
            <Link href="/mathematics">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/mathematics.png" 
                  alt="Mathematics" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Mathematics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Highlights coming soon!
                  </p>
                </div>
              </div>
            </Link>

            {/* Research Card */}
            <Link href="/research">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/research.jpeg" 
                  alt="Research" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Highlights coming soon!
                  </p>
                </div>
              </div>
            </Link>

            {/* Software Engineering Card */}
            <Link href="/software-engineering">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/software.png" 
                  alt="Software Engineering" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Software Engineering</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Highlights coming soon!
                  </p>
                </div>
              </div>
            </Link>

            {/* Ultrarunning Card */}
            <Link href="/ultrarunning">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/ultrarunning.JPG" 
                  alt="Ultrarunning" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Ultrarunning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ultrarunning has become a huge part of my life, and nicely complements my other skills.
                    More highlights coming soon!
                  </p>
                </div>
              </div>
            </Link>

            {/* Experience Card */}
            <Link href="/background">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/experience.JPG" 
                  alt="Background" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Background</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A look at where I&apos;ve been, from my academic roots in mathematics to my work as a data scientist.
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <Footer />

    </main>
    </>
  );
}