import "./globals.css";
import ChatWidget from "./_components/kat/ChatWidget";
import './globals.css';
import Navbar from './components/common/Navbar';

export const metadata = {
  title: { template: '%s | MOGroup', default: 'MOGroup' },
  description: 'Insumos, transporte y logística B2B con catálogo público sin precios, cotización automática y SLA 48h.',
  metadataBase: new URL('http://localhost:3000')
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
              <ChatWidget />
</body>
    </html>
  );
}



