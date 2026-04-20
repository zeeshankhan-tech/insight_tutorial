import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

export default function TimelineItem({
  organization,
  role,
  period,
  bullets = [],
  align = 'left',
  index = 0,
}) {
  const isRight = align === 'right'

  const heading = (
    <header className="space-y-1">
      <h3 className="text-lg font-semibold text-page-text">{organization}</h3>
      <p className="text-sm font-medium text-primary">{role}</p>
      <p className="text-sm text-muted">{period}</p>
    </header>
  )

  const body = (
    <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-muted md:text-base">
        {bullets.map((item) => (
          <li key={item} className="marker:text-accent">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <div className="flex gap-3 md:hidden">
        <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-accent shadow" aria-hidden />
        <div className="min-w-0 flex-1 space-y-3">
          {heading}
          {body}
        </div>
      </div>

      <div className="hidden gap-x-6 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch">
        <div
          className={cn(
            'flex flex-col justify-center',
            isRight ? 'order-3 text-left' : 'order-1 text-right',
          )}
        >
          {heading}
        </div>

        <div className="relative order-2 flex flex-col items-center">
          <span
            className="z-10 mt-2 h-4 w-4 shrink-0 rounded-full border-4 border-page-bg bg-accent shadow"
            aria-hidden
          />
        </div>

        <div
          className={cn('flex flex-col justify-center', isRight ? 'order-1' : 'order-3')}
        >
          {body}
        </div>
      </div>
    </motion.article>
  )
}
