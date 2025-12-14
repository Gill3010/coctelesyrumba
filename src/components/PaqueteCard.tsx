interface PaqueteCardProps {
  titulo: string
  precio: string
  caracteristicas: string[]
  gradienteCard: string
  gradienteHeader: string
  gradientePrecio: string
  esPopular?: boolean
  borderEspecial?: boolean
  numeroPaquete: number
  animationDelay?: number
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
  numeroPaquete,
  animationDelay = 0,
}: PaqueteCardProps) {
  return (
    <div
      className={`${gradienteCard} rounded-3xl shadow-2xl overflow-hidden transform hover:scale-110 transition-all duration-300 animate-fade-up-zoom-in opacity-0 ${
        borderEspecial ? 'border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]' : ''
      }`}
      style={{
        animationDelay: `${animationDelay}ms`,
      }}
    >
      <div className={`${gradienteHeader} py-4 px-6`}>
        <h2 className="text-3xl font-bold text-white text-center">
          <div>Paquete {numeroPaquete}</div>
          <div className="text-2xl">
            {titulo.replace('Paquete ', '')}
            <span className="text-xl"> (personas)</span>
          </div>
        </h2>
        {esPopular && (
          <p className="text-cyan-200 text-center mt-1 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-cyan-200">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
            Más Popular
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
              <div className="flex-shrink-0 mr-3 mt-0.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-500"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="currentColor"
                    className="text-green-500"
                    opacity="0.1"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-green-500"
                    opacity="0.3"
                  />
                </svg>
              </div>
              <span
                className={`text-gray-700 flex-1 ${
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

