"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simular autenticación (aquí se conectará con el backend)
    if (credentials.username === 'admin' && credentials.password === 'admin20462108') {
      // Guardar token de sesión
      localStorage.setItem('mogroup_admin_token', 'authenticated');
      router.push('/admin/dashboard');
    } else {
      setError('Credenciales incorrectas');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mogroup-blue to-mogroup-dark flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-mogroup-blue">MOGROUP</h1>
          <p className="text-gray-600 mt-2">Panel Administrativo</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Usuario
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-mogroup-blue"
              placeholder="admin"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-mogroup-blue"
              placeholder="••••••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-mogroup-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Ingresando...' : 'Ingresar al Sistema'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            MOGROUP-ENTERPRISE OS v8.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
