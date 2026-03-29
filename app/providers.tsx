'use client'

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Custom theme matching your color scheme - disable preflight to prevent CSS reset conflicts with Tailwind
const customConfig = defineConfig({
  preflight: false, // Disable Chakra's CSS reset to prevent conflicts with Tailwind
  theme: {
    tokens: {
      colors: {
        brand: {
          lightBg: { value: '#F7F7F7' },
          darkBg: { value: '#0F1624' },
          darkAccent: { value: '#1E3A6E' },
          midBlue: { value: '#3B82F6' },
          slate: { value: '#64748B' },
          lightSlate: { value: '#94A3B8' },
          nearBlack: { value: '#111111' },
          darkGrey: { value: '#374151' },
          midGrey: { value: '#9CA3AF' },
        },
      },
    },
  },
})

const system = createSystem(defaultConfig, customConfig)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}
