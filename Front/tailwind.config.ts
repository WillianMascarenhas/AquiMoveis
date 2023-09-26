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
        },
      },
      backgroundImage:{
        "image1": 'url("https://images.pexels.com/photos/169185/pexels-photo-169185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        "image2": 'url("https://images.pexels.com/photos/17294746/pexels-photo-17294746/free-photo-of-banquete-festim-celebracao-comemoracao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }
    },
  },
  plugins: [],
}
export default config
