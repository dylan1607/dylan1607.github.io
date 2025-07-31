export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 70 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Firebase", level: 80 }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Tech Stack</h2>
          <p className="mt-4 text-lg text-gray-600">
            Technologies and tools I work with
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {tech.category}
              </h3>
              <div className="space-y-4">
                {tech.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React Native", "Machine Learning", "DevOps", "Blockchain", "Three.js", "WebAssembly"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}