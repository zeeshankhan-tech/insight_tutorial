import {
  Atom,
  Calculator,
  FlaskConical,
  Microscope,
  Sparkles,
  Trophy,
} from 'lucide-react'
import WhatsAppButton from './WhatsAppButton.jsx'
import { courseWhatsAppUrl } from '../constants.js'

const ICONS = {
  microscope: Microscope,
  flask: FlaskConical,
  calculator: Calculator,
  atom: Atom,
  sparkles: Sparkles,
  trophy: Trophy,
}

export default function CourseCard({ course }) {
  const Icon = ICONS[course.icon] ?? Atom
  const boardLine =
    course.boards?.join(' · ') ??
    (course.target ? `Target: ${course.target}` : '')

  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm ring-1 ring-black/5">
      {course.badge ? (
        <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-page-text shadow-sm">
          {course.badge}
        </span>
      ) : null}

      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <div className="min-w-0 pr-16">
          <h3 className="text-xl font-semibold text-page-text">{course.title}</h3>
          {course.grades ? (
            <p className="mt-1 text-sm text-muted">{course.grades}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-sm font-medium text-primary">{boardLine}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {course.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-lg bg-page-bg px-2.5 py-1 text-xs font-medium text-page-text ring-1 ring-black/5"
          >
            {topic}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex w-fit rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {course.mode}
      </span>

      <div className="mt-6 flex flex-wrap gap-3">
        <WhatsAppButton
          href={courseWhatsAppUrl(`${course.title} tuition`)}
          variant="solidGreen"
          className="w-full justify-center sm:w-auto"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  )
}
