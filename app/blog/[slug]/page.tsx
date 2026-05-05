import { ModeToggle } from '@/components/mode-toggle'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Simple title formatter from slug
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-black/10 dark:selection:bg-white/10 font-sans">
      <div className="absolute top-6 right-6 z-50">
        <ModeToggle />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-16 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">
            {title}
          </h1>
          
          <div className="py-24 text-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50 dark:bg-white/[0.02]">
            <h3 className="text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-2">Content Coming Soon</h3>
            <p className="text-zinc-500 text-sm">I am currently writing this post. Check back later!</p>
          </div>
        </article>
      </div>
    </main>
  )
}
