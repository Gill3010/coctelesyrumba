interface PaqueteCardProps {
  titulo: string
  precio: string
  caracteristicas: string[]
  gradienteCard: string
  gradienteHeader: string
  gradientePrecio: string
  esPopular?: boolean
  borderEspecial?: boolean
}

function PaqueteCard({
  titulo,
  precio,
  caracteristicas,
  gradienteCard,
  gradienteHeader,
  gradientePrecio,
  esPopular = false,
  borderEspecial = false,
}: PaqueteCardProps) {
  return (
    <div
      className={`${gradienteCard} rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
        borderEspecial ? 'border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]' : ''
      }`}
    >
      <div className={`${gradienteHeader} py-4 px-6`}>
        <h2 className="text-3xl font-bold text-white text-center">
          {titulo}
          <span className="text-xl"> (personas)</span>
        </h2>
        {esPopular && (
          <p className="text-cyan-200 text-center mt-1 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            ⭐ Más Popular
          </p>
        )}
      </div>
      <div className="p-6 bg-white/95">
        <div className="text-center mb-6">
          <span
            className={`text-5xl font-bold bg-gradient-to-r ${gradientePrecio} bg-clip-text text-transparent`}
          >
            {precio}
          </span>
          <p className="text-gray-600 text-sm mt-2">Incluye 7%</p>
        </div>

        <div className="space-y-3 mb-6">
          {caracteristicas.map((caracteristica, index) => (
            <div key={index} className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span
                className={`text-gray-700 ${
                  caracteristica.includes('mixólogo') ? 'font-semibold' : ''
                }`}
              >
                {caracteristica}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaqueteCard

