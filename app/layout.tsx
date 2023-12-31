import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Скачать мобильное приложение ВТБ Онлайн',
  description: 'Скачать и установить мобильное приложение ВТБ Онлайн для мобильных телефонов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://db.onlinewebfonts.com/c/535f840c3f8648137acc62e170b62847?family=VTB+Group+Cond+Book" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
      {/* <Header/> */}
        {children}
        </body>
    </html>
  )
}
