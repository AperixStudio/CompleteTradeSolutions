export const colors = {
  primary: '#122237', // main brand dark navy
  primaryRgb: '18, 34, 55',
  secondary: '#f4b63f', // gold/yellow accent from the logo
  accent: '#f28c28', // Orange support color
  ink: '#111827', // main text color
  muted: '#5f6b7a', // softer paragraph text
  background: '#121212', // overall page background
  surface: '#414141', // white panels/cards
  line: '#e4ded3', // borders/dividers
}

export const gradients = {
  heroOverlay: `linear-gradient(
    135deg,
    rgba(245, 245, 245, 0.96),
    rgba(160, 160, 160, 0.72) 48%,
    rgba(18, 18, 18, 0.92)
  )`,
}


export const colorVariables = {
  '--color-primary': colors.primary,
  '--color-primary-rgb': colors.primaryRgb,
  '--color-secondary': colors.secondary,
  '--color-accent': colors.accent,
  '--color-ink': colors.ink,
  '--color-muted': colors.muted,
  '--color-background': colors.background,
  '--color-surface': colors.surface,
  '--color-line': colors.line,
  '--hero-overlay': gradients.heroOverlay,
}

export function applyColorVariables() {
  Object.entries(colorVariables).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value)
  })
}
