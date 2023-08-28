/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      bg: {
        btn: 'bg-gradient-to-r from-sky-200 to-[#0090FF]'
      },
      dropShadow: {
        glow: [
          "0 0px 5px rgba(255,255, 255)",
          "0 0px 10px rgba(255, 255,255, .1)"
        ],
        glowIndigo: [
          "0 0px 5px rgba(99, 102, 241)",
          "0 0px 10px rgba(99, 102,241, .1)"
        ],
        glowGray: [
          "0 0px 5px rgba(107, 114, 128)",
          "0 0px 10px rgba(107, 114, 128, .1)"
        ],
        glowAmber: [
          "0 0px 5px rgba(245, 158, 11)",
          "0 0px 10px rgba(245, 158, 11, .1)"
        ],
        glowRose: [
          "0 0px 5px rgba(244, 63, 94)",
          "0 0px 10px rgba(244, 63, 94, .1)"
        ]
      },
      fontFamily: {
        editorial: ['Editorial', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}