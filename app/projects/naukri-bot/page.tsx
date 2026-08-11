import { ModeToggle } from '@/components/mode-toggle'
import { ArrowLeft, Clock, Calendar, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NaukriBotProject() {
  return (
    <main className="relative min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-200 dark:bg-[#050505] dark:text-zinc-100 dark:selection:bg-white/10">
      <div className="absolute right-6 top-6 z-50">
        <ModeToggle />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link href="/" className="mb-16 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
        
        <article className="max-w-none">
          <div className="mb-8 flex items-center gap-4">
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Automation
            </span>
            <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
              Python
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Naukri Automation Bot
          </h1>
          
          <p className="mb-12 text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
            100% automated profile updates bypassing OTPs with session reuse. Zero cold starts on Render free tier.
          </p>

          {/* Quick Metrics / Summary */}
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Before</h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">Manual daily logins & uploads</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">After</h3>
              <p className="font-medium text-emerald-600 dark:text-emerald-400">Fully automated 2x daily uploads</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Authentication</h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">Session Cookies (OTP Bypass)</p>
            </div>
          </div>

          <div className="mb-16 h-px w-full bg-zinc-200 dark:bg-white/10"></div>

          {/* Core Content */}
          <div className="space-y-16">
            
            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">The Problem</h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Keeping a Naukri profile active and visible to recruiters requires daily manual resume uploads. It&apos;s an easy-to-forget, repetitive task. Previous automation attempts failed due to frequent OTP challenges and bot detection mechanisms on the platform.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">The Solution</h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Developed an automated Python bot that runs 24/7 on Render&apos;s free tier. It performs headless browser automation to update the resume on a scheduled basis, effectively bypassing bot detection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-emerald-500" />
                  <span className="text-zinc-700 dark:text-zinc-300"><strong>Session Persistence:</strong> Exported established session cookies to an environment variable, completely bypassing future login screens and OTP prompts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-emerald-500" />
                  <span className="text-zinc-700 dark:text-zinc-300"><strong>Always-On Mechanism:</strong> Combined a background HTTP server and an external cron job ping to prevent the free Render instance from sleeping.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">Architecture</h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                The system consists of a Python headless browser navigating the site and a background HTTP daemon keeping the container alive.
              </p>
              
              <div className="overflow-x-auto rounded-3xl border border-zinc-200 bg-zinc-100 p-8 font-mono text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="rounded border border-zinc-300 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-black">cron-job.org</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded border border-zinc-300 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-black">HTTP Daemon</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400">Render Free Tier</span>
                  </div>
                  <div className="flex items-center gap-4 pl-48">
                    <ArrowRight className="size-4 rotate-90" />
                  </div>
                  <div className="flex items-center gap-4 pl-44">
                    <span className="rounded border border-zinc-300 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-black">Headless Browser</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded border border-zinc-300 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-black">Restore Cookies</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded border border-blue-200 bg-blue-50 px-4 py-2 text-blue-700 shadow-sm dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400">Upload Resume</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">Key Incidents & Learnings</h2>
              
              <div className="space-y-6">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/[0.02]">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    <div className="size-2 rounded-full bg-red-500"></div>
                    OOM (Out-Of-Memory) Crashes
                  </h3>
                  <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                    <strong>Issue:</strong> Chrome WebDriver crashing on Render&apos;s 512MB RAM cap.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong>Resolution:</strong> Configured memory-saving Chrome flags and added exponential backoff on transient failures. Headless browsers are highly memory-intensive—catching driver exceptions gracefully is critical in constrained cloud instances.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/[0.02]">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    <div className="size-2 rounded-full bg-orange-500"></div>
                    Unexpected OTP Prompts
                  </h3>
                  <p className="mb-4 text-zinc-700 dark:text-zinc-300">
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
