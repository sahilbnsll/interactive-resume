import { ModeToggle } from '@/components/mode-toggle'
import { ArrowLeft, Clock, Calendar, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NaukriBotProject() {
  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-white/10 font-sans">
      <div className="absolute top-6 right-6 z-50">
        <ModeToggle />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-16 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <article className="max-w-none">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">
              Automation
            </span>
            <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 rounded-full border border-zinc-200 dark:border-white/10">
              Python
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Naukri Automation Bot
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-12">
            100% automated profile updates bypassing OTPs with session reuse. Zero cold starts on Render free tier.
          </p>

          {/* Quick Metrics / Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wider">Before</h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">Manual daily logins & uploads</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wider">After</h3>
              <p className="font-medium text-emerald-600 dark:text-emerald-400">Fully automated 2x daily uploads</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wider">Authentication</h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">Session Cookies (OTP Bypass)</p>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-200 dark:bg-white/10 mb-16"></div>

          {/* Core Content */}
          <div className="space-y-16">
            
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">The Problem</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Keeping a Naukri profile active and visible to recruiters requires daily manual resume uploads. It's an easy-to-forget, repetitive task. Previous automation attempts failed due to frequent OTP challenges and bot detection mechanisms on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">The Solution</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                Developed an automated Python bot that runs 24/7 on Render's free tier. It performs headless browser automation to update the resume on a scheduled basis, effectively bypassing bot detection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-700 dark:text-zinc-300"><strong>Session Persistence:</strong> Exported established session cookies to an environment variable, completely bypassing future login screens and OTP prompts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-700 dark:text-zinc-300"><strong>Always-On Mechanism:</strong> Combined a background HTTP server and an external cron job ping to prevent the free Render instance from sleeping.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Architecture</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
                The system consists of a Python headless browser navigating the site and a background HTTP daemon keeping the container alive.
              </p>
              
              <div className="p-8 rounded-3xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 font-mono text-sm overflow-x-auto text-zinc-600 dark:text-zinc-400">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-white dark:bg-black rounded border border-zinc-300 dark:border-zinc-700 shadow-sm">cron-job.org</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="px-4 py-2 bg-white dark:bg-black rounded border border-zinc-300 dark:border-zinc-700 shadow-sm">HTTP Daemon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800 shadow-sm">Render Free Tier</span>
                  </div>
                  <div className="pl-48 flex items-center gap-4">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                  <div className="pl-44 flex items-center gap-4">
                    <span className="px-4 py-2 bg-white dark:bg-black rounded border border-zinc-300 dark:border-zinc-700 shadow-sm">Headless Browser</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="px-4 py-2 bg-white dark:bg-black rounded border border-zinc-300 dark:border-zinc-700 shadow-sm">Restore Cookies</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded border border-blue-200 dark:border-blue-800 shadow-sm">Upload Resume</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Key Incidents & Learnings</h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5">
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    OOM (Out-Of-Memory) Crashes
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    <strong>Issue:</strong> Chrome WebDriver crashing on Render's 512MB RAM cap.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong>Resolution:</strong> Configured memory-saving Chrome flags and added exponential backoff on transient failures. Headless browsers are highly memory-intensive—catching driver exceptions gracefully is critical in constrained cloud instances.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5">
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    Unexpected OTP Prompts
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    <strong>Issue:</strong> Job uploads failing due to automated browser detection.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong>Resolution:</strong> Engineered session extraction and base64 cookie injection. Repeated automated logins inevitably face bot detection—session persistence is mandatory for reliable long-term headless tasks.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>
      </div>
    </main>
  )
}
