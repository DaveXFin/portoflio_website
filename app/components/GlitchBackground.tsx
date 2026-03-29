'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import LetterGlitch from './LetterGlitch'

export default function GlitchBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  // Match the site palette
  const glitchColors = isDark
    ? ['#1E3A6E', '#3B82F6', '#64748B']
    : ['#111111', '#374151', '#9CA3AF']

  const bgColor = isDark ? '#0F1624' : '#F7F7F7'

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        filter: 'blur(3px)',
      }}
    >
      <LetterGlitch
        key={theme}
        glitchColors={glitchColors}
        backgroundColor={bgColor}
        glitchSpeed={60}
        outerVignette={false}
        smooth={true}
      />
    </div>
  )
}
