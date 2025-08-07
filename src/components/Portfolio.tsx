"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import { 
  IconHome, 
  IconUser, 
  IconBriefcase, 
  IconSchool, 
  IconAward, 
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconDevices,
  IconDatabase,
  IconCloud,
  IconTerminal,
  IconChartBar
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Portfolio() {
  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full" />,
      href: "#about",
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full" />,
      href: "#experience",
    },
    {
      title: "Education",
      icon: <IconSchool className="h-full w-full" />,
      href: "#education",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full" />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "#contact",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Floating Dock Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <BackgroundBeams />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-[200px] h-[200px] rounded-full mx-auto mb-8 border-4 border-white/20 bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-6xl font-bold">
              HK
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            K V Hitesh Kumar Chowdary
          </h1>
          
          <TextGenerateEffect 
            words="Computer Science student with hands-on experience in DevOps, web development, and cybersecurity. "
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a
              href="https://github.com/solstxce"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/kvhkc"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:kvhkc2332@gmail.com"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <IconMail size={24} className="text-white" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section with Skills */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">About Me</h2>
          
          <BentoGrid className="mb-16">
            <BentoGridItem
              title="Programming Languages"
              description="Python, C, C++, JavaScript, Java"
              header={
                <div className="flex items-center justify-center h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-4 overflow-hidden">
                  <div className="flex space-x-2">
                    <motion.div 
                      className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white text-xs font-bold">Py</span>
                    </motion.div>
                    <motion.div 
                      className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span className="text-black text-xs font-bold">JS</span>
                    </motion.div>
                    <motion.div 
                      className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="text-white text-xs font-bold">C</span>
                    </motion.div>
                  </div>
                </div>
              }
              icon={<IconCode className="h-6 w-6 text-blue-400" />}
              className="md:col-span-1 bg-gray-900/50 border-gray-700 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105"
            />
            <BentoGridItem
              title="Web Technologies"
              description="React, Vite, Django, Flask, Tailwind, Bootstrap, Streamlit"
              header={
                <div className="flex items-center justify-center h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-4">
                  <div className="grid grid-cols-3 gap-1">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <motion.div 
                        key={index}
                        className={`w-6 h-6 rounded ${
                          index === 0 ? 'bg-cyan-400' :
                          index === 1 ? 'bg-green-500' :
                          index === 2 ? 'bg-blue-600' :
                          index === 3 ? 'bg-purple-500' :
                          index === 4 ? 'bg-pink-500' : 'bg-indigo-500'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 2
                        }}
                        whileHover={{ scale: 1.3, rotate: 45 }}
                      />
                    ))}
                  </div>
                </div>
              }
              icon={<IconDevices className="h-6 w-6 text-green-400" />}
              className="md:col-span-1 bg-gray-900/50 border-gray-700 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105"
            />
            <BentoGridItem
              title="Databases"
              description="MongoDB, SQLite, MySQL, PostgreSQL"
              header={
                <div className="flex items-center justify-center h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4">
                  <div className="flex space-x-2">
                    <motion.div 
                      className="w-10 h-6 bg-green-600 rounded flex items-center justify-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0 }}
                      whileHover={{ y: -5 }}
                    >
                      <span className="text-white text-xs">M</span>
                    </motion.div>
                    <motion.div 
                      className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <span className="text-white text-xs">SQL</span>
                    </motion.div>
                    <motion.div 
                      className="w-10 h-6 bg-orange-600 rounded flex items-center justify-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ y: -5 }}
                    >
                      <span className="text-white text-xs">My</span>
                    </motion.div>
                  </div>
                </div>
              }
              icon={<IconDatabase className="h-6 w-6 text-purple-400" />}
              className="md:col-span-1 bg-gray-900/50 border-gray-700 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105"
            />
            <BentoGridItem
              title="DevOps & Cloud"
              description="Git, GitHub, GCP, Azure, Linux, Bash, Cron, CI/CD"
              header={
                <div className="flex items-center justify-center h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg mb-4">
                  <div className="flex space-x-3">
                    <motion.div 
                      className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      whileHover={{ scale: 1.3 }}
                    >
                      <IconCloud size={16} className="text-white" />
                    </motion.div>
                    <motion.div 
                      className="w-8 h-8 bg-black rounded-full flex items-center justify-center border border-gray-600"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0.4)",
                          "0 0 0 10px rgba(34, 197, 94, 0)",
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      whileHover={{ scale: 1.3 }}
                    >
                      <IconTerminal size={16} className="text-white" />
                    </motion.div>
                    <motion.div 
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.3, rotate: 180 }}
                    >
                      <span className="text-white text-xs font-bold">K8</span>
                    </motion.div>
                  </div>
                </div>
              }
              icon={<IconCloud className="h-6 w-6 text-orange-400" />}
              className="md:col-span-2 bg-gray-900/50 border-gray-700 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105"
            />
            <BentoGridItem
              title="Data & AI"
              description="Google Looker, Prompt Engineering, Predictive Modeling, Scikit-learn"
              header={
                <div className="flex items-center justify-center h-20 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-lg mb-4">
                  <div className="flex space-x-1">
                    {[8, 12, 6, 10, 8].map((height, index) => (
                      <motion.div 
                        key={index}
                        className={`w-2 rounded ${
                          index === 0 ? 'bg-pink-400' :
                          index === 1 ? 'bg-purple-400' :
                          index === 2 ? 'bg-violet-400' :
                          index === 3 ? 'bg-indigo-400' : 'bg-blue-400'
                        }`}
                        style={{ height: `${height * 4}px` }}
                        animate={{
                          height: [
                            `${height * 4}px`,
                            `${(height + Math.random() * 4) * 4}px`,
                            `${height * 4}px`
                          ],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          delay: index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        whileHover={{ 
                          scale: 1.5, 
                          height: `${height * 6}px`,
                          transition: { duration: 0.2 }
                        }}
                      />
                    ))}
                  </div>
                </div>
              }
              icon={<IconChartBar className="h-6 w-6 text-pink-400" />}
              className="md:col-span-1 bg-gray-900/50 border-gray-700 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Experience</h2>
          
          <Timeline data={[
                        {
              title: "August 2025 - Present",
              content: (
                <div>
                  <h3 className="text-xl font-bold mb-2">Frameworks and Cloud Junior Engineer</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">MulticoreWare Inc (Remote)</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Working on cloud infrastructure and framework development</li>
                    <li>Implementing scalable solutions for enterprise applications</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "May 2025 - June 2025",
              content: (
                <div>
                  <h3 className="text-xl font-bold mb-2">Android Developer Intern</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Pheme Software Pvt. Ltd., Bengaluru</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Built cross-platform application for Knowbots LMS</li>
                    <li>Integrated SCORM 2004/SCORM 1.2 compliant courses with progress tracking</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "August 2024 - Present",
              content: (
                <div>
                  <h3 className="text-xl font-bold mb-2">Platform Developer</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">42 Learn, Vijayawada</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Built proctored exam platform with real-time analytics</li>
                    <li>Automated workflows for attendance monitoring, exam results, and student mailing</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "July 2023 - June 2024",
              content: (
                <div>
                  <h3 className="text-xl font-bold mb-2">Research Student (Remote)</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">MulticoreWare Inc</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Worked on real-time problems provided by MultiCoreWare</li>
                    <li>Applied research skills to solve complex technological challenges</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "August 2023 - January 2024",
              content: (
                <div>
                  <h3 className="text-xl font-bold mb-2">Student Intern</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Infoziant Security, Madurai</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Contributed to cybersecurity and ethical hacking projects</li>
                    <li>Gained practical experience in implementing security measures</li>
                  </ul>
                </div>
              ),
            },
          ]} />
        </div>
      </section>

      {/* Language Usage Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Language Usage Statistics</h2>
          
          <div className="grid gap-4 max-w-4xl mx-auto">
            {[
              { name: "Python", percentage: 58.70, size: "91.9 MB", color: "bg-blue-500" },
              { name: "Jupyter Notebook", percentage: 13.08, size: "20.5 MB", color: "bg-orange-500" },
              { name: "JavaScript", percentage: 6.40, size: "10.0 MB", color: "bg-yellow-500" },
              { name: "C++", percentage: 4.00, size: "6.3 MB", color: "bg-red-500" },
              { name: "CSS", percentage: 3.77, size: "5.9 MB", color: "bg-purple-500" },
              { name: "HTML", percentage: 2.73, size: "4.3 MB", color: "bg-green-500" },
              { name: "Makefile", percentage: 2.31, size: "3.6 MB", color: "bg-gray-500" },
              { name: "Ruby", percentage: 1.83, size: "2.9 MB", color: "bg-pink-500" },
              { name: "PHP", percentage: 1.58, size: "2.5 MB", color: "bg-indigo-500" },
              { name: "Dart", percentage: 1.20, size: "1.9 MB", color: "bg-cyan-500" },
              { name: "C", percentage: 1.15, size: "1.8 MB", color: "bg-red-400" },
              { name: "Shell", percentage: 1.11, size: "1.7 MB", color: "bg-gray-400" },
              { name: "TypeScript", percentage: 0.41, size: "663.7 KB", color: "bg-blue-400" },
              { name: "Cuda", percentage: 0.40, size: "641.7 KB", color: "bg-green-400" },
              { name: "Java", percentage: 0.26, size: "410.8 KB", color: "bg-orange-400" },
            ].map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-900 border border-gray-700 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{lang.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm">{lang.size}</span>
                    <span className="text-white font-semibold">{lang.percentage}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${lang.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Show remaining languages as a collapsed view */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 p-4 bg-gray-900 border border-gray-700 rounded-lg"
            >
              <p className="text-gray-400 text-sm text-center">
                +25 more languages including SCSS, CMake, C#, Dockerfile, Swift, Kotlin, Go, MATLAB, and others
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Education</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-white">B.Tech in Computer Science</h3>
              <p className="text-gray-400 mb-2">Kalasalingam Academy of Research and Education</p>
              <p className="text-gray-500 mb-2">2022 - 2026 (Expected)</p>
              <p className="text-lg font-semibold text-blue-400">CGPA: 9.09</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Intermediate</h3>
              <p className="text-gray-400 mb-2">Narayana Junior College</p>
              <p className="text-gray-500 mb-2">2020 - 2022</p>
              <p className="text-lg font-semibold text-blue-400">Score: 832</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Matriculation/SSC</h3>
              <p className="text-gray-400 mb-2">Narayana High School</p>
              <p className="text-gray-500 mb-2">2020</p>
              <p className="text-lg font-semibold text-blue-400">GPA: 10.0</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WIFI-based RFID Attendance System",
                description: "Scalable attendance system using RFID and WiFi with Django backend and Bootstrap frontend. Integrated NodeMCU for RFID reading and server transmission.",
                tech: "NodeMCU, Django, Bootstrap, IoT",
                link: "https://github.com/solstxce/rfid-attendance-system",
                year: "2023"
              },
              {
                title: "Blazor ZTI: Zero Trust Identity System",
                description: "RBAC system with MFA (2FA using TOTP). Admin dashboard for real-time monitoring and user/role management with MongoDB for scalable storage.",
                tech: "Flask, MongoDB, Python, JWT",
                link: "https://github.com/solstxce/ZTNA_IBM",
                year: "2024"
              },
              {
                title: "TOX-MAS: Real-time Content Moderator",
                description: "Multi-version content moderation system with Web App, Chrome Extension, and Next.js versions using advanced NLP and real-time analysis.",
                tech: "NLP, Flask, Tailwind, GCP, React, Next.js",
                link: "https://github.com/solstxce/TOX-MAS",
                year: "2024"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-gray-600 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-blue-400 mb-4 font-semibold">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project <IconBrandGithub size={16} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { place: "4th Place", event: "PEC Hacks 2.0 International Hackathon", year: "2024" },
              { place: "3rd Place", event: "ACM Disfrutar 2K24", year: "2024" },
              { place: "Top 10", event: "Algorithmist 24 by GFG KARE", year: "2024" },
              { place: "Qualifier", event: "IBM ICE National Hackathon", year: "2023" },
              { place: "1st Prize", event: "IBM Poster Presentation (Cyber Security)", year: "2023" }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white hover:scale-105 transition-transform"
              >
                <IconAward size={32} className="mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">{achievement.place}</h3>
                <p className="mb-2">{achievement.event}</p>
                <p className="text-sm opacity-90">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Get In Touch</h2>
          <p className="text-xl text-gray-400 mb-8">
            I&apos;m always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:kvhkc2332@gmail.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <IconMail size={20} className="mr-2" />
              Send Email
            </a>
            <a
              href="https://kvhkc.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Visit Portfolio
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/solstxce"
              className="p-3 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kvhkc"
              className="p-3 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
