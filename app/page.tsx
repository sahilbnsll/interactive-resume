"use client"

import { personalData, experienceData, educationData, skillsCarousel, detailedSkills, projectsData, certificationsData, blogsData, socialsData, portfoliosData } from '@/data/profile'
import { Meteors } from '@/components/ui/Meteors'
import { DynamicGridPattern } from '@/components/ui/DynamicGridPattern'
import { SpotlightBorder } from '@/components/ui/SpotlightBorder'
import { InfiniteCarousel } from '@/components/ui/InfiniteCarousel'
import { motion } from 'framer-motion'
import { Mail, Terminal, Briefcase, GraduationCap, Code2, ArrowUpRight, FolderGit2, Award, PenTool, Linkedin, Github, Globe } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white selection:bg-black/10 dark:selection:bg-white/10 overflow-hidden font-sans">
      <DynamicGridPattern className="opacity-10 dark:opacity-[0.15] fixed inset-0 pointer-events-none" />
      
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 h-16 bg-white/60 dark:bg-black/60 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/5 transition-colors">
        <div className="mx-auto max-w-5xl px-6 h-full flex items-center justify-between">
          <span className="font-extrabold text-xl tracking-tighter text-zinc-900 dark:text-white">SB.</span>
          <div className="flex items-center gap-4 sm:gap-6">
            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
        
        {/* HERO SECTION */}
        <section className="relative mb-32 flex flex-col items-start justify-center">
          <Meteors number={20} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 w-full"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-black to-zinc-500 dark:from-white dark:to-zinc-500 pb-2">
              {personalData.name}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <h2 className="text-xl sm:text-3xl font-semibold text-zinc-600 dark:text-zinc-400 flex items-center gap-3">
                <span className="text-emerald-500 font-mono font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">{`>_`}</span>
                {personalData.title}
              </h2>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20 w-fit">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Open to Work
              </div>
            </div>
            
            <p className="text-lg sm:text-xl max-w-2xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed font-light">
              <strong className="text-zinc-900 dark:text-zinc-100 font-medium">{personalData.headline}</strong> <br className="hidden sm:block" />
              {personalData.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <SpotlightBorder className="rounded-xl w-fit bg-white dark:bg-white/5 shadow-sm border border-zinc-200/50 dark:border-white/5 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300" spotlightColor="rgba(161, 161, 170, 0.25)">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="flex items-center gap-2 px-6 py-3 font-semibold text-zinc-900 dark:text-zinc-100 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Let's Connect
                  </a>
                </SpotlightBorder>
              </motion.div>
              
              {socialsData.map((social, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <SpotlightBorder className="rounded-xl w-fit bg-white dark:bg-white/5 shadow-sm border border-zinc-200/50 dark:border-white/5 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300" spotlightColor="rgba(161, 161, 170, 0.25)">
                    <a href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">
                      {social.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
                      {social.icon === 'github' && <Github className="w-4 h-4" />}
                      {social.name}
                    </a>
                  </SpotlightBorder>
                </motion.div>
              ))}

              {portfoliosData.map((portfolio, idx) => (
                <motion.div key={`port-${idx}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <SpotlightBorder className="rounded-xl w-fit bg-white dark:bg-white/5 shadow-sm border border-zinc-200/50 dark:border-white/5 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300" spotlightColor="rgba(161, 161, 170, 0.25)">
                    <a href={portfolio.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">
                      <Globe className="w-4 h-4" />
                      {portfolio.name}
                    </a>
                  </SpotlightBorder>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SKILLS CAROUSEL & CATEGORIES */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-10">
            <Code2 className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
            <h3 className="text-2xl font-bold tracking-tight">Tech Stack</h3>
          </div>
          
          <div className="relative py-4 -mx-6 sm:mx-0 mask-image-fade mb-12">
            <InfiniteCarousel pauseOnHover>
              {skillsCarousel.map((skill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-center px-6 py-3 bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 shadow-sm rounded-xl transition-colors whitespace-nowrap font-medium tracking-wide text-sm"
                >
                  {skill}
                </div>
              ))}
            </InfiniteCarousel>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedSkills.map((category, idx) => (
              <motion.div key={idx} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:border-white/10 transition-all">
                  <h4 className="text-zinc-500 dark:text-zinc-400 font-bold mb-4 text-xs tracking-wider uppercase">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1.5 bg-zinc-100 dark:bg-[#171717] rounded-lg text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-white/5">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <Briefcase className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
            <h3 className="text-2xl font-bold tracking-tight">Experience</h3>
          </motion.div>

          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 flex flex-col gap-12">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute left-[-5px] sm:left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-zinc-50 dark:ring-[#050505]"></div>
                
                <SpotlightBorder className="bg-white dark:bg-[#0a0a0a] shadow-sm rounded-2xl border border-zinc-200/50 dark:border-white/5 hover:shadow-lg hover:shadow-zinc-500/5 dark:hover:shadow-white/5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group" spotlightColor="rgba(161, 161, 170, 0.15)">
                  <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="sm:w-1/3 shrink-0">
                      <p className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wider">{job.date}</p>
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 group cursor-default">
                        {job.company}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium mt-1">{job.role}</p>
                    </div>
                    <div className="sm:w-2/3">
                      <ul className="space-y-4">
                        {job.description.map((desc, i) => (
                          <li key={i} className="text-zinc-700 dark:text-zinc-300 leading-relaxed flex gap-3 text-sm sm:text-base">
                            <span className="text-zinc-400 dark:text-zinc-600 mt-1.5">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightBorder>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <FolderGit2 className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
            <h3 className="text-2xl font-bold tracking-tight">Featured Projects</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="h-full group"
              >
                <SpotlightBorder className="bg-white dark:bg-[#0a0a0a] shadow-sm rounded-2xl h-full border border-zinc-200/50 dark:border-white/5 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-500/20 dark:hover:border-emerald-500/30 transition-all duration-300" spotlightColor="rgba(16, 185, 129, 0.1)">
                  <div className="p-8 h-full flex flex-col group">
                    <a href={project.href} target={project.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <FolderGit2 className="w-8 h-8 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" />
                        <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-0 -translate-y-2 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-zinc-900 dark:group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 text-sm flex-grow">
                        {project.description}
                      </p>
                    </a>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-100 dark:border-white/5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-300 rounded-md font-semibold tracking-wide uppercase border border-zinc-200/50 dark:border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightBorder>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS & BLOGS (2 COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* CERTIFICATIONS */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Award className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
              <h3 className="text-2xl font-bold tracking-tight">Certifications</h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {certificationsData.map((cert, index) => (
                <motion.div key={index} whileHover={{ x: 4, scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                  <SpotlightBorder className="bg-white dark:bg-[#0a0a0a] shadow-sm rounded-xl hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 border border-zinc-200/50 dark:border-white/5 transition-all duration-300" spotlightColor="rgba(161, 161, 170, 0.15)">
                    <a href={cert.url} target="_blank" rel="noreferrer" className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                          {cert.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                        </h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{cert.organization}</p>
                      </div>
                      <span className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 px-3 py-1 bg-zinc-100 dark:bg-white/5 rounded-full shrink-0 w-fit">{cert.date}</span>
                    </a>
                  </SpotlightBorder>
                </motion.div>
              ))}
            </div>
          </section>

          {/* BLOGS */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <PenTool className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
              <h3 className="text-2xl font-bold tracking-tight">Latest Writing</h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {blogsData.map((blog, index) => (
                <motion.div key={index} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <SpotlightBorder className="bg-white dark:bg-[#0a0a0a] shadow-sm rounded-xl" spotlightColor="rgba(161, 161, 170, 0.15)">
                    <a href={blog.url} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                      <h4 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors line-clamp-2 flex items-center gap-2">
                        {blog.title}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 shrink-0" />
                      </h4>
                      <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 shrink-0">{blog.date}</span>
                    </a>
                  </SpotlightBorder>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* EDUCATION SECTION */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <GraduationCap className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
            <h3 className="text-2xl font-bold tracking-tight">Education</h3>
          </motion.div>

          <div className="flex flex-col gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <SpotlightBorder className="bg-white dark:bg-[#0a0a0a] shadow-sm rounded-2xl" spotlightColor="rgba(161, 161, 170, 0.15)">
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{edu.school}</h4>
                      <span className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5">{edu.date}</span>
                    </div>
                    <p className="text-base text-zinc-700 dark:text-zinc-300 font-medium mb-3">{edu.degree}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">{edu.description}</p>
                  </div>
                </SpotlightBorder>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col md:flex-row justify-between gap-12 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-col gap-4 max-w-xs">
            <span className="font-extrabold text-2xl tracking-tighter text-zinc-900 dark:text-white">SB.</span>
            <p className="leading-relaxed mt-2 text-zinc-600 dark:text-zinc-400">
              Building resilient cloud infrastructure and intelligent automation systems. Designing for scale, shipping for impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-wide uppercase text-xs">Connect</h5>
              <a href={socialsData[0].href} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2">LinkedIn <ArrowUpRight className="w-3 h-3" /></a>
              <a href={socialsData[1].href} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2">GitHub <ArrowUpRight className="w-3 h-3" /></a>
              <a href={`mailto:${personalData.email}`} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2">Email <ArrowUpRight className="w-3 h-3" /></a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-wide uppercase text-xs">Portfolios</h5>
              {portfoliosData.map((p, idx) => (
                <a key={idx} href={p.href} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2">
                  {p.name} <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-200/50 dark:border-white/5">
          <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
            <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .mask-image-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </main>
  )
}
