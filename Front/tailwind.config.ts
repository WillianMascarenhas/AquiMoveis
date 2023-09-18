import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        brand1: {
          1000: "#FC814A",
          750: "#A96250",
        },
        brand2:{
          1000:"#564256",
          750:"#766B79",
        },
        gray:{
          1000:"#222222",
          750:"#96939B",
          500:"#BFBFBF",
          250:"#E8E8E8",
          0:"#F5F5F5"
        }
      }
    },
  },
  plugins: [],
}
export default config
