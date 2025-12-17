#!/bin/bash

# Script para desplegar en Firebase Hosting

echo "🚀 Desplegando Cocteles & Rumba 507 a Firebase Hosting..."

# 1. Verificar que estás en el proyecto correcto
echo "📋 Verificando proyecto..."
firebase use coctelesyrumba507

# 2. Construir el proyecto
echo "🔨 Construyendo proyecto..."
npm run build

# 3. Desplegar a Firebase Hosting
echo "☁️  Desplegando a Firebase Hosting..."
firebase deploy --only hosting

echo "✅ ¡Despliegue completado!"
echo "🌐 Tu sitio estará disponible en:"
echo "   https://coctelesyrumba507.web.app"
echo "   https://coctelesyrumba507.firebaseapp.com"




