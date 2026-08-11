import { ModeToggle } from '@/components/mode-toggle'
import { ArrowLeft, Clock, Calendar, Lightbulb, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const blogs = {
  'from-clickops-to-terraform': {
    title: 'From ClickOps to Terraform: what we measured',
    subtitle: 'How we cut MTTR and why state files deserve respect.',
    date: 'March 14, 2026',
    readTime: '6 min read',
    problem: 'Manual cloud changes (ClickOps) caused drift, weak audit trails, and hard-to-reproduce incident fixes.',
    solution: 'We moved core AWS resources to Terraform modules, standardized environments, and enforced PR-based infra changes.',
    impact: 'MTTR dropped, rollbacks became predictable, and infra changes became reviewable and repeatable.',
    content: (
      <>
        <p className="mb-8 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          The allure of the AWS console is strong. It&apos;s visual, immediate, and perfectly designed to make you feel productive. But as any team scaling past their first few services quickly learns, &quot;ClickOps&quot; is the enemy of reliability.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">The Hidden Cost of Manual Provisioning</h2>
        <p>
          Before our transition, spinning up a new environment was an oral tradition passed down from senior engineers to new hires. We documented it in Confluence, but the documentation was always a step behind reality. When incidents occurred, reproducing the exact state of a production service in a staging environment to debug it was nearly impossible. We were battling configuration drift on a weekly basis.
        </p>

        <div className="my-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/20">
          <div className="mb-3 flex items-center gap-3 font-semibold text-amber-800 dark:text-amber-400">
            <AlertCircle className="size-5" />
            <span>The Incident That Changed Everything</span>
          </div>
          <p className="m-0 text-sm text-amber-900/80 dark:text-amber-200/70">
            A manual update to a security group during a sev-1 incident accidentally exposed an internal service. It took us 45 minutes just to realize what had changed because there was no pull request or audit trail outside of CloudTrail logs.
          </p>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">The Migration Strategy</h2>
        <p>
          We didn&apos;t boil the ocean. We started with the foundational layers: networking (VPCs, Subnets, Route Tables) and IAM. Once the base was solid, we moved our RDS instances and finally, the compute layer (EKS/ECS).
        </p>

        <div className="my-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 dark:bg-black">
          <div className="flex items-center border-b border-zinc-700 bg-zinc-800 px-4 py-2">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-rose-500"></div>
              <div className="size-3 rounded-full bg-amber-500"></div>
              <div className="size-3 rounded-full bg-emerald-500"></div>
            </div>
            <span className="ml-4 font-mono text-xs text-zinc-400">vpc-module.tf</span>
          </div>
          <div className="overflow-x-auto p-4">
            <pre className="font-mono text-sm text-zinc-300">
              <code className="language-hcl">
{`module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "\${var.environment}-main-vpc"
  cidr = var.vpc_cidr

  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = var.environment != "prod"
}`}
              </code>
            </pre>
          </div>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">What We Measured (The ROI)</h2>
        <ul className="my-6 space-y-4">
          <li className="flex items-start gap-3">
            <TrendingUp className="size-6 shrink-0 text-emerald-500" />
            <div>
              <strong className="text-zinc-900 dark:text-white">MTTR Dropped by 60%</strong>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Rollbacks became a simple <code>git revert</code> and <code>terraform apply</code> rather than a frantic click-hunt.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <TrendingUp className="size-6 shrink-0 text-emerald-500" />
            <div>
              <strong className="text-zinc-900 dark:text-white">Environment Parity</strong>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Staging finally became an exact replica of production, drastically reducing &quot;it works on my machine&quot; bugs.</p>
            </div>
          </li>
        </ul>

        <div className="my-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/[0.02]">
          <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">Takeaway</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Terraform isn&apos;t just about automation; it&apos;s about shifting infrastructure changes into the same review, test, and audit pipelines as your application code. State files require respect and proper remote backends, but the predictability they provide is unmatched.
          </p>
        </div>
      </>
    )
  },
  'running-linkedin-automation': {
    title: 'Running LinkedIn automation without losing your mind',
    subtitle: 'n8n, idempotency, and state in Supabase—patterns from ZabeSync.',
    date: 'February 28, 2026',
    readTime: '5 min read',
    problem: 'Automation workflows can become brittle when rate limits, retries, and idempotency are not handled well.',
    solution: 'Built n8n workflows with state tracking in Supabase, explicit retry strategy, and controlled publishing paths.',
    impact: 'Content workflow became stable and repeatable, with less manual intervention and better output consistency.',
    content: (
      <>
        <p className="mb-8 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          When you string together multiple APIs—an LLM, Discord, LinkedIn, and Google Drive—things will break. APIs rate limit you, webhooks drop, and LLMs sometimes return malformed JSON. Without idempotency, a single failure can lead to embarrassing double-posts or lost content.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">The Brittleness of Stateless Automation</h2>
        <p>
          My first iteration of the ZabeSync pipeline was a straightforward n8n workflow. It worked perfectly in testing. But in production, if the LinkedIn API threw a 502 error during posting, the workflow would fail. When I hit retry, it would re-research the topic, re-generate the post, and try again. Not only was this wasting LLM tokens, but the resulting post was completely different from the one I had approved via Discord.
        </p>

        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
          <div className="mb-3 flex items-center gap-3 font-semibold text-blue-800 dark:text-blue-400">
            <Lightbulb className="size-5" />
            <span>The Idempotency Pattern</span>
          </div>
          <p className="m-0 text-sm text-blue-900/80 dark:text-blue-200/70">
            An operation is idempotent if running it once has the same effect as running it multiple times. For our pipeline, this meant separating state from execution.
          </p>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">Introducing Supabase for State</h2>
        <p>
          To fix this, I introduced Supabase as a state management layer. Every idea generated got a unique ID and a status (<code>DRAFT</code>, <code>APPROVED</code>, <code>PUBLISHED</code>).
        </p>

        <div className="my-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 dark:bg-black">
          <div className="flex items-center border-b border-zinc-700 bg-zinc-800 px-4 py-2">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-rose-500"></div>
              <div className="size-3 rounded-full bg-amber-500"></div>
              <div className="size-3 rounded-full bg-emerald-500"></div>
            </div>
            <span className="ml-4 font-mono text-xs text-zinc-400">state_check.js (n8n snippet)</span>
          </div>
          <div className="overflow-x-auto p-4">
            <pre className="font-mono text-sm text-zinc-300">
              <code className="language-javascript">
{`// Before attempting to publish, verify state
const postId = $json.postId;
const { data, error } = await supabase
  .from('content_pipeline')
  .select('status')
  .eq('id', postId)
  .single();

if (data.status === 'PUBLISHED') {
  // Gracefully exit, already published
  return { success: true, skipped: true, reason: 'Already published' };
}

// Proceed to publish to LinkedIn...`}
              </code>
            </pre>
          </div>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">Handling Rate Limits and Retries</h2>
        <p>
          Instead of relying on the trigger system to handle retries, I implemented explicit sub-workflows in n8n. If the Google Custom Search API returned a 429 Too Many Requests, the workflow would pause for a dynamic backoff period (calculated based on the retry attempt) and try again.
        </p>

        <ul className="my-6 space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="size-6 shrink-0 text-emerald-500" />
            <div>
              <strong className="text-zinc-900 dark:text-white">Discord as the Control Plane</strong>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">By moving the approval process to interactive Discord buttons, humans remain in the loop without needing to log into n8n or a custom dashboard.</p>
            </div>
          </li>
        </ul>
      </>
    )
  },
  'observability-oncall-actually-uses': {
    title: 'Observability that on-call actually uses',
    subtitle: 'Prometheus + Grafana SLIs: alerts humans can act on.',
    date: 'January 15, 2026',
    readTime: '7 min read',
    problem: 'Dashboards looked great but didn\'t help during incidents because alerts lacked context and actionability.',
    solution: 'Defined practical SLIs/SLOs, tuned Prometheus alerts, and created Grafana dashboards mapped to common failure modes.',
    impact: 'On-call response improved with faster triage and fewer noisy, low-value alerts.',
    content: (
      <>
        <p className="mb-8 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          The biggest lie in DevOps is that more dashboards equal better observability. We had 40 different Grafana dashboards with hundreds of panels tracking CPU, Memory, I/O wait times, and thread counts. Yet, when PagerDuty went off at 3 AM, engineers were still paralyzed.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">The Symptom vs. Cause Anti-pattern</h2>
        <p>
          Our alerts were configured based on system resources: &quot;CPU Usage {'>'} 80% for 5m&quot;. This is fundamentally flawed because it alerts on the <em>cause</em> (resource saturation) rather than the <em>symptom</em> (customer experience degradation). Sometimes CPU runs hot during a perfectly healthy batch processing job. 
        </p>

        <div className="my-10 rounded-2xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-900/50 dark:bg-rose-950/20">
          <div className="mb-3 flex items-center gap-3 font-semibold text-rose-800 dark:text-rose-400">
            <AlertCircle className="size-5" />
            <span>Alert Fatigue</span>
          </div>
          <p className="m-0 text-sm text-rose-900/80 dark:text-rose-200/70">
            When 80% of your alerts resolve themselves or don&apos;t require action, on-call engineers learn to ignore them. When a real incident occurs, the critical alert gets lost in a sea of noise.
          </p>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">Transitioning to SLIs and SLOs</h2>
        <p>
          We threw away our resource-based alerts and adopted the RED method (Rate, Errors, Duration). We focused strictly on Service Level Indicators (SLIs) that directly correlated with user pain.
        </p>

        <div className="my-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 dark:bg-black">
          <div className="flex items-center border-b border-zinc-700 bg-zinc-800 px-4 py-2">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-rose-500"></div>
              <div className="size-3 rounded-full bg-amber-500"></div>
              <div className="size-3 rounded-full bg-emerald-500"></div>
            </div>
            <span className="ml-4 font-mono text-xs text-zinc-400">prometheus-rules.yml</span>
          </div>
          <div className="overflow-x-auto p-4">
            <pre className="font-mono text-sm text-zinc-300">
              <code className="language-yaml">
{`- alert: HighErrorRate
  expr: |
    sum(rate(http_requests_total{status=~"5.."}[5m])) 
    / 
    sum(rate(http_requests_total[5m])) > 0.05
  for: 2m
  labels:
    severity: critical
  annotations:
    summary: "High 5xx error rate detected"
    description: "More than 5% of requests are failing over the last 5 minutes."
    runbook: "https://wiki.internal/runbooks/high-error-rate"`}
              </code>
            </pre>
          </div>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-100">Runbook Integration</h2>
        <p>
          Notice the <code>runbook</code> annotation in the Prometheus rule above. An alert without context is useless at 3 AM. Every critical alert we fire now requires a link to a maintained runbook that answers three questions:
        </p>
        <ul className="mt-4 list-decimal space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
          <li>What does this alert mean?</li>
          <li>What is the immediate impact on the customer?</li>
          <li>What are the first 3 diagnostic steps to isolate the issue?</li>
        </ul>

        <div className="my-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/[0.02]">
          <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">The Result</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Our overall alert volume dropped by 70%. When an engineer gets paged, they know exactly what the customer is experiencing and have a documented path forward. Triage time (MTTA) improved drastically.
          </p>
        </div>
      </>
    )
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogs[params.slug as keyof typeof blogs];

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-200 dark:bg-[#050505] dark:text-zinc-100 dark:selection:bg-white/10">
      <div className="absolute right-6 top-6 z-50">
        <ModeToggle />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <Link href="/" className="mb-16 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
        
        <article className="max-w-none">
          <div className="mb-8 flex items-center gap-6 font-mono text-sm text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-2">
              <Calendar className="size-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          
          <p className="mb-12 text-xl font-light text-zinc-500 dark:text-zinc-400">
            {post.subtitle}
          </p>
          
          {/* Executive Summary Cards */}
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <AlertCircle className="size-3 text-rose-500" />
                Problem
              </h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">{post.problem}</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <Lightbulb className="size-3 text-blue-500" />
                Solution
              </h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">{post.solution}</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <TrendingUp className="size-3 text-emerald-500" />
                Impact
              </h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">{post.impact}</p>
            </div>
          </div>

          <div className="mb-12 h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none text-lg">
            {post.content}
          </div>
        </article>
      </div>
    </main>
  )
}
