import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray : "#F2F0F1",
        Gray:"#F0F0F0"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
