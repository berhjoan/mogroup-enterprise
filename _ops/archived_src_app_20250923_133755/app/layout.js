import "./globals.css"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import ChatbotKAT from "../components/chat/ChatbotKAT"

export const metadata = {
  title: "MOGROUP Enterprise OS",
  description: "Plataforma IA + CRM/ERP para Insumos, Transporte y Logística"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ChatbotKAT />
      </body>
    </html>
  )
}
