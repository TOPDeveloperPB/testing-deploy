import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "40px",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "map-image": "url('/images/mapimage.webp')",
        "plus-vector": "url('/images/vector.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#121212",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#DA5001",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "#fff5f0",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#fbfbfb",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#dedede",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "#7e7e7e",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "1d1c19": "var(--1d1c19)",
        ffffff: "var(--ffffff)",
        da5001: "var(--da5001)",
        "7e7e7e": "var(--7e7e7e)",
        fbfbfb: "var(--fbfbfb)",
        "589999": "var(--589999)",
        f0f7f7: "var(--f0f7f7)",
        f6f6f6: "var(--f6f6f6)",
        121212: "var(--121212)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
