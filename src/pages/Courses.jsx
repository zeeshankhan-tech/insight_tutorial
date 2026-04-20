import { useMemo, useState } from 'react'
import CourseCard from '../components/CourseCard.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { COURSES, COURSE_FILTERS } from '../data/courses.js'
import { TUTOR_NAME, WHATSAPP_URL } from '../constants.js'
import { cn } from '../lib/cn'

function filterCourses(tab) {
  if (tab === 'All') return COURSES
  if (tab === 'CBSE') return COURSES.filter((c) => c.filterTags.includes('CBSE'))
  if (tab === 'Karnataka State Board') {
    return COURSES.filter((c) => c.filterTags.includes('Karnataka State Board'))
  }
  if (tab === 'Life Skills') return COURSES.filter((c) => c.filterTags.includes('Life Skills'))
  return COURSES
}

export default function Courses() {
  const [tab, setTab] = useState('All')
  const visible = useMemo(() => filterCourses(tab), [tab])

  return (
    <main className="pb-16">
      <header className="border-b border-black/5 bg-gradient-to-r from-primary/10 via-page-bg to-emerald-50/50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold tracking-tight text-page-text sm:text-4xl">
            Courses &amp; Classes
          </h1>
          <p className="mt-3 max-w-2xl text-muted leading-relaxed">
            Choose a programme aligned to your child&apos;s board, class, and goals. Each course
            blends concept clarity, exam practice, and mentoring check-ins.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div
          className="flex flex-wrap gap-2 rounded-2xl border border-black/5 bg-white p-2 shadow-sm"
          role="tablist"
          aria-label="Filter courses by category"
        >
          {COURSE_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={tab === f}
              onClick={() => setTab(f)}
              className={cn(
                'rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                tab === f
                  ? 'bg-primary text-page-text shadow-sm'
                  : 'text-muted hover:bg-page-bg hover:text-page-text',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-8 text-center text-sm text-muted">
            No courses match this filter right now.
          </p>
        ) : null}

        <section className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-black/5 bg-white px-6 py-10 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-page-text">Not sure which course?</h2>
          <p className="max-w-xl text-sm text-muted">
            Share your child&apos;s class, board, and recent scores — {TUTOR_NAME} will suggest a
            roadmap and batch options.
          </p>
          <WhatsAppButton href={WHATSAPP_URL} variant="solidGreen" className="px-8">
            Let&apos;s talk on WhatsApp
          </WhatsAppButton>
        </section>
      </div>
    </main>
  )
}
