import { ModeToggle } from '@/components/mode-toggle'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ZabesyncProject() {
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
            <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20">
              AI Pipeline
            </span>
            <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 rounded-full border border-zinc-200 dark:border-white/10">
              n8n & Supabase
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            LinkedIn Content Automation
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-12">
            Reducing content cycle from hours to seconds with Multi-API orchestration and stateful deduplication.
          </p>

          {/* Quick Metrics / Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 shadow-sm">
              <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Speed</h3>
              <p className="font-medium text-emerald-600 dark:text-emerald-400">Hours → Seconds</p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 shadow-sm">
              <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Quality</h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">Zero duplicate topics</p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 shadow-sm">
              <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Integrations</h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">5-API Orchestration</p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 shadow-sm">
              <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Control</h3>
              <p className="font-medium text-blue-600 dark:text-blue-400">Discord Interface</p>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-200 dark:bg-white/10 mb-16"></div>

          {/* Core Content */}
          <div className="space-y-16">
            
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">The Problem</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                LinkedIn content creation is time-intensive, repetitive, and often lacks real-time relevance, reducing posting consistency. Previously, it required manual context-switching across tools, ad-hoc notes, and repetitive tasks to get a post out.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">The Solution</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                Built an AI-driven n8n automation pipeline with live research, LLM-based generation, and Discord-triggered workflows with Supabase state management. It provides end-to-end automation from research and ideation to drafted posts and one-click publish.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-700 dark:text-zinc-300"><strong>n8n over custom code:</strong> Allowed iterating on LLM prompts and API integrations rapidly without code deployments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-700 dark:text-zinc-300"><strong>Discord as a control plane:</strong> Made Discord the single interface for triggering, reviewing, and publishing. Minimal context switching.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Architecture</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
                Three interconnected workflows handle ideation → drafting → publishing with LLM reasoning.
              </p>
              
              <div className="p-8 rounded-3xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 font-mono text-sm overflow-x-auto text-zinc-600 dark:text-zinc-400">
                <div className="flex gap-12">
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-widest text-[10px]">1. Trigger</span>
                    <span className="px-4 py-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 rounded border border-indigo-200 dark:border-indigo-800 shadow-sm">Discord Interface</span>
                  </div>
                  <div className="flex flex-col justify-center"><ArrowRight className="w-4 h-4" /></div>
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-widest text-[10px]">2. Automation</span>
                    <span className="px-4 py-2 bg-white dark:bg-black rounded border border-zinc-300 dark:border-zinc-700 shadow-sm">n8n on EC2</span>
                    <span className="px-4 py-2 bg-white dark:bg-black rounded border border-zinc-300 dark:border-zinc-700 shadow-sm">Gemini LLM</span>
                  </div>
                  <div className="flex flex-col justify-center"><ArrowRight className="w-4 h-4" /></div>
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-widest text-[10px]">3. Data</span>
                    <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800 shadow-sm">Supabase State</span>
                  </div>
                  <div className="flex flex-col justify-center"><ArrowRight className="w-4 h-4" /></div>
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-widest text-[10px]">4. Outbound</span>
                    <span className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded border border-blue-200 dark:border-blue-800 shadow-sm">LinkedIn API</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Key Incidents & Learnings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5">
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">API Rate Limiting</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm">
                    <strong>Issue:</strong> Web search API rate limiting and free tier limits causing workflow failures.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    <strong>Resolution:</strong> Implemented multi-AI fallback mechanisms, cached research results, and batched searches. Prompt engineering was also optimized to reduce token usage.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5">
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">Webhook Connectivity</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm">
                    <strong>Issue:</strong> Discord bot webhook connectivity issues causing missed triggers.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
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
