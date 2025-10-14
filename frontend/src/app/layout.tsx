import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import KatWidget from '@/components/ui/KatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MOGROUP - Logística y Transporte Empresarial',
  description: 'Soluciones integrales de logística, transporte e insumos B2B en Panamá',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        {/* <KatWidget /> */}
      </body>
    </html>
  )
}
