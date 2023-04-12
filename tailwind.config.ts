import {type Config} from "tailwindcss"
import {fontFamily} from "tailwindcss/defaultTheme"
import scrollbar from "tailwind-scrollbar"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {mono: ["var(--font-fira)", ...fontFamily.mono]},
      colors: {
        "ss-bg": "#262626",
        "ss-red": "#cf7777",
        "ss-green": "#849c84",
        "ss-yellow": "#d3b373",
        "ss-orange": "#b98046",
        "ss-blue": "#7587a6",
        "ss-purple": "#b294bb",
        "ss-white": "#f1f1f0",
        "ss-black": "#282a36",
      },
    },
  },
  plugins: [scrollbar({nocompatible: true})],
} satisfies Config
