import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from "./components/Footer";
import { Header } from './components/Header';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Emander Dangla',
  description: 'Get to know Emander Dangla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header children={children} />
          {children}
        <Footer />
      </body>
    </html>
  )
}