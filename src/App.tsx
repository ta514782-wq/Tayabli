/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Brain, 
  Calculator, 
  ChevronRight, 
  Menu, 
  X, 
  MessageSquare,
  GraduationCap,
  Terminal,
  BarChart3,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

// --- Components ---

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
  key?: React.Key;
}

const SkillBar = ({ name, level, delay }: SkillBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-semibold text-gray-300">{name}</span>
      <span className="text-sm font-bold text-emerald-400">{level}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay }}
        className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full"
      />
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold gradient-text"
        >
          TA.
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-emerald-500/20"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#141414] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-300 hover:text-emerald-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase rounded-full border border-emerald-500/20 mb-6"
          >
            Available for Opportunities
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            I'm <span className="gradient-text">Tayyab Ali</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
            AI & Mathematics Enthusiast
          </h2>
          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            Mathematics student at BZU Multan, bridging the gap between abstract theory and intelligent systems. Specializing in Machine Learning, Deep Learning, and Data Science.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
            >
              View Projects <ChevronRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <a href="https://www.linkedin.com/in/tayyab-ali-670785385" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ta514782@gmail.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square glass-card p-4 flex items-center justify-center">
            <div className="w-full h-full rounded-xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/ai-tech/800/800" 
                alt="Tayyab Ali" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse delay-700" />
          
          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 -left-10 glass-card p-4 flex items-center gap-3 shadow-2xl"
          >
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">
              <Brain size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Focus</p>
              <p className="text-sm font-bold">Deep Learning</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 -right-10 glass-card p-4 flex items-center gap-3 shadow-2xl"
          >
            <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
              <Calculator size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Major</p>
              <p className="text-sm font-bold">Mathematics</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/math/800/1000" 
                alt="Mathematics and AI" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-8 max-w-xs">
              <p className="text-3xl font-display font-bold text-emerald-400 mb-1">3rd Sem</p>
              <p className="text-sm text-gray-400 font-medium">Post ADP Mathematics Student at BZU Multan</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">About <span className="text-emerald-400">Me</span></h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I am Tayyab Ali, a passionate mathematics student currently studying Post ADP (3rd semester) in the Mathematics Department at CASPAM, Bahauddin Zakariya University Multan.
              </p>
              <p>
                My journey is fueled by a deep fascination with how mathematical structures underpin the most advanced technologies of our time. I am particularly interested in <span className="text-white font-medium">Machine Learning, Generative AI, Deep Learning, and Business Intelligence.</span>
              </p>
              <p>
                I enjoy combining rigorous mathematical thinking with modern programming to build intelligent systems, analytical tools, and data-driven solutions that solve real-world problems.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-white font-bold mb-1">Analytical</h4>
                <p className="text-sm text-gray-500">Problem-solving through logic and data.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-white font-bold mb-1">Innovative</h4>
                <p className="text-sm text-gray-500">Exploring the frontiers of Generative AI.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const programmingSkills = [
    { name: 'Python', level: 90 },
    { name: 'C++', level: 75 },
    { name: 'MATLAB', level: 80 },
  ];

  const mathSkills = [
    { name: 'Linear Algebra', level: 95 },
    { name: 'Probability Theory', level: 85 },
    { name: 'Mathematical Modeling', level: 80 },
    { name: 'Calculus & Statistics', level: 90 },
  ];

  const techSkills = [
    { name: 'Machine Learning', level: 85 },
    { name: 'Generative AI', level: 80 },
    { name: 'Deep Learning', level: 75 },
    { name: 'Data Visualization', level: 85 },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Technical <span className="text-emerald-400">Expertise</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A blend of mathematical rigor and computational power.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-bold mb-8">Programming</h3>
            {programmingSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
              <Calculator size={24} />
            </div>
            <h3 className="text-xl font-bold mb-8">Mathematics</h3>
            {mathSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-6">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold mb-8">AI & Data</h3>
            {techSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  icon: any;
  delay: number;
  key?: React.Key;
}

const ProjectCard = ({ title, desc, tags, icon: Icon, delay }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group glass-card overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
  >
    <div className="h-48 bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-gray-700 group-hover:text-emerald-500/50 transition-colors duration-500">
        <Icon size={80} strokeWidth={1} />
      </div>
      <div className="absolute top-4 right-4">
        <a href="#" className="w-10 h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors">
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 line-clamp-2">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-gray-400 rounded-full border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "AI Scientific Calculator",
      desc: "A smart calculator that uses NLP to understand mathematical queries and provides step-by-step solutions.",
      tags: ["Python", "NLP", "Math"],
      icon: Calculator
    },
    {
      title: "Data Analytics Dashboard",
      desc: "Interactive business intelligence dashboard built with Python to visualize complex datasets and trends.",
      tags: ["Python", "Pandas", "Plotly"],
      icon: BarChart3
    },
    {
      title: "ML Prediction Models",
      desc: "A collection of machine learning models for predictive analysis in financial and statistical domains.",
      tags: ["Scikit-Learn", "Regression", "AI"],
      icon: Brain
    },
    {
      title: "Actuarial Tools",
      desc: "Mathematical tools designed for actuarial analysis, risk assessment, and statistical modeling.",
      tags: ["MATLAB", "Statistics", "Risk"],
      icon: Database
    },
    {
      title: "Deep Learning Vision",
      desc: "Computer vision projects utilizing deep learning for image classification and object detection.",
      tags: ["TensorFlow", "CNN", "Vision"],
      icon: Cpu
    },
    {
      title: "Mathematical Modeling",
      desc: "Simulating real-world phenomena through advanced mathematical modeling and numerical analysis.",
      tags: ["MATLAB", "Calculus", "Modeling"],
      icon: Code
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Featured <span className="text-emerald-400">Projects</span></h2>
            <p className="text-gray-500 max-w-xl">Showcasing the intersection of mathematics and artificial intelligence.</p>
          </div>
          <a href="#" className="text-emerald-400 font-bold flex items-center gap-2 hover:underline">
            View All Projects <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.title} 
              title={project.title}
              desc={project.desc}
              tags={project.tags}
              icon={project.icon}
              delay={i * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Academic <span className="text-emerald-400">Background</span></h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 border-l-2 border-emerald-500/30 pb-12"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            <div className="glass-card p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Post ADP Mathematics</h3>
                  <p className="text-emerald-400 font-semibold">3rd Semester (Current)</p>
                </div>
                <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/5 text-xs font-bold text-gray-400">
                  2024 - Present
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-white font-bold">Bahauddin Zakariya University, Multan</p>
                  <p className="text-sm text-gray-500">Mathematics Department – CASPAM</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Focusing on advanced mathematical theories including Linear Algebra, Probability, and Mathematical Modeling. Actively applying these concepts to computational problems in AI and Data Science.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pl-12 border-l-2 border-emerald-500/30"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-700 rounded-full" />
            <div className="glass-card p-8 opacity-70">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Associate Degree Program (ADP)</h3>
                  <p className="text-gray-400 font-semibold">Mathematics & Physics</p>
                </div>
                <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/5 text-xs font-bold text-gray-500">
                  Completed
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Foundation in core scientific principles, providing the analytical basis for further studies in mathematics and technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">Get in <span className="text-emerald-400">Touch</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email Me</p>
                  <a href="mailto:ta514782@gmail.com" className="text-lg font-bold hover:text-emerald-400 transition-colors">ta514782@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">WhatsApp</p>
                  <a href="https://wa.me/923480639755" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-indigo-400 transition-colors">03480639755</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/tayyab-ali-670785385" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-blue-400 transition-colors">Tayyab Ali</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-2xl font-display font-bold gradient-text mb-2">TA.</p>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Tayyab Ali. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500 transition-all">
            <Linkedin size={18} />
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500 transition-all">
            <Github size={18} />
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500 transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      
      {/* Floating Action Button for WhatsApp */}
      <motion.a
        href="https://wa.me/923480639755"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl z-50 cursor-pointer"
      >
        <MessageSquare size={28} />
      </motion.a>
    </div>
  );
}
