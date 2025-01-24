import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'pandesal':'var(--pandesal)',
        'tinapa':'var(--tinapa)',
        'roboto3':'var(--roboto3)',
        'roboto1':'var(--roboto1)',
        'roboto2':'var(--roboto2)',
        'test':'var(--test)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        xs:'546px'
      }
    },
  },
  plugins: [],
} satisfies Config;
