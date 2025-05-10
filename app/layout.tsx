import type { Metadata } from 'next'
import { Inter, Poiret_One } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

const inter = Inter({ subsets: ['latin'] })
const poiretOne = Poiret_One({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poiret'
})

export const metadata: Metadata = {
  title: 'TechManiac',
  description: 'Exploring Technology and Boosting Productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poiretOne.variable}`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </div>
      </body>
    </html>
  )
}
