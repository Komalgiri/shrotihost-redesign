import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Official ShrotiHost Assessment Theme Tokens
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5", // Brand Primary: #4F46E5
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B",
          DEFAULT: "#4F46E5",
        },
        accent: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4", // Brand Accent: #06B6D4
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
          DEFAULT: "#06B6D4",
        },
        // Deep Obsidian Page Body Background
        obsidian: {
          DEFAULT: "#0B0F19",
          900: "#0B0F19",
          950: "#060910",
        },
        // Card Surface & Elevation Layers
        surface: {
          card: "#111827",  // Card Surface: #111827 (Slate 900)
          hover: "#1F2937", // Card Hover: #1F2937 (Slate 800)
          subtle: "#0B0F19",
          border: "rgba(255, 255, 255, 0.06)",
        },
        // Typography Tokens
        text: {
          primary: "#F9FAFB", // Text Primary: #F9FAFB (Gray 50)
          muted: "#9CA3AF",   // Text Muted: #9CA3AF (Gray 400)
        },
        // Status & Verified
        verified: {
          DEFAULT: "#10B981", // Success / Verified: #10B981 (Emerald 500)
          light: "#34D399",
          dark: "#059669",
        },
        // Selective Technical Dark Surfaces
        tech: {
          bg: "#0B0F19",
          surface: "#111827",
          card: "#1F2937",
          border: "rgba(255, 255, 255, 0.08)",
          highlight: "#4F46E5",
          text: "#F9FAFB",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.5)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.7)",
        elevated: "0 20px 40px -10px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
