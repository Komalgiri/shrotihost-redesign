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
        // Official ShrotiHost Logo Derived Brand Primary (Indigo / Cobalt)
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5", // Official ShrotiHost Logo Primary
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B",
        },
        // Official ShrotiHost Logo Derived Accent (Electric Cyan)
        accent: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4", // Official ShrotiHost Logo Cyan Accent
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
        // Deep Navy & Charcoal Typography (High Legibility)
        slate: {
          850: "#172033",
          925: "#0B1120",
          950: "#0B0F19",
        },
        // Selective Technical Dark Surfaces
        tech: {
          bg: "#0B0F19",
          surface: "#111827",
          card: "#1E293B",
          border: "#334155",
          highlight: "#4F46E5",
          text: "#F8FAFC",
          muted: "#94A3B8",
        },
        // Warm Off-White & Crisp Light Surfaces
        canvas: {
          base: "#FAFBFD",
          subtle: "#F8FAFC",
          muted: "#F1F5F9",
        },
        // Semantic status colors from assessment document
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
          info: "#3B82F6",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
        elevated: "0 20px 30px -10px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
