/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración actualizada para Next.js 15.5.4
  serverExternalPackages: ['sharp'],
  
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
  
  // Optimizaciones
  reactStrictMode: true,
}

module.exports = nextConfig
