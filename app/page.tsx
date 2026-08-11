"use client"

import { personalData, experienceData, educationData, skillsCarousel, detailedSkills, projectsData, certificationsData, blogsData, socialsData, portfoliosData } from '@/data/profile'
import { Meteors } from '@/components/ui/Meteors'
import { DynamicGridPattern } from '@/components/ui/DynamicGridPattern'
import { SpotlightBorder } from '@/components/ui/SpotlightBorder'
import { InfiniteCarousel } from '@/components/ui/InfiniteCarousel'
import { motion } from 'framer-motion'
import { Mail, Terminal, Briefcase, GraduationCap, Code2, ArrowUpRight, FolderGit2, Award, PenTool, Linkedin, Github, Globe, FileDown } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-black selection:bg-black/10 dark:bg-black dark:text-white dark:selection:bg-white/10">
      <DynamicGridPattern className="pointer-events-none fixed inset-0 opacity-10 dark:opacity-15" />
      
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-zinc-200/50 bg-white/60 backdrop-blur-xl transition-colors dark:border-white/5 dark:bg-black/60">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
          <span className="text-xl font-extrabold tracking-tighter text-zinc-900 dark:text-white">SB.</span>
          <div className="flex items-center gap-4 sm:gap-6">
            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-32 sm:pb-32 sm:pt-40">
        
        {/* HERO SECTION */}
        <section className="relative mb-32 flex flex-col items-start justify-center">
          <Meteors number={20} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 w-full"
          >
            <div className="mb-4 flex flex-wrap items-center gap-4 sm:gap-8">
              <h1 className="bg-gradient-to-br from-black to-zinc-500 bg-clip-text pb-1 text-5xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-zinc-500 sm:text-7xl">
                {personalData.name}
              </h1>
              <a 
                href="/Sahil_Bansal_Resume.pdf" 
                download 
                className="flex h-fit items-center gap-2 rounded-lg bg-emerald-600 px-4 py-1.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(5,150,105,0.4)] transition-all hover:scale-105 hover:bg-emerald-700 active:scale-95"
              >
                <FileDown className="size-4" />
                PDF
              </a>
            </div>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <h2 className="flex items-center gap-3 text-xl font-semibold text-zinc-600 dark:text-zinc-400 sm:text-3xl">
                <span className="font-mono font-bold tracking-tighter text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">{`>_`}</span>
                {personalData.title}
              </h2>
              <div className="hidden w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 sm:flex">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
                </span>
                Open to Work
              </div>
            </div>
            
            <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
              <strong className="font-medium text-zinc-900 dark:text-zinc-100">{personalData.headline}</strong> <br className="hidden sm:block" />
              {personalData.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <SpotlightBorder className="w-fit rounded-xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-white/5 dark:bg-white/5 dark:hover:border-zinc-700" spotlightColor="rgba(161, 161, 170, 0.25)">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="flex items-center gap-2 px-6 py-3 font-semibold text-zinc-900 transition-colors dark:text-zinc-100"
                  >
                    <Mail className="size-4" />
                    Let&apos;s Connect
                  </a>
                </SpotlightBorder>
              </motion.div>
              
              {socialsData.map((social, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <SpotlightBorder className="w-fit rounded-xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-white/5 dark:bg-white/5 dark:hover:border-zinc-700" spotlightColor="rgba(161, 161, 170, 0.25)">
                    <a href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 font-semibold text-zinc-900 transition-colors dark:text-zinc-100">
                      {social.icon === 'linkedin' && <Linkedin className="size-4" />}
                      {social.icon === 'github' && <Github className="size-4" />}
                      {social.name}
                    </a>
                  </SpotlightBorder>
                </motion.div>
              ))}

              {portfoliosData.map((portfolio, idx) => (
                <motion.div key={`port-${idx}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <SpotlightBorder className="w-fit rounded-xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-white/5 dark:bg-white/5 dark:hover:border-zinc-700" spotlightColor="rgba(161, 161, 170, 0.25)">
                    <a href={portfolio.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 font-semibold text-zinc-900 transition-colors dark:text-zinc-100">
                      <Globe className="size-4" />
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
          <div className="mb-10 flex items-center gap-3">
            <Code2 className="size-6 text-zinc-800 dark:text-zinc-200" />
            <h3 className="text-2xl font-bold tracking-tight">Tech Stack</h3>
          </div>
          
          <div className="mask-image-fade relative -mx-6 mb-12 py-4 sm:mx-0">
            <InfiniteCarousel pauseOnHover>
              {skillsCarousel.map((skill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-center whitespace-nowrap rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium tracking-wide shadow-sm transition-colors dark:border-white/5 dark:bg-[#0a0a0a]"
                >
                  {skill}
                </div>
              ))}
            </InfiniteCarousel>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detailedSkills.map((category, idx) => (
              <motion.div key={idx} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/5 dark:bg-[#0a0a0a] dark:hover:border-white/10">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="rounded-lg border border-zinc-200/50 bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-800 dark:border-white/5 dark:bg-[#171717] dark:text-zinc-200">{skill}</span>
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
            className="mb-12 flex items-center gap-3"
          >
            <Briefcase className="size-6 text-zinc-800 dark:text-zinc-200" />
            <h3 className="text-2xl font-bold tracking-tight">Experience</h3>
          </motion.div>

          <div className="relative ml-4 flex flex-col gap-12 border-l border-zinc-200 dark:border-zinc-800 sm:ml-6">
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
                <div className="absolute left-[-5px] top-6 size-2.5 rounded-full bg-zinc-300 ring-4 ring-zinc-50 dark:bg-zinc-700 dark:ring-[#050505] sm:left-[-5px]"></div>
                
                <SpotlightBorder className="group rounded-2xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-500/5 dark:border-white/5 dark:bg-[#0a0a0a] dark:hover:border-zinc-700 dark:hover:shadow-white/5" spotlightColor="rgba(161, 161, 170, 0.15)">
                  <div className="flex flex-col gap-6 p-8 sm:flex-row sm:gap-12 sm:p-10">
                    <div className="shrink-0 sm:w-1/3">
                      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{job.date}</p>
                      <h4 className="group flex cursor-default items-center gap-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {job.companyUrl ? (
                          <a 
                            href={job.companyUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-2 transition-colors hover:text-emerald-500"
                          >
                            {job.company}
                            <ArrowUpRight className="size-4 -translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                          </a>
                        ) : (
                          job.company
                        )}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">{job.role}</p>
                    </div>
                    <div className="sm:w-2/3">
                      <ul className="space-y-4">
                        {job.description.map((desc, i) => (
                          <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
                            <span className="mt-1.5 text-zinc-400 dark:text-zinc-600">•</span>
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
            className="mb-12 flex items-center gap-3"
          >
            <FolderGit2 className="size-6 text-zinc-800 dark:text-zinc-200" />
            <h3 className="text-2xl font-bold tracking-tight">Featured Projects</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group h-full"
              >
                <SpotlightBorder className="h-full rounded-2xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5 dark:border-white/5 dark:bg-[#0a0a0a] dark:hover:border-emerald-500/30" spotlightColor="rgba(16, 185, 129, 0.1)">
                  <div className="group flex h-full flex-col p-8">
                    <a href={project.href} target={project.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="flex flex-grow flex-col">
                      <div className="mb-4 flex items-center justify-between">
                        <FolderGit2 className="size-8 text-zinc-400 transition-colors group-hover:text-zinc-900 dark:text-zinc-600 dark:group-hover:text-zinc-300" />
                        <ArrowUpRight className="size-5 -translate-y-2 translate-x-2 text-zinc-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-zinc-900 group-hover:opacity-100 dark:group-hover:text-white" />
                      </div>
                      <h4 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                        {project.name}
                      </h4>
                      <p className="mb-6 flex-grow text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                    </a>
                    <div className="mt-auto flex flex-wrap gap-2 border-t border-zinc-100 pt-4 dark:border-white/5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="rounded-md border border-zinc-200/50 bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-800 dark:border-white/5 dark:bg-zinc-800/50 dark:text-zinc-300">
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
        <div className="mb-32 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* CERTIFICATIONS */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3"
            >
              <Award className="size-6 text-zinc-800 dark:text-zinc-200" />
              <h3 className="text-2xl font-bold tracking-tight">Certifications</h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {certificationsData.map((cert, index) => (
                <motion.div key={index} whileHover={{ x: 4, scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                  <SpotlightBorder className="rounded-xl border border-zinc-200/50 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-white/5 dark:bg-[#0a0a0a] dark:hover:border-zinc-700" spotlightColor="rgba(161, 161, 170, 0.15)">
                    <a href={cert.url} target="_blank" rel="noreferrer" className="group flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                          {cert.name}
                          <ArrowUpRight className="size-3 -translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                        </h4>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{cert.organization}</p>
                      </div>
                      <span className="w-fit shrink-0 rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs font-medium text-zinc-600 dark:bg-white/5 dark:text-zinc-400">{cert.date}</span>
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
              className="mb-8 flex items-center gap-3"
            >
              <PenTool className="size-6 text-zinc-800 dark:text-zinc-200" />
              <h3 className="text-2xl font-bold tracking-tight">Latest Writing</h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {blogsData.map((blog, index) => (
                <motion.div key={index} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <SpotlightBorder className="rounded-xl bg-white shadow-sm dark:bg-[#0a0a0a]" spotlightColor="rgba(161, 161, 170, 0.15)">
                    <a href={blog.url} className="group flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
                      <h4 className="line-clamp-2 flex items-center gap-2 font-bold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                        {blog.title}
                        <ArrowUpRight className="size-3 shrink-0 -translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                      </h4>
                      <span className="shrink-0 font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">{blog.date}</span>
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
            className="mb-12 flex items-center gap-3"
          >
            <GraduationCap className="size-6 text-zinc-800 dark:text-zinc-200" />
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
                <SpotlightBorder className="rounded-2xl bg-white shadow-sm dark:bg-[#0a0a0a]" spotlightColor="rgba(161, 161, 170, 0.15)">
                  <div className="p-8 sm:p-10">
                    <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{edu.school}</h4>
                      <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:border-white/5 dark:bg-white/5 dark:text-zinc-400">{edu.date}</span>
                    </div>
                    <p className="mb-3 text-base font-medium text-zinc-700 dark:text-zinc-300">{edu.degree}</p>
                    <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{edu.description}</p>
                  </div>
                </SpotlightBorder>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-white/5 dark:bg-black/50">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-12 px-6 py-16 text-sm text-zinc-500 dark:text-zinc-400 md:flex-row">
          <div className="flex max-w-xs flex-col gap-4">
            <span className="text-2xl font-extrabold tracking-tighter text-zinc-900 dark:text-white">SB.</span>
            <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Building resilient cloud infrastructure and intelligent automation systems. Designing for scale, shipping for impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div className="flex flex-col gap-4">
              <h5 className="text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">Connect</h5>
              <a href={socialsData[0].href} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">LinkedIn <ArrowUpRight className="size-3" /></a>
              <a href={socialsData[1].href} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">GitHub <ArrowUpRight className="size-3" /></a>
              <a href={`mailto:${personalData.email}`} className="flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">Email <ArrowUpRight className="size-3" /></a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">Portfolios</h5>
              {portfoliosData.map((p, idx) => (
                <a key={idx} href={p.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                  {p.name} <ArrowUpRight className="size-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-200/50 dark:border-white/5">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 p-6 font-mono text-xs sm:flex-row">
            <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 font-medium">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
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
