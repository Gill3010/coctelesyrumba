function Logo() {
  return (
    <div className="fixed top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-50">
      <img
        src="/logo.png"
        alt="Cocteles & Rumba 507"
        className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))',
          maxWidth: '150px',
        }}
      />
    </div>
  )
}

export default Logo

