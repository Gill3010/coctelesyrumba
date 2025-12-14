import { useState, useEffect } from 'react'

function Carousel3D() {
  const images = ['/cr1.jpeg', '/cr2.jpeg', '/cr3.png']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 mb-8 px-2 md:px-4" style={{ perspective: '1200px', overflow: 'hidden' }}>
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
        Eventos Destacados
      </h2>
      
      <div 
        className="relative h-[300px] md:h-[500px] w-full"
        style={{ 
          transformStyle: 'preserve-3d',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {images.map((image, index) => {
          const offset = index - currentIndex
          const isActive = index === currentIndex
          const absOffset = Math.abs(offset)

          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                width: '100%',
                height: '100%',
                transform: `
                  translateX(${offset * 85}%)
                  translateZ(${isActive ? 0 : -350}px)
                  rotateY(${offset * 35}deg)
                  scale(${isActive ? 1 : 0.7})
                `,
                opacity: absOffset > 1 ? 0 : 1 - absOffset * 0.5,
                zIndex: isActive ? 10 : 10 - absOffset,
                pointerEvents: isActive ? 'auto' : 'none',
                transformOrigin: 'center center',
              }}
            >
              <div 
                className="w-full h-full bg-slate-900/50 rounded-xl md:rounded-2xl border-2 md:border-4 border-cyan-400/50 flex items-center justify-center p-1 md:p-2"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg md:rounded-xl shadow-2xl"
                  style={{
                    filter: isActive
                      ? 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.6))'
                      : 'brightness(0.6)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-cyan-500/80 hover:bg-cyan-500 text-white rounded-full p-2 md:p-3 transition-all hover:scale-110 shadow-lg"
        aria-label="Anterior"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-cyan-500/80 hover:bg-cyan-500 text-white rounded-full p-2 md:p-3 transition-all hover:scale-110 shadow-lg"
        aria-label="Siguiente"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                : 'w-2 h-2 bg-cyan-400/50 hover:bg-cyan-400/75'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel3D

