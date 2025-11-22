'use client'

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Custom theme matching your color scheme - disable preflight to prevent CSS reset conflicts with Tailwind
const customConfig = defineConfig({
  preflight: false, // Disable Chakra's CSS reset to prevent conflicts with Tailwind
  theme: {
    tokens: {
      colors: {
        brand: {
          lightBg: { value: '#DCD7C9' },
          darkBg: { value: '#2C3930' },
          darkAccent: { value: '#3F4F44' },
          lightAccent: { value: '#A27B5C' },
          brown: { value: '#8B6647' },
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
