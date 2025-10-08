export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Leah</h1>
          <p className="text-xl">Data Scientist | Mathematician | Researcher | Software Engineer</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <img 
                src="/leahgibson.jpg" 
                alt="Leah" 
                className="rounded-lg shadow-lg w-full"
              />
              {/* 
                To add your image:
                1. Put your image file in the "public" folder in your project
                2. Name it something like "profile.jpg"
                3. Reference it as "/profile.jpg" (the / means public folder)
              */}
            </div>
            
            {/* About Text */}
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Write your introduction here. Tell people who you are, what you do, 
                and what you're passionate about. This is your chance to make a great 
                first impression!
              </p>
              <p className="text-lg text-gray-700">
                You can add multiple paragraphs to tell your story. Keep it friendly 
                and authentic. People love to connect with real stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">What I Do</h2>
          <p className="text-lg text-gray-700 mb-6">
            Describe your work, hobbies, or interests here. This could be your 
            profession, side projects, creative pursuits, or anything you want to share.
          </p>
          
          {/* You can add a grid of cards for different activities */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Activity 1</h3>
              <p className="text-gray-600">
                Describe something you do or are interested in.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Activity 2</h3>
              <p className="text-gray-600">
                Another thing you're passionate about.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Activity 3</h3>
              <p className="text-gray-600">
                Yet another interest or skill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">My Projects</h2>
          <p className="text-lg text-gray-700 mb-8">
            Share some projects, achievements, or photos you're proud of.
          </p>
          
          {/* Image grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="/project1.jpg" 
                alt="Project 1" 
                className="rounded-lg shadow-md w-full mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800">Project Title</h3>
              <p className="text-gray-600">Brief description of this project.</p>
            </div>
            <div>
              <img 
                src="/project2.jpg" 
                alt="Project 2" 
                className="rounded-lg shadow-md w-full mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800">Another Project</h3>
              <p className="text-gray-600">What this project is about.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg mb-6">
            I'd love to hear from you! Connect with me:
          </p>
          
          {/* Email */}
          <p className="text-xl mb-8">
            <a href="mailto:leah.d.gibson98@gmail.com" className="text-blue-400 hover:text-blue-300">
              Email Me
            </a>
          </p>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <a 
              href="https://linkedin.com/in/leahdgibson" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              LinkedIn
            </a>
            <span className="text-gray-500">•</span>
            
            <a 
              href="https://x.com/c0mbinatorial" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Twitter/X
            </a>
            <span className="text-gray-500">•</span>
            
            <a 
              href="https://polarvertex.substack.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Substack
            </a>
            <span className="text-gray-500">•</span>
            
            <a 
              href="https://github.com/leahgibson" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              GitHub
            </a>
            <span className="text-gray-500">•</span>
            
            <a 
              href="https://orcid.org/0009-0000-4429-7019" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              ORCID
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}