import { Mail } from 'lucide-react'
import { EMAIL, MAILTO_URL, TUITION_NAME, TUTOR_NAME, WHATSAPP_URL } from '../constants.js'
import { WhatsAppGlyph } from './WhatsAppButton.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {year} {TUITION_NAME} · {TUTOR_NAME}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 sm:justify-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp chat (opens in a new tab)"
            title="Chat on WhatsApp"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <WhatsAppGlyph className="h-4 w-4" aria-hidden />
            <span>Message on WhatsApp</span>
          </a>
          <a
            href={MAILTO_URL}
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
