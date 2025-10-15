import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import KatWidget from '../components/KatWidget/KatWidget';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MOGROUP S.A. - Líder en Logística y Suministros B2B Panamá',
  description: 'Empresa panameña constituida especializada en logística, transporte y suministros B2B. 379+ productos certificados, tecnología avanzada con IA.',
  keywords: 'MOGROUP, logística Panamá, transporte empresarial, suministros B2B, Kathia Araúz Rivera',
  authors: [{ name: 'MOGROUP S.A.' }],
  openGraph: {
    title: 'MOGROUP S.A. - Logística Empresarial Panamá',
    description: 'Líder en logística, transporte y suministros B2B en Panamá desde 2018',
    type: 'website',
  }
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
        <KatWidget />
      </body>
    </html>
  )
}



