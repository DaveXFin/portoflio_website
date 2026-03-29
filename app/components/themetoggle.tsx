"use client"; // Required since we use hooks
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react"; // Or any other icons
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug: log theme changes
  useEffect(() => {
    console.log('Current theme:', theme);
  }, [theme]);
  if (!mounted) {
    return null; // Or a loading skeleton
  }
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      style={{
        padding: "0.5rem",
        borderRadius: "0.5rem",
        border: `1.5px solid ${isDark ? "#3B82F6" : "#374151"}`,
        backgroundColor: isDark ? "rgba(30, 58, 110, 0.4)" : "rgba(17, 17, 17, 0.08)",
        color: isDark ? "#93C5FD" : "#111111",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </button>
  );
}