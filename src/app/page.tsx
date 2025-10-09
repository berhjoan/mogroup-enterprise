import NavegacionPremium from "@/components/NavegacionPremium";
import FooterPremium from "@/components/FooterPremium";
import Link from "next/link";
import Image from "next/image";
import { Truck, Package, ShoppingCart, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <NavegacionPremium />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-semibold">Líder en Soluciones B2B en Panamá</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Impulsamos tu
                <br />
                <span className="text-blue-200">Negocio</span> con
                <br />
                Soluciones Integrales
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Transporte, Logística, Trámites Aduanales, Desarrollo de Software y Venta de Insumos B2B.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/cotizar"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/catalogo"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all border border-white/20"
                >
                  Ver Catálogo
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
                <div>
                  <div className="text-4xl font-bold mb-1">+7</div>
                  <div className="text-blue-200 text-sm">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">24/7</div>
                  <div className="text-blue-200 text-sm">Atención Continua</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-blue-200 text-sm">Confiable</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Package className="w-32 h-32 mx-auto mb-4 opacity-80" />
                    <p className="text-xl font-semibold">Tu Socio Logístico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones completas para tu empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1: Transporte */}
            <Link href="/servicios/transporte" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Truck className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transporte</h3>
              <p className="text-gray-600 mb-4">Transporte de carga confiable y eficiente con trazabilidad completa.</p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                Ver más <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Servicio 2: Logística */}
            <Link href="/servicios/logistica" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Package className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Logística</h3>
              <p className="text-gray-600 mb-4">Gestión completa de tu cadena de suministro con tecnología de punta.</p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                Ver más <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Servicio 3: Insumos */}
            <Link href="/servicios/insumos" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <ShoppingCart className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Insumos B2B</h3>
              <p className="text-gray-600 mb-4">Más de 500 productos para tu empresa con el mejor precio garantizado.</p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                Ver más <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para optimizar tu negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo MOGROUP puede transformar tu operación
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            Contáctanos Ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <FooterPremium />
    </>
  );
}

