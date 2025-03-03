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
        'poppins':'var(--poppins)',
        'playwrite':'var(--playwrite)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        xs:'546px',
        sxs:'308px',
        sm:'640px',
        md:'768px',
        emd:'865px',
        lg:'1024px',
        xl:'1280px',
        '2xl':'1536px'
      }
    },
  },
  plugins: [],
} satisfies Config;
