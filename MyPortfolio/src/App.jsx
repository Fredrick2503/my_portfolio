import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "./assets/H8293 (2).jpg";

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-200"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-400"></div>
    </div>
  </div>
);

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen bg-gray-900 text-white font-sans">
        <header className="text-left p-5 bg-gray-900 shadow-lg col-span-full">
          <h1 className="text-2xl">My Portfolio</h1>
        </header>
        
        <section className="w-full text-center flex flex-row justify-center flex-wrap py-10 bg-gray-800 shadow-lg col-span-full">
          <motion.section initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="w-min-[400px]">
            <h1 className="text-5xl font-semibold">Fredrick George F</h1>
            <p className="text-lg text-gray-400 mt-2">Engineer | Developer | Tech Enthusiast</p>
            <div className="flex justify-center">
              <img src={profileImage} alt="Profile" className="mt-4 w-32 rounded-xl shadow-lg object-cover" />
            </div>
          </motion.section>
          <motion.section initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="p-6 text-center lg:w-[50%]">
            <h2 className="text-4xl font-semibold mb-6">About Me</h2>
            <p className="text-gray-400 text-lg">
              I am a passionate engineer and developer with a keen interest in technology, web development, and cloud computing.
              With a strong foundation in Python, JavaScript, and full-stack development, I enjoy solving complex problems and building
              scalable applications. My expertise spans across Django, React, WebSockets, and modern web architectures.
            </p>
          </motion.section>
        </section>
        
        <section className="w-screen mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <h2 className="text-4xl font-semibold mb-6 col-span-full text-center">Projects</h2>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">FHIR Resource Viewer</h3>
            <p className="text-gray-400 mt-2">An intuitive tabular representation of FHIR data.</p>
            <button className="mt-4 px-4 py-2 bg-gray-600 text-gray-300 rounded-lg cursor-not-allowed">In Progress</button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Smart Classroom QR Auth</h3>
            <p className="text-gray-400 mt-2">A QR-based authentication system for smartboards.</p>
            <button className="mt-4 px-4 py-2 bg-gray-600 text-gray-300 rounded-lg cursor-not-allowed">In Progress</button>
          </motion.div>
        </section>
        
        <section className="mx-auto py-6 grid grid-flow-row gap-6 items-center w-screen">
          <h2 className="text-4xl font-semibold mb-6 col-span-full text-center">Skills</h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-gray-800 p-6 rounded-xl shadow-lg w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-lg font-bold text-center">
              <li className="bg-gray-700 p-3 rounded-lg">Python</li>
              <li className="bg-gray-700 p-3 rounded-lg">JavaScript</li>
              <li className="bg-gray-700 p-3 rounded-lg">React</li>
              <li className="bg-gray-700 p-3 rounded-lg">Django</li>
              <li className="bg-gray-700 p-3 rounded-lg">WebSockets</li>
              <li className="bg-gray-700 p-3 rounded-lg">Cloud Computing</li>
              <li className="bg-gray-700 p-3 rounded-lg">Tailwind CSS</li>
              <li className="bg-gray-700 p-3 rounded-lg">SQL</li>
            </ul>
          </motion.div>
        </section>
        
        <footer className="text-center p-6 bg-gray-800 shadow-lg col-span-full">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-500 transition-transform transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-500 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="mailto:youremail@example.com" className="text-3xl hover:text-gray-500 transition-transform transform hover:scale-110">
              <FaEnvelope />
            </a>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
