import { motion } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  BookOpen,
  Brain,
  GraduationCap,
  Monitor,
  Users,
} from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { PROFILE_IMAGE_URL, TUITION_NAME, TUTOR_NAME, WHATSAPP_URL } from '../constants.js'

const skills = [
  { title: 'Teaching Excellence', icon: Award, text: 'Board-aligned pedagogy with clear outcomes.' },
  { title: 'Educational Psychology', icon: Brain, text: 'Supports motivation, attention, and wellbeing.' },
  { title: 'NLP Coaching', icon: Users, text: 'Practical tools for confidence and communication.' },
  { title: 'Curriculum Design', icon: BookOpen, text: 'Structured pacing from fundamentals to exam depth.' },
  { title: 'Online Teaching', icon: Monitor, text: 'Engaging virtual classes with crisp explanations.' },
]

const certifications = [
  'Google Certified Educator',
  'Master NLP Practitioner (IICM)',
  'ATHE UK Certification',
  'Certificate in School Counselling',
  'CBSE & Karnataka State Board assessment training',
]

const education = [
  {
    period: '2010 – 2012',
    title: 'M.Sc. Life Sciences (Chemistry focus)',
    place: 'University of Mysore',
    detail: 'Advanced coursework in biochemistry and pedagogy-linked laboratory practice.',
  },
  {
    period: '2008 – 2010',
    title: 'B.Ed. (Science & Mathematics)',
    place: 'Regional Institute of Education, Mysore',
    detail: 'Formal training in instructional methods, evaluation, and inclusive classrooms.',
  },
  {
    period: '2005 – 2008',
    title: 'B.Sc. (Chemistry, Botany, Zoology)',
    place: 'Mahajana First Grade College, Mysore',
    detail: 'Strong interdisciplinary grounding for teaching integrated science.',
  },
  {
    period: '2003 – 2005',
    title: 'Pre-University (PCMB)',
    place: 'Karnataka PU Board',
    detail: 'Merit-level preparation across physics, chemistry, mathematics, and biology.',
  },
]

export default function About() {
  return (
    <main>
      <section className="border-b border-black/5 bg-gradient-to-br from-primary/10 via-page-bg to-emerald-50/50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:text-left">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/25 blur-2xl" aria-hidden />
            {/* TODO: Replace with an actual photo of Arshana Ms — replace src with actual photo */}
            <img
              src={PROFILE_IMAGE_URL}
              width={280}
              height={280}
              alt={TUTOR_NAME}
              className="relative z-10 h-48 w-48 rounded-full border-4 border-white object-cover shadow-xl ring-4 ring-primary/15 sm:h-56 sm:w-56"
              decoding="async"
            />
          </div>
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl font-semibold tracking-tight text-page-text sm:text-4xl"
            >
              {TUTOR_NAME}
            </motion.h1>
            <p className="mt-3 text-lg font-medium text-primary">
              Biology & Chemistry Educator · Master NLP Practitioner · Founder, {TUITION_NAME}
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              {TUTOR_NAME} brings together a decade of classroom leadership, rigorous board-exam
              preparation, and neuroscience-informed coaching. She has guided hundreds of
              learners across CBSE and Karnataka State Board syllabi while designing remedial
              pathways for students who need extra scaffolding. Her practice blends accurate
              subject mastery with empathy, helping adolescents build confidence, study
              habits, and resilient mindsets that extend beyond marksheets.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="skills-heading">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="skills-heading" className="text-2xl font-semibold text-page-text">
              Core strengths
            </h2>
            <ul className="mt-6 space-y-4">
              {skills.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.li
                    key={s.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="flex gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-semibold text-page-text">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted">{s.text}</p>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-page-text">Certifications</h2>
            <ul className="mt-6 space-y-3">
              {certifications.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.32, delay: i * 0.03 }}
                  className="flex items-start gap-3 rounded-xl border border-black/5 bg-white px-4 py-3 text-sm font-medium text-page-text shadow-sm"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {c}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-16" aria-labelledby="education-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="education-heading" className="text-2xl font-semibold text-page-text">
            Education
          </h2>
          <ol className="relative mt-10 space-y-8 border-l-2 border-primary/25 pl-8">
            {education.map((e, idx) => (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[39px] top-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-primary text-page-text shadow">
                  <GraduationCap className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {e.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-page-text">{e.title}</h3>
                <p className="text-sm font-medium text-muted">{e.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="languages-heading">
        <h2 id="languages-heading" className="text-2xl font-semibold text-page-text">
          Languages
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {['English', 'Hindi', 'Kannada'].map((lang) => (
            <span
              key={lang}
              className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="tuition-initiative-heading">
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          id="tuition-initiative-heading"
          className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 via-white to-emerald-50/60 p-8 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Our programme</p>
          <h2 className="mt-2 text-2xl font-semibold text-page-text">{TUITION_NAME}</h2>
          <p className="mt-1 text-sm font-medium text-muted">
            Guiding minds, empowering lives · 2019 – 2025
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            {TUITION_NAME} weaves NLP-informed counselling, parent education, and student life-skills
            clubs into a single ecosystem. Workshops on mindful parenting, emotional regulation,
            and confident communication complement {TUTOR_NAME}&apos;s academic tutoring, ensuring
            learners feel seen at home and in school.
          </p>
        </motion.article>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton href={WHATSAPP_URL} variant="solidGreen" className="px-8">
            Start a conversation on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </main>
  )
}
