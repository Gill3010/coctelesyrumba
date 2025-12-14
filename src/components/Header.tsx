function Header() {
  return (
    <div className="text-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 px-4">
      {/* Marca Principal */}
      <h1 
        className="text-6xl md:text-8xl text-white mb-3 drop-shadow-2xl flex items-center justify-center gap-4 flex-wrap"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          letterSpacing: '3px',
          textShadow: '0 0 30px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.4), 0 0 90px rgba(34, 211, 238, 0.2)',
          background: 'linear-gradient(135deg, #ffffff 0%, #22d3ee 50%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <span>Cócteles & Rumba</span>
        <span
          className="text-7xl md:text-9xl text-white"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontWeight: 400,
            letterSpacing: '2px',
            textShadow: '0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.4)',
            WebkitBackgroundClip: 'unset',
            WebkitTextFillColor: 'white',
            backgroundClip: 'unset',
          }}
        >
          507
        </span>
      </h1>
      
      {/* Firma del Dueño */}
      <div className="mb-4">
        <p 
          className="text-2xl md:text-3xl text-cyan-200"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontWeight: 400,
            letterSpacing: '3px',
            transform: 'rotate(-1.5deg)',
            textShadow: '0 0 15px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.3)',
            marginTop: '-10px',
          }}
        >
          By Elvis Martínez
        </p>
      </div>
      
      {/* Descripción */}
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <p 
          className="text-xl md:text-2xl leading-relaxed italic relative z-10"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 600,
            letterSpacing: '1.5px',
            color: '#ffffff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(34, 211, 238, 0.6), 0 0 30px rgba(34, 211, 238, 0.4)',
            lineHeight: '1.9',
          }}
        >
          Somos un servicio de coctelería, mixología y bar personalizado, donde haremos de tu evento, una experiencia única y divertida en Panamá.
        </p>
      </div>
    </div>
  )
}

export default Header

