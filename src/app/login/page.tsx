'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, User, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (username === 'BKSYSTEM' && password === '20462108') {
        localStorage.setItem('userRole', 'admin')
        localStorage.setItem('username', 'BKSYSTEM')
        router.push('/admin/proveedores')
      }
      else if (username === 'Henry' && password === 'Henry2046') {
        localStorage.setItem('userRole', 'client')
        localStorage.setItem('username', 'Henry')
        localStorage.setItem('clientId', 'henry')
        router.push('/catalogo')
      }
      else {
        setError('Usuario o contraseña incorrectos')
        setLoading(false)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 p-2 shadow-xl">
              <Image src="/logo.jpg" alt="MOGROUP" width={80} height={80} className="rounded-full object-cover" />
            </div>
            <h1 className="text-2xl font-bold mb-2">MOGROUP-ENTERPRISE</h1>
            <p className="text-blue-100 text-sm">Sistema de Gestión Integral</p>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-700 text-sm font-semibold">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                  Usuario
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Ingrese su usuario"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Ingrese su contraseña"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg disabled:opacity-50"
              >
                {loading ? 'Validando...' : 'Iniciar Sesión'}
              </button>
            </form>

            
    </div>
  )
}


