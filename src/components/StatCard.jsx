import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '../lib/cn'

function useCountUp(end, durationMs, enabled) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / durationMs, 1)
      const eased = 1 - (1 - t) * (1 - t)
      setValue(Math.round(eased * end))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, durationMs, enabled])

  return value
}

/**
 * @param {Object} props
 * @param {string} props.label — Caption under the number, or main title when `variant="text"`
 * @param {'number'|'text'} [props.variant='number']
 * @param {number} [props.end] — Target number (variant number)
 * @param {string} [props.suffix] — e.g. '+', '%'
 * @param {string} [props.caption] — Secondary line for text variant
 */
export default function StatCard({
  label,
  variant = 'number',
  end = 0,
  suffix = '',
  caption,
  className,
  delay = 0,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' })
  const count = useCountUp(end, 1400, variant === 'number' && isInView)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(
        'rounded-2xl border border-accent/35 bg-white p-6 text-center shadow-sm',
        className,
      )}
    >
      {variant === 'number' ? (
        <>
          <p className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            {count}
            {suffix}
          </p>
          <p className="mt-2 text-sm font-medium text-muted md:text-base">{label}</p>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: delay + 0.08 }}
        >
          <p className="text-lg font-semibold text-primary md:text-xl">{label}</p>
          {caption ? (
            <p className="mt-2 text-sm font-medium text-muted md:text-base">{caption}</p>
          ) : null}
        </motion.div>
      )}
    </motion.article>
  )
}
