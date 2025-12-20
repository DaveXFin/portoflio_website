'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './themetoggle'
import { motion } from 'framer-motion'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  // 'https://vercel.com/templates/next.js/portfolio-starter-kit': {
  //   name: 'deploy',
  // },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="navbar-container flex flex-row items-center justify-between relative px-4 py-3 rounded-lg"
          id="nav"
        >
          <div className="flex flex-row space-x-2">
            {Object.entries(navItems).map(([path, { name }], index) => {
              const isActive = pathname === path
              return (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={path}
                    className={`nav-link relative py-2 px-4 rounded-md transition-all duration-300 ${
                      isActive ? 'nav-link-active' : ''
                    }`}
                  >
                    {name}
                  </Link>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>
        </motion.nav>
      </div>
    </aside>
  )
}
