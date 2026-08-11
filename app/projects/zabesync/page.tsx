import { ModeToggle } from '@/components/mode-toggle'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ZabesyncProject() {
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
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              AI Pipeline
            </span>
            <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
              n8n & Supabase
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            LinkedIn Content Automation
          </h1>
          
          <p className="mb-12 text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
            Reducing content cycle from hours to seconds with Multi-API orchestration and stateful deduplication.
          </p>

          {/* Quick Metrics / Summary */}
          <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Speed</h3>
              <p className="font-medium text-emerald-600 dark:text-emerald-400">Hours → Seconds</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Quality</h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">Zero duplicate topics</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Integrations</h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">5-API Orchestration</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Control</h3>
              <p className="font-medium text-blue-600 dark:text-blue-400">Discord Interface</p>
            </div>
          </div>

          <div className="mb-16 h-px w-full bg-zinc-200 dark:bg-white/10"></div>

          {/* Core Content */}
          <div className="space-y-16">
            
            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">The Problem</h2>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                LinkedIn content creation is time-intensive, repetitive, and often lacks real-time relevance, reducing posting consistency. Previously, it required manual context-switching across tools, ad-hoc notes, and repetitive tasks to get a post out.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">The Solution</h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Built an AI-driven n8n automation pipeline with live research, LLM-based generation, and Discord-triggered workflows with Supabase state management. It provides end-to-end automation from research and ideation to drafted posts and one-click publish.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-blue-500" />
                  <span className="text-zinc-700 dark:text-zinc-300"><strong>n8n over custom code:</strong> Allowed iterating on LLM prompts and API integrations rapidly without code deployments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-blue-500" />
                  <span className="text-zinc-700 dark:text-zinc-300"><strong>Discord as a control plane:</strong> Made Discord the single interface for triggering, reviewing, and publishing. Minimal context switching.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">Architecture</h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Three interconnected workflows handle ideation → drafting → publishing with LLM reasoning.
              </p>
              
              <div className="overflow-x-auto rounded-3xl border border-zinc-200 bg-zinc-100 p-8 font-mono text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                <div className="flex gap-12">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-800 dark:text-zinc-200">1. Trigger</span>
                    <span className="rounded border border-indigo-200 bg-indigo-50 px-4 py-2 text-indigo-700 shadow-sm dark:border-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-400">Discord Interface</span>
                  </div>
                  <div className="flex flex-col justify-center"><ArrowRight className="size-4" /></div>
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-800 dark:text-zinc-200">2. Automation</span>
                    <span className="rounded border border-zinc-300 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-black">n8n on EC2</span>
                    <span className="rounded border border-zinc-300 bg-white px-4 py-2 shadow-sm dark:border-zinc-700 dark:bg-black">Gemini LLM</span>
                  </div>
                  <div className="flex flex-col justify-center"><ArrowRight className="size-4" /></div>
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-800 dark:text-zinc-200">3. Data</span>
                    <span className="rounded border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400">Supabase State</span>
                  </div>
                  <div className="flex flex-col justify-center"><ArrowRight className="size-4" /></div>
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-800 dark:text-zinc-200">4. Outbound</span>
                    <span className="rounded border border-blue-200 bg-blue-50 px-4 py-2 text-blue-700 shadow-sm dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400">LinkedIn API</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">Key Incidents & Learnings</h2>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/[0.02]">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">API Rate Limiting</h3>
                  <p className="mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Issue:</strong> Web search API rate limiting and free tier limits causing workflow failures.
                  </p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Resolution:</strong> Implemented multi-AI fallback mechanisms, cached research results, and batched searches. Prompt engineering was also optimized to reduce token usage.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/[0.02]">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">Webhook Connectivity</h3>
                  <p className="mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Issue:</strong> Discord bot webhook connectivity issues causing missed triggers.
                  </p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Resolution:</strong> Configured n8n webhook nodes with robust retry logic and proper Discord bot token management to ensure no events are dropped.
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
