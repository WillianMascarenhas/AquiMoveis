import { Header } from '@/components/Header'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main className={`body ${poppins.className}`}>
      <Header/>
    </main>
  )
}
