"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EnterprisePage() {
  const router = useRouter();

  useEffect(() => {
    // Verificar si hay sesión
    const auth = localStorage.getItem("mogroup_auth");
    
    if (auth) {
      // Si hay sesión, ir al dashboard
      router.replace("/enterprise/dashboard");
    } else {
      // Si no hay sesión, ir al login
      router.replace("/enterprise/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg">Verificando acceso...</p>
      </div>
    </div>
  );
}
