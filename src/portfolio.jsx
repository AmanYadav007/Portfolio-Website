import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Download, ArrowRight, ArrowUp, Moon, Sun } from 'lucide-react';
import profileImage from './Assests/profile.png';
import quicksideImage from './Assests/quicksidetool.jpg';
import appleCloneImage from './Assests/appleclone.jpg';
import teslaCloneImage from './Assests/teslaclone.jpg';
import textUtilityImage from './Assests/textutility.jpg';

const Portfolio = () => {
  // States
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [imageLoading, setImageLoading] = useState({});
  const [downloading, setDownloading] = useState(false);

  // Initialize dark mode and scroll listener
  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Add scroll listener
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Data
  const skills = {
    professional: [
      "JavaScript", "HTML5", "CSS3", "React.js", "Redux", "C++", "Github",
      "Node.js", "NPM", "Yarn", "Vite", "Git", "Unit Testing", "Firebase",
      "CI/CD", "UI/UX", "jQuery", "Material UI", "Bootstrap", "Tailwind",
      "GSAP", "SQL", "JSON"
    ],
    software: [
      "Adobe Creative Cloud", "Photoshop", "XD", "Illustrator", "Figma",
      "Indesign", "Workfront", "Adobe Express"
    ]
  };

  const experience = [
    {
      role: "Web Developer",
      company: "Accenture",
      period: "2021 - 2024",
      achievements: [
        "Developed user-friendly, high-performance web applications using ReactJS, enhancing load times and user engagement.",
        "Created reusable components and utilized React Hooks, improving app efficiency and reducing development time by 30%.",
        "Collaborated with designers and developers to translate design concepts into responsive, intuitive interfaces, strengthening user retention.",
        "Built and optimized HTML banners for Google Ads, introducing a 'one-code banner' system that reduced development time by 60% and streamlined updates."
      ]
    },
    {
      role: "Consultant (Data Crawler)",
      company: "UGAM Solution Pvt Ltd",
      period: "2020 - 2021",
      achievements: [
        "Performed data quality checks and extraction from e-commerce sites, ensuring reliable datasets for HP LFP projects.",
        "Utilized Selenium for data crawling and reconciliation, working closely with teams to resolve data inconsistencies."
      ]
    }
  ];

  const projects = [
    {
      title: "Quick Side Tool",
      description: "React-based application optimized for handling large documents, Image, and also generate QRcode.",
      tags: ["React", "JavaScript", "QR Code"],
      liveDemo: "https://chromewebstore.google.com/detail/quick-side-tool/ednlokciemgblchidkhbhhndphgjkoip?authuser=0&hl=en-GB",
      github: "https://github.com/AmanYadav007/QuickSideTool",
      image: quicksideImage
    },
    {
      title: "Apple Clone Website",
      description: "Developed a fully responsive Apple website clone with 90% design and animation accuracy.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://realapple.netlify.app/",
      github: "https://github.com/AmanYadav007/iphone13_website",
      image: appleCloneImage
    },
    {
      title: "Tesla Clone Website",
      description: "Developed a fully responsive Tesla website clone with 90% design and animation accuracy, mimicking the live site for UI practice.",
      tags: ["React", "Tailwind", "Animation"],
      liveDemo: "https://teslaclonebyaman.netlify.app/",
      github: "https://github.com/AmanYadav007/Tesla-Clone-Web-app",
      image: teslaCloneImage
    },
    {
      title: "Text Utility Web App",
      description: "Built a web app for transforming text cases, saving the team 2 hours of manual work daily by automating text case changes.",
      tags: ["React", "JavaScript", "Utility"],
      liveDemo: "https://textman.netlify.app/",
      github: "https://github.com/AmanYadav007/textUtil_reactapp",
      image: textUtilityImage
    }
  ];

// Add this state in your Portfolio component
const [contactForm, setContactForm] = useState({
  name: '',
  email: '',
  message: ''
});
const [submitStatus, setSubmitStatus] = useState({
  loading: false,
  success: false,
  error: null
});

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitStatus({ loading: true, success: false, error: null });

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbz2V6UcgK3kz4xwXnONDePTUKv9KTPvYHIXM9wbAisfas2mr_CUyyvkIWia-YNaOiseJQ/exec', // Replace with your deployed Apps Script URL
      {
        method: 'POST',
        body: JSON.stringify(contactForm),
      }
    );

    if (response.ok) {
      setSubmitStatus({ loading: false, success: true, error: null });
      setContactForm({ name: '', email: '', message: '' }); // Reset form
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ loading: false, success: false, error: null });
      }, 5000);
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    setSubmitStatus({ 
      loading: false, 
      success: false, 
      error: 'Failed to send message. Please try again.' 
    });
  }
};


const handleDownloadCV = async () => {
  setDownloading(true);
  try {
    const fileId = '1J90LgakR7PGMj4UPLu_PKP0NYTKRjaCd';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    window.open(downloadUrl, '_blank');
  
  } catch (error) {
    console.error('Download failed:', error);
  } finally {
    setDownloading(false);
  }
};


return (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
    {/* Navbar */}
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-white">AY</span>
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? 
                <Sun className="w-5 h-5 text-gray-300" /> : 
                <Moon className="w-5 h-5 text-gray-600" />
              }
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <header className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm Aman Yadav 👋
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Front-End Developer crafting delightful web experiences
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button 
  onClick={handleDownloadCV}
  disabled={downloading}
  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center group disabled:opacity-50"
>
  {downloading ? (
    <>
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
      Downloading...
    </>
  ) : (
    <>
      Download CV
      <Download className="ml-2 w-4 h-4 group-hover:transform group-hover:translate-y-1 transition-transform" />
    </>
  )}
</button>
              <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition flex items-center text-gray-600 dark:text-gray-300">
                Contact Me <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <img 
                    src={profileImage} 
                    alt="Aman Yadav"
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoading(prev => ({ ...prev, profile: false }))}
                    onError={(e) => {
                      console.error('Image failed to load');
                      setImageLoading(prev => ({ ...prev, profile: false }));
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg">
                <div className="flex space-x-4">
                  <SocialLink href="mailto:amanry3000@gmail.com" icon={<Mail className="w-5 h-5" />} />
                  <SocialLink href="https://github.com/AmanYadav007" icon={<Github className="w-5 h-5" />} />
                  <SocialLink href="https://www.linkedin.com/in/aman-yadav-9144021a3/" icon={<Linkedin className="w-5 h-5" />} />
                  <SocialLink href="https://x.com/Amanyad57536099" icon={<Twitter className="w-5 h-5" />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* About Section */}
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Front-End Developer with 3+ years of experience in ReactJS, JavaScript, and UI/UX Design. 
            Skilled in HTML5, CSS3, Redux, Node.js, and Chrome Extension Development. 
            Proficient in Adobe Creative Cloud, Figma, and responsive design. 
            Strong in team collaboration, troubleshooting, and problem-solving.
          </p>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.professional.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-100 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Software Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.software.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 text-green-800 dark:text-green-100 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-200 dark:before:bg-blue-700">
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-[5px]" />
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                    <span className="font-medium">{job.company}</span>
                    <span className="mx-2">•</span>
                    <span>{job.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                {imageLoading[project.title] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onLoad={() => setImageLoading(prev => ({ ...prev, [project.title]: false }))}
                  onError={(e) => {
                    console.error('Image failed to load');
                    setImageLoading(prev => ({ ...prev, [project.title]: false }));
                    e.target.src = '/api/placeholder/400/320';
                  }}
                />
                {/* Overlay with quick links */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-6 h-6 text-blue-600" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
                    title="View Code"
                  >
                    <Github className="w-6 h-6 text-blue-600" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-100 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                  >
                    Live Demo <ExternalLink className="ml-1 w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  View Code <Github className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>


  <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
      Get In Touch
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            value={contactForm.name}
            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={contactForm.email}
            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          value={contactForm.message}
          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
          rows="4"
          className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={submitStatus.loading}
        className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
      >
        {submitStatus.loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Sending...
          </>
        ) : 'Send Message'}
      </button>

      {submitStatus.success && (
        <div className="text-green-600 dark:text-green-400 text-center mt-4">
          Message sent successfully!
        </div>
      )}

      {submitStatus.error && (
        <div className="text-red-600 dark:text-red-400 text-center mt-4">
          {submitStatus.error}
        </div>
      )}
    </form>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-gray-600 dark:text-gray-300">
      © 2024 Aman Yadav. All rights reserved.
    </p>
  </div>
</footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Style for dark mode and smooth scroll */}
      <style jsx global>{`
  html {
    scroll-behavior: smooth;
  }
  
  .dark {
    color-scheme: dark;
  }
`}</style>

      
    </div>


  );
};

// Helper component for social links
const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default Portfolio;