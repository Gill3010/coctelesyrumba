function Footer() {
  return (
    <div className="mt-12">
      {/* Opción sin paquete */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 rounded-2xl p-8 text-center border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)]">
        <p className="text-2xl md:text-3xl font-bold text-white mb-4">
          🍹 ¿No necesitas un paquete completo?
        </p>
        <p className="text-xl md:text-2xl text-white font-semibold mb-2">
          También ofrecemos:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-4">
          <div className="bg-white/20 rounded-xl px-6 py-4 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-white font-bold">
              🍸 Servicio Profesional
            </p>
            <p className="text-white/90 text-sm md:text-base mt-1">
              Barra, bartenders y saloneros
            </p>
          </div>
          <div className="text-3xl text-cyan-300 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">+</div>
          <div className="bg-white/20 rounded-xl px-6 py-4 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-white font-bold">
              🚚 Barra Móvil
            </p>
            <p className="text-white/90 text-sm md:text-base mt-1">
              Montaje y desmontaje
            </p>
          </div>
        </div>
        <p className="text-lg md:text-xl text-cyan-200 font-semibold mt-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          ¡Contáctanos para un presupuesto personalizado!
        </p>
      </div>
    </div>
  )
}

export default Footer

