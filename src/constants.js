/** Tuition centre & tutor (display names) */
export const TUITION_NAME = 'Insight Tutorial'
export const TUTOR_NAME = 'Arshana Ms'

/** Site-wide contact & media */
export const WHATSAPP_URL = 'https://wa.me/919632898838'
export const EMAIL = 'arshana.ms@gmail.com'
export const MAILTO_URL = 'mailto:arshana.ms@gmail.com'

/** Tutor photo — file lives in `public/profile-arshana-ms.png` */
export const PROFILE_IMAGE_URL = '/profile-arshana-ms.png'

export function courseWhatsAppUrl(courseName) {
  const text = `Hi ${TUTOR_NAME}, I am interested in ${courseName}`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}
