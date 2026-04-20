import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import {
  PROFILE_IMAGE_URL,
  TUITION_NAME,
  TUTOR_NAME,
  WHATSAPP_URL,
  MAILTO_URL,
  EMAIL,
} from '../constants.js'
import { COURSES } from '../data/courses.js'
import {
  Atom,
  Calculator,
  FlaskConical,
  Microscope,
} from 'lucide-react'

const featured = COURSES.slice(0, 3)
const featuredIcons = [Microscope, FlaskConical, Calculator]

const testimonials = [
  {
    quote:
      'Our daughter moved from barely passing Biology to scoring an A within one term. Arshana Ms explains concepts with patience and clarity.',
    name: 'Parent of Class 10 student',
  },
  {
    quote:
      'Chemistry finally clicked for me. The revision plans and exam strategies were practical and easy to follow.',
    name: 'Class 10 student',
  },
  {
    quote:
      'The life skills sessions helped my son manage exam stress and speak up in class. We are grateful for the holistic mentoring.',
    name: 'Parent of Class 8 student',
  },
]

const milestones = [
  { year: '2015', title: 'Joined Elegant International School', detail: 'Built strong foundations in science teaching.' },
  { year: '2018', title: 'High School Science Lead', detail: 'Led board-focused Biology & Chemistry cohorts.' },
  {
    year: '2019',
    title: `Founded ${TUITION_NAME}`,
    detail: 'NLP-based counselling & mindful parenting workshops.',
  },
]

export default function Home() {
  return (
    <main>
      <section
        className="relative overflow-hidden bg-gradient-to-br from-primary via-teal-600 to-emerald-800 text-white"
        aria-labelledby="hero-heading"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
          <div>
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Transforming Learning, One Student at a Time
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
            >
              {TUITION_NAME} is led by{' '}
              <span className="font-semibold text-accent drop-shadow-sm">{TUTOR_NAME}</span>, a Biology
              {' & '}Chemistry educator with 10+ years of classroom and coaching experience and a
              Master&apos;s degree as an Neuro-Linguistic Programming (NLP) Practitioner — guiding
              students toward confident learning and resilient mindsets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-page-text shadow-md transition hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <WhatsAppButton href={WHATSAPP_URL} variant="secondary">
                Contact via WhatsApp
              </WhatsAppButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl" aria-hidden />
              <img
                src={PROFILE_IMAGE_URL}
                width={300}
                height={300}
                alt={`Portrait of ${TUTOR_NAME}`}
                className="relative z-10 h-56 w-56 rounded-full border-4 border-white/40 object-cover shadow-2xl ring-4 ring-white/30 sm:h-64 sm:w-64"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white py-12" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">
            Teaching impact at a glance
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="10+ Years Teaching" variant="number" end={10} suffix="+" delay={0} />
            <StatCard label="100% Pass Rate" variant="number" end={100} suffix="%" delay={0.05} />
            <StatCard label="500+ Students" variant="number" end={500} suffix="+" delay={0.1} />
            <StatCard
              label="Master NLP Coach"
              variant="text"
              caption="IICM · Master Practitioner"
              delay={0.12}
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="courses-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="courses-heading"
                className="text-2xl font-semibold tracking-tight text-page-text sm:text-3xl"
              >
                What I Teach
              </h2>
              <p className="mt-2 max-w-2xl text-muted">
                Board-aligned programmes in science and mathematics, strengthened with study
                skills and exam strategy.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 self-start rounded-lg px-1 py-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg"
            >
              View All Courses
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((course, i) => {
              const Icon = featuredIcons[i] ?? Atom
              const blurbs = {
                biology:
                  'From cell biology to human physiology — clear diagrams, recall techniques, and exam-style application questions.',
                chemistry:
                  'Builds intuition for reactions, periodic trends, and carbon compounds with safe, visual-first explanations.',
                mathematics:
                  'Strengthens algebra through trigonometry with structured problem sets and error-proofing habits.',
              }
              const blurb = blurbs[course.id] ?? ''
              return (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-page-text">{course.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{blurb}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-16 sm:py-20" aria-labelledby="experience-snapshot-heading">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2
              id="experience-snapshot-heading"
              className="text-2xl font-semibold tracking-tight text-page-text sm:text-3xl"
            >
              Experience Snapshot
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              For a decade at Elegant International School, {TUTOR_NAME} taught science across
              higher primary and high school, aligning lessons to board requirements while
              nurturing curiosity. Alongside the classroom, she founded {TUITION_NAME} to bring
              NLP-informed counselling and life skills into families and communities.
            </p>
            <Link
              to="/experience"
              className="mt-6 inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              See Full Experience
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ol className="relative space-y-8 border-l-2 border-primary/20 pl-8">
            {milestones.map((m, idx) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-accent shadow" />
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {m.year}
                </p>
                <p className="mt-1 text-lg font-semibold text-page-text">{m.title}</p>
                <p className="mt-1 text-sm text-muted">{m.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="testimonials-heading"
            className="text-center text-2xl font-semibold tracking-tight text-page-text sm:text-3xl"
          >
            What Families Say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <Quote className="absolute right-5 top-5 h-8 w-8 text-accent/35" aria-hidden />
                <blockquote className="text-sm leading-relaxed text-muted">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                  {t.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-r from-primary to-emerald-700 px-4 py-12 text-white sm:px-6 lg:px-8"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-heading" className="text-2xl font-semibold sm:text-3xl">
              Ready to boost your child&apos;s grades?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base">
              Share your child&apos;s class, board, and goals — {TUTOR_NAME} will recommend a
              learning path and schedule.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
            <WhatsAppButton href={WHATSAPP_URL} variant="solidGreen" className="justify-center">
              Chat on WhatsApp
            </WhatsAppButton>
            <a
              href={MAILTO_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
            {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
