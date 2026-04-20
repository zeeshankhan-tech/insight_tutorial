import { motion } from 'framer-motion'
import TimelineItem from '../components/TimelineItem.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { TUITION_NAME, TUTOR_NAME, WHATSAPP_URL } from '../constants.js'

const entries = [
  {
    organization: 'Elegant International School',
    role: 'High School Teacher (Science)',
    period: '2018 – 2024',
    bullets: [
      'Delivered board-aligned Biology & Chemistry curricula with measurable learning gains.',
      'Maintained 95%+ pass rates across consecutive board cohorts.',
      'Introduced flipped classroom cycles and diagnostic assessments to close learning gaps.',
      'Mentored peer teachers on practical demonstrations and lab safety routines.',
    ],
  },
  {
    organization: 'Elegant International School',
    role: 'Higher Primary Teacher (Science)',
    period: '2015 – 2018',
    bullets: [
      'Strengthened foundational numeracy and scientific literacy in middle school.',
      'Ran concept recap sessions bridging textbook ideas to everyday observations.',
      'Used positive reinforcement and formative checks to sustain classroom morale.',
    ],
  },
  {
    organization: 'Government Junior College',
    role: 'Science Teacher',
    period: '2014 – 2015',
    bullets: [
      'Taught integrated science to first-year PU students with diverse readiness levels.',
      'Designed low-cost demonstrations to make abstract ideas tangible.',
      'Coordinated remedial hours for learners preparing for board examinations.',
    ],
  },
  {
    organization: 'Independent Coaching Centre',
    role: 'Founder & Lead Tutor',
    period: '2016 – 2025',
    bullets: [
      'Nine consecutive years of 100% pass outcomes for enrolled board candidates.',
      'Average 25–30% score lift for previously under-performing students through targeted drills.',
      'Built personalised revision calendars and parent progress summaries each term.',
    ],
  },
  {
    organization: TUITION_NAME,
    role: 'Founder · NLP & life skills programmes · Guiding minds, empowering lives',
    period: '2019 – 2025',
    bullets: [
      'Delivered NLP-informed counselling for adolescents navigating academic stress.',
      'Hosted parent workshops on communication, boundaries, and mindful parenting.',
      'Facilitated school life-skills clubs covering confidence, empathy, and public speaking.',
    ],
  },
]

const achievements = [
  { title: '95%+ Board Pass Rate', detail: 'Across high school science batches at Elegant International School.' },
  { title: '100% Coaching Pass Rate', detail: 'Nine-year streak for centre students sitting board exams.' },
  { title: '500+ Students Mentored', detail: 'Classroom, online, and community programmes combined.' },
]

export default function Experience() {
  return (
    <main className="pb-16">
      <header className="border-b border-black/5 bg-gradient-to-r from-primary/10 via-page-bg to-emerald-50/50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold tracking-tight text-page-text sm:text-4xl"
          >
            10+ Years of Teaching Excellence
          </motion.h1>
          <p className="mt-3 max-w-2xl text-muted leading-relaxed">
            A chronological look at {TUTOR_NAME}&apos;s classroom leadership, independent coaching,
            and community initiatives across Mysuru and Bengaluru learners.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative md:pl-2">
          <div
            className="pointer-events-none absolute left-[calc(50%-0.5px)] top-6 bottom-6 hidden w-px bg-gradient-to-b from-primary/40 via-primary/15 to-primary/40 md:block"
            aria-hidden
          />

          <div className="space-y-12 md:space-y-16">
            {entries.map((e, index) => (
              <TimelineItem
                key={e.organization + e.period}
                organization={e.organization}
                role={e.role}
                period={e.period}
                bullets={e.bullets}
                align={index % 2 === 0 ? 'left' : 'right'}
                index={index}
              />
            ))}
          </div>
        </div>

        <section className="mt-20" aria-labelledby="achievements-heading">
          <h2 id="achievements-heading" className="text-2xl font-semibold text-page-text">
            Achievements
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-2xl border border-accent/30 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-primary">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <div className="mt-16 flex justify-center">
          <WhatsAppButton href={WHATSAPP_URL} variant="solidGreen" className="px-8">
            Discuss opportunities on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </main>
  )
}
