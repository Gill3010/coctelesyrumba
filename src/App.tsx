import './App.css'
import Header from './components/Header'
import PaqueteCard from './components/PaqueteCard'
import Footer from './components/Footer'

function App() {
  const paquetes = [
    {
      titulo: 'Paquete 20-50',
      precio: '481.50',
      caracteristicas: [
        'Montaje de bar y desmontaje',
        'Coolers',
        'Hielo',
        'Vasos plástico de 12 oz',
        '3 Cócteles de autor o clásicos',
        'Insumos',
        '4 horas open bar',
        '1 mixólogo',
      ],
      gradienteCard: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600',
      gradienteHeader: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500',
      gradientePrecio: 'from-cyan-400 to-blue-500',
      esPopular: false,
      borderEspecial: false,
    },
    {
      titulo: 'Paquete 60-90',
      precio: '749.00',
      caracteristicas: [
        'Montaje de bar y desmontaje',
        'Coolers',
        'Hielo',
        'Vasos plástico de 12 oz',
        '3 Cócteles de autor o clásicos',
        '4 horas open bar',
        'Insumos',
        '2 mixólogos',
      ],
      gradienteCard: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600',
      gradienteHeader: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500',
      gradientePrecio: 'from-blue-400 to-cyan-400',
      esPopular: true,
      borderEspecial: true,
    },
    {
      titulo: 'Paquete 90-150',
      precio: '$1,551.50',
      caracteristicas: [
        'Montaje de bar y desmontaje',
        'Coolers',
        'Hielo',
        'Vasos plástico de 12 oz',
        '3 Cócteles de autor o clásicos',
        '4 horas open bar',
        '3 mixólogos',
      ],
      gradienteCard: 'bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700',
      gradienteHeader: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600',
      gradientePrecio: 'from-cyan-500 to-blue-600',
      esPopular: false,
      borderEspecial: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-8">
          {paquetes.map((paquete, index) => (
            <PaqueteCard
              key={index}
              titulo={paquete.titulo}
              precio={paquete.precio}
              caracteristicas={paquete.caracteristicas}
              gradienteCard={paquete.gradienteCard}
              gradienteHeader={paquete.gradienteHeader}
              gradientePrecio={paquete.gradientePrecio}
              esPopular={paquete.esPopular}
              borderEspecial={paquete.borderEspecial}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
