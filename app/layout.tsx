import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Configuración óptima de fuentes tipográficas
const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Metadatos estratégicos alineados con tu perfil directivo
export const metadata: Metadata = {
  title: 'Marc Aliaga | From Spain to Russia',
  description: 'Executive research briefings, macro-geopolitical essays, and physical commodity market intelligence framework.',
  keywords: ['International Finance', 'Geopolitical Risk', 'Commodity Trading', 'Eurasian Markets', 'Energy Security'],
  authors: [{ name: 'Marc Aliaga' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
        Inyectamos las variables tipográficas de Geist directamente en las clases,
        asegurando que antialiased limpie los textos para pantallas de alta resolución.
      */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-black`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}