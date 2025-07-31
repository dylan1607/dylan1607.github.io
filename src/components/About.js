"use client";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { useEffect } from "react";
import { sleep } from "@/utils/time";

export default function About() {
  const scrollY = useParallax();
  let i = 0;
  let j = 0;
  let words = [
    "Full Stack Developer.",
    "UI/UX Designer.",
    "Open Source Contributor.",
    "Tech Enthusiast.",
  ];
  let currentWord = words[0];
  let isDeleting = false;
  const verlocity = [100, 140, 160, 180]; // Typing speed in milliseconds

  const typewritter = async () => {
    const updateTextContent = (text) => {
      document.getElementById("typewriter").textContent = text;
    };

    currentWord = words[i];
    if (isDeleting) {
      j--;
      updateTextContent(currentWord.substring(0, j));
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length; // Cycle through words
      }
    } else {
      updateTextContent(currentWord.substring(0, j + 1));
      j++;
      if (j === currentWord.length) {
        await sleep(1000);
        isDeleting = true;
      }
    }

    setTimeout(
      typewritter,
      isDeleting ? 100 : verlocity.sort(() => Math.random() - 0.5)[0]
    );
  };

  useEffect(() => {
    typewritter();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex-col space-y-5 max-w-xl">
              <h2 className="text-4xl font-bold text-white sm:text-5xl">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#bbbbbc]">
                  Dylan Tran
                </span>
              </h2>

              <p id="typewriter" className="text-xl h-5 text-blue-200"></p>

              <p className="text-lg text-gray-200 leading-relaxed">
                I'm a passionate developer who loves creating beautiful,
                functional, and user-centered digital experiences. With
                expertise in modern web technologies, I bring ideas to life
                through clean code and thoughtful design.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 lg:mt-0 lg:w-1/2 lg:flex lg:justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <div className="absolute inset-0 w-64 h-64 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <span className="text-white text-lg font-medium">
                  Your Photo
                </span>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
