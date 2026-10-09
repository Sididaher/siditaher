import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        paper: "#F8FAFC",
        electric: "#2563EB",
        turquoise: "#10B981",
        slateSoft: "#94A3B8"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(11, 18, 32, 0.18)",
        glow: "0 18px 45px rgba(37, 99, 235, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
