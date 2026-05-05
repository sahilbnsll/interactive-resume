"use client"

import { personalData, experienceData, educationData, skillsCarousel, detailedSkills, projectsData, certificationsData, blogsData, socialsData } from '@/data/profile'
import { Meteors } from '@/components/ui/Meteors'
import { DynamicGridPattern } from '@/components/ui/DynamicGridPattern'
import { SpotlightBorder } from '@/components/ui/SpotlightBorder'
import { InfiniteCarousel } from '@/components/ui/InfiniteCarousel'
import { motion } from 'framer-motion'
import { Mail, Terminal, Briefcase, GraduationCap, Code2, ArrowUpRight, FolderGit2, Award, PenTool, Linkedin, Github } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden font-sans">
      <DynamicGridPattern className="opacity-30 dark:opacity-20 fixed inset-0 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 sm:py-32">
        
        {/* HERO SECTION */}
        <section className="relative mb-32 flex flex-col items-start justify-center">
          <Meteors number={15} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50">
              {personalData.name}
            </h1>
            <h2 className="text-xl sm:text-3xl font-medium text-white/70 mb-8 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-emerald-400" />
              {personalData.title}
            </h2>
            
            <p className="text-lg sm:text-xl max-w-2xl text-white/60 mb-10 leading-relaxed font-light">
              <strong className="text-white font-medium">{personalData.headline}</strong> <br className="hidden sm:block" />
              {personalData.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <SpotlightBorder className="rounded-full w-fit bg-white/5" spotlightColor="rgba(16, 185, 129, 0.4)">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors hover:text-emerald-400"
                >
                  <Mail className="w-5 h-5" />
                  Let's Connect
                </a>
              </SpotlightBorder>
              
              <div className="flex items-center gap-2">
                {socialsData.filter(s => s.name !== "Email").map((social, idx) => (
                  <SpotlightBorder key={idx} className="rounded-full w-12 h-12 flex items-center justify-center bg-white/5" spotlightColor="rgba(255, 255, 255, 0.4)">
                    <a href={social.href} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-full text-white/80 hover:text-white transition-colors">
                      {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                      {social.icon === 'github' && <Github className="w-5 h-5" />}
                    </a>
                  </SpotlightBorder>
                ))}
              </div>
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
            <Code2 className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold">Tech Stack</h3>
          </div>
          
          <div className="relative py-4 -mx-6 sm:mx-0 mask-image-fade mb-12">
            <InfiniteCarousel pauseOnHover>
              {skillsCarousel.map((skill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors whitespace-nowrap font-medium tracking-wide"
                >
                  {skill}
                </div>
              ))}
            </InfiniteCarousel>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedSkills.map((category, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white/80 font-semibold mb-3 text-sm tracking-wide uppercase">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-white/5 rounded-md text-white/70">{skill}</span>
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
            <Briefcase className="w-6 h-6 text-purple-400" />
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
                <SpotlightBorder className="bg-white/[0.02]" spotlightColor="rgba(168, 85, 247, 0.3)">
                  <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="sm:w-1/3 shrink-0">
                      <p className="text-sm font-mono text-purple-400/80 mb-2">{job.date}</p>
                      <h4 className="text-xl font-bold text-white flex items-center gap-2 group cursor-default">
                        {job.company}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                      </h4>
                      <p className="text-white/60 font-medium mt-1">{job.role}</p>
                    </div>
                    <div className="sm:w-2/3">
                      <ul className="space-y-4">
                        {job.description.map((desc, i) => (
                          <li key={i} className="text-white/70 leading-relaxed flex gap-3">
                            <span className="text-purple-400/50 mt-1.5">•</span>
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
            <FolderGit2 className="w-6 h-6 text-rose-400" />
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
                <SpotlightBorder className="bg-white/[0.02] h-full" spotlightColor="rgba(244, 63, 94, 0.3)">
                  <div className="p-8 h-full flex flex-col">
                    <a href={project.href} target="_blank" rel="noreferrer" className="group">
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2 group-hover:text-rose-400 transition-colors">
                        {project.name}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                      </h4>
                    </a>
                    <p className="text-white/60 leading-relaxed mb-6 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-rose-400/10 text-rose-300 rounded-full font-mono">
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
              <Award className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {certificationsData.map((cert, index) => (
                <SpotlightBorder key={index} className="bg-white/[0.02]" spotlightColor="rgba(34, 211, 238, 0.3)">
                  <a href={cert.url} target="_blank" rel="noreferrer" className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{cert.name}</h4>
                      <p className="text-white/60 text-sm mt-1">{cert.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-cyan-400/80 px-3 py-1 bg-cyan-400/10 rounded-full shrink-0 w-fit">{cert.date}</span>
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
              <PenTool className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold">Latest Writing</h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {blogsData.map((blog, index) => (
                <SpotlightBorder key={index} className="bg-white/[0.02]" spotlightColor="rgba(74, 222, 128, 0.3)">
                  <a href={blog.url} target="_blank" rel="noreferrer" className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <h4 className="font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2">{blog.title}</h4>
                    <span className="text-xs font-mono text-green-400/80 shrink-0">{blog.date}</span>
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
            <GraduationCap className="w-6 h-6 text-amber-400" />
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
                <SpotlightBorder className="bg-white/[0.02]" spotlightColor="rgba(251, 191, 36, 0.3)">
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                      <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                      <span className="text-sm font-mono text-amber-400/80 px-3 py-1 rounded-full bg-amber-400/10">{edu.date}</span>
                    </div>
                    <p className="text-lg text-white/80 font-medium mb-3">{edu.degree}</p>
                    <p className="text-white/60 leading-relaxed max-w-3xl">{edu.description}</p>
                  </div>
                </SpotlightBorder>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      <style jsx global>{`
        .mask-image-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </main>
  )
}
