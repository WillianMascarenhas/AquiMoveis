import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}
