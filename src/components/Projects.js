'use client';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

export default function Projects() {
  const scrollY = useParallax();
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#",
      accent: "from-pink-400/80 via-rose-400/60 to-red-400/40",
      icon: "🛍️"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#",
      accent: "from-blue-400/80 via-cyan-400/60 to-teal-400/40",
      icon: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts using external weather APIs with beautiful data visualizations.",
      technologies: ["Vue.js", "Chart.js", "Tailwind CSS", "Weather API"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#",
      accent: "from-emerald-400/80 via-green-400/60 to-lime-400/40",
      icon: "🌤️"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Liquid glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-indigo-100/40" />
      
      {/* Animated liquid bubbles */}
      <div 
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-300/20 rounded-full mix-blend-multiply filter blur-2xl"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)`,
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-bl from-pink-200/30 to-orange-300/20 rounded-full mix-blend-multiply filter blur-2xl"
        style={{ 
          transform: `translateY(${scrollY * -0.15}px) translateX(${Math.cos(scrollY * 0.008) * 30}px)`,
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />
      <div 
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-cyan-200/30 to-blue-300/20 rounded-full mix-blend-multiply filter blur-2xl"
        style={{ 
          transform: `translateY(${scrollY * 0.25}px) translateX(${Math.sin(scrollY * 0.006) * 40}px)`,
          animation: 'float 10s ease-in-out infinite'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Crafted with precision and passion, these projects showcase my expertise in modern web development
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative perspective-1000"
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 5,
                transition: { 
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
            >
              {/* Glass card with iOS-style blur */}
              <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl shadow-black/10 overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Floating icon */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl border border-white/40 shadow-lg">
                  <motion.span
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {project.icon}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-slate-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Tech stack with liquid pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-white/50 group-hover:bg-white/60 group-hover:text-slate-800 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.8)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-white/30 backdrop-blur-sm rounded-2xl text-slate-700 font-medium border border-white/40 hover:bg-white/50 transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-sm rounded-2xl text-white font-medium border border-white/20 hover:from-blue-600/90 hover:to-purple-700/90 transition-all duration-300 group/btn shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live</span>
                    </motion.a>
                  </div>
                </div>

                {/* Liquid shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-all duration-1000 ease-out"
                  style={{ width: '200%' }}
                />
              </div>

              {/* Subtle shadow beneath card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10 scale-95" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}