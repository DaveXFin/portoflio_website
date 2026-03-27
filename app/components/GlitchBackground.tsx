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
    ? ['#3F4F44', '#A27B5C', '#8B6647']
    : ['#3F4F44', '#2C3930', '#A27B5C']

  const bgColor = isDark ? '#2C3930' : '#DCD7C9'

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
        glitchColors={glitchColors}
        backgroundColor={bgColor}
        glitchSpeed={60}
        outerVignette={false}
        smooth={true}
      />
    </div>
  )
}
