export default function Footer() {
    return (
      <section className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <a href="mailto:leah.d.gibson98@gmail.com" className="text-blue-400 hover:text-blue-300">
              Email Me
            </a>
            <span className="text-gray-500">•</span>

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
    )
}