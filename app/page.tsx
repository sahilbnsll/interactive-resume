"use client"

import { personalData, experienceData, educationData, skillsCarousel, detailedSkills, projectsData, certificationsData, blogsData, socialsData, portfoliosData } from '@/data/profile'
import { Meteors } from '@/components/ui/Meteors'
import { DynamicGridPattern } from '@/components/ui/DynamicGridPattern'
import { SpotlightBorder } from '@/components/ui/SpotlightBorder'
import { InfiniteCarousel } from '@/components/ui/InfiniteCarousel'
import { motion } from 'framer-motion'
import { Mail, Terminal, Briefcase, GraduationCap, Code2, ArrowUpRight, FolderGit2, Award, PenTool, Linkedin, Github, Globe, Link2 } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-black/10 dark:selection:bg-white/10 overflow-hidden font-sans">
      <DynamicGridPattern className="opacity-10 dark:opacity-[0.15] fixed inset-0 pointer-events-none" />
      
      <div className="absolute top-6 right-6 z-50">
        <ModeToggle />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-32">
        
        {/* HERO SECTION */}
        <section className="relative mb-32 flex flex-col items-start justify-center">
          <Meteors number={15} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 w-full"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-black to-black/50 dark:from-white dark:to-white/50">
              {personalData.name}
            </h1>
            <h2 className="text-xl sm:text-3xl font-medium text-zinc-600 dark:text-zinc-400 mb-8 flex items-center gap-3">
              <Terminal className="w-6 h-6" />
              {personalData.title}
            </h2>
            
            <p className="text-lg sm:text-xl max-w-2xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed font-light">
              <strong className="text-black dark:text-white font-medium">{personalData.headline}</strong> <br className="hidden sm:block" />
              {personalData.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <SpotlightBorder className="rounded-xl w-fit bg-zinc-100 dark:bg-white/5" spotlightColor="rgba(161, 161, 170, 0.2)">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-2 px-6 py-3 font-medium text-zinc-900 dark:text-zinc-100 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </a>
              </SpotlightBorder>
              
              {socialsData.map((social, idx) => (
                <SpotlightBorder key={idx} className="rounded-xl w-fit bg-zinc-100 dark:bg-white/5" spotlightColor="rgba(161, 161, 170, 0.2)">
                  <a href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 font-medium text-zinc-900 dark:text-zinc-100 transition-colors">
                    {social.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
                    {social.icon === 'github' && <Github className="w-4 h-4" />}
                    {social.name}
                  </a>
                </SpotlightBorder>
              ))}

              {portfoliosData.map((portfolio, idx) => (
                <SpotlightBorder key={`port-${idx}`} className="rounded-xl w-fit bg-zinc-100 dark:bg-white/5" spotlightColor="rgba(161, 161, 170, 0.2)">
                  <a href={portfolio.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 font-medium text-zinc-900 dark:text-zinc-100 transition-colors">
                    <Globe className="w-4 h-4" />
                    {portfolio.name}
                  </a>
                </SpotlightBorder>
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
            <h3 className="text-2xl font-bold">Tech Stack</h3>
          </div>
          
          <div className="relative py-4 -mx-6 sm:mx-0 mask-image-fade mb-12">
            <InfiniteCarousel pauseOnHover>
              {skillsCarousel.map((skill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-center px-6 py-3 bg-zinc-100 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 rounded-xl transition-colors whitespace-nowrap font-medium tracking-wide text-sm"
                >
                  {skill}
                </div>
              ))}
            </InfiniteCarousel>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedSkills.map((category, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors">
                <h4 className="text-zinc-500 dark:text-zinc-400 font-bold mb-4 text-xs tracking-wider uppercase">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1.5 bg-zinc-200 dark:bg-[#171717] rounded-lg text-zinc-700 dark:text-zinc-300 border border-zinc-300/50 dark:border-white/5">{skill}</span>
                  ))}
                </div>
              </div>
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
            <h3 className="text-2xl font-bold">Experience</h3>
          </motion.div>

          <div className="flex flex-col gap-8">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightBorder className="bg-zinc-50 dark:bg-[#0a0a0a]" spotlightColor="rgba(161, 161, 170, 0.2)">
                  <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="sm:w-1/3 shrink-0">
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">{job.date}</p>
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
            <h3 className="text-2xl font-bold">Featured Projects</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <SpotlightBorder className="bg-zinc-50 dark:bg-[#0a0a0a] h-full" spotlightColor="rgba(161, 161, 170, 0.2)">
                  <div className="p-8 h-full flex flex-col">
                    <a href={project.href} target="_blank" rel="noreferrer" className="group">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                        {project.name}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                      </h4>
                    </a>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 text-sm flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-zinc-200 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded-md font-medium border border-zinc-300 dark:border-white/5">
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
              <h3 className="text-2xl font-bold">Certifications</h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {certificationsData.map((cert, index) => (
                <SpotlightBorder key={index} className="bg-zinc-50 dark:bg-[#0a0a0a]" spotlightColor="rgba(161, 161, 170, 0.2)">
                  <a href={cert.url} target="_blank" rel="noreferrer" className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">{cert.name}</h4>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{cert.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 px-3 py-1 bg-zinc-200 dark:bg-white/5 rounded-full shrink-0 w-fit">{cert.date}</span>
                  </a>
                </SpotlightBorder>
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
              <h3 className="text-2xl font-bold">Latest Writing</h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {blogsData.map((blog, index) => (
                <SpotlightBorder key={index} className="bg-zinc-50 dark:bg-[#0a0a0a]" spotlightColor="rgba(161, 161, 170, 0.2)">
                  <a href={blog.url} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors line-clamp-2">{blog.title}</h4>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">{blog.date}</span>
                  </a>
                </SpotlightBorder>
              ))}
            </div>
          </section>
        </div>

        {/* EDUCATION SECTION */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <GraduationCap className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
            <h3 className="text-2xl font-bold">Education</h3>
          </motion.div>

          <div className="flex flex-col gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SpotlightBorder className="bg-zinc-50 dark:bg-[#0a0a0a]" spotlightColor="rgba(161, 161, 170, 0.2)">
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{edu.school}</h4>
                      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/5">{edu.date}</span>
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
      <footer className="border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="flex items-center gap-2">
              © {new Date().getFullYear()} {personalData.name} <span className="hidden sm:inline">|</span> <a href="#" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">privacy?</a>
            </p>
            <div className="hidden sm:flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                All Systems Operational
              </span>
              <span>•</span>
              <span>Uptime 99.99%</span>
              <span>•</span>
              <span>Edge: Vercel BOM1</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href={socialsData[0].href} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"/></a>
            <a href={socialsData[1].href} target="_blank" rel="noreferrer"><Github className="w-4 h-4 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"/></a>
            <a href={`mailto:${personalData.email}`}><Mail className="w-4 h-4 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"/></a>
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
