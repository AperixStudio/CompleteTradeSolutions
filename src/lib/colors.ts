export const colors = {
  primary: '#111111',
  primaryRgb: '17, 17, 17',
  secondary: '#3a3a3a',
  accent: '#e85d04',
  ink: '#111111',
  muted: '#5c5c5c',
  background: '#f2f2f0',
  surface: '#1c1c1c',
  line: '#dcdcda',
  yellow: '#FFDA03',
}

export const gradients = {
  heroOverlay: `linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12),
    rgba(58, 58, 58, 0.2) 48%,
    rgba(17, 17, 17, 0.72)
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
