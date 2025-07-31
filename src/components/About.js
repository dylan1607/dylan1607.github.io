export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Hi, I'm <span className="text-blue-600">Your Name</span>
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                I'm a passionate developer who loves creating beautiful, functional, and user-centered digital experiences. 
                With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf"
                  className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2 lg:flex lg:justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              <div className="absolute inset-0 w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-lg">Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}