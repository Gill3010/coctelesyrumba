# Cocteles & Rumba 507

Menú web estático para paquetes de open bar con diseño moderno y colores neón.

## 🚀 Desplegar en Firebase Hosting

### Comandos rápidos:

```bash
# Construir el proyecto
npm run build

# Desplegar
firebase deploy --only hosting
```

O ejecuta el script:

```bash
./DEPLOY_FIREBASE.sh
```

### URLs del sitio:
- https://coctelesyrumba507.web.app
- https://coctelesyrumba507.firebaseapp.com

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
  components/
    ├── Header.tsx      # Encabezado principal
    ├── PaqueteCard.tsx # Tarjeta de paquete (reutilizable)
    └── Footer.tsx      # Pie de página
  App.tsx               # Componente principal
```

## 🎨 Tecnologías

- React + TypeScript
- Vite
- Tailwind CSS
- Firebase Hosting
