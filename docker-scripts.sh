#!/bin/bash

echo "Scripts de Docker para React-SWC Frontend"
echo "=============================================="

case "$1" in
  "build")
    echo " Construyendo imagen de producción..."
    docker build -t react-swc-frontend .
    echo " Imagen construida exitosamente"
    ;;
    
  "build-dev")
    echo " Construyendo imagen de desarrollo..."
    docker build -f Dockerfile.dev -t react-swc-frontend-dev .
    echo " Imagen de desarrollo construida exitosamente"
    ;;
    
  "run")
    echo " Ejecutando contenedor de producción..."
    docker-compose up -d
    echo " Contenedor ejecutándose en http://localhost:3000"
    ;;
    
  "run-dev")
    echo " Ejecutando contenedor de desarrollo..."
    docker-compose -f docker-compose.dev.yml up -d
    echo " Contenedor de desarrollo ejecutándose en http://localhost:5173"
    ;;
    
  "stop")
    echo " Deteniendo contenedores..."
    docker-compose down
    docker-compose -f docker-compose.dev.yml down
    echo " Contenedores detenidos"
    ;;
    
  "logs")
    echo " Mostrando logs del contenedor de producción..."
    docker-compose logs -f frontend
    ;;
    
  "logs-dev")
    echo " Mostrando logs del contenedor de desarrollo..."
    docker-compose -f docker-compose.dev.yml logs -f frontend-dev
    ;;
    
  "clean")
    echo " Limpiando contenedores e imágenes..."
    docker-compose down --rmi all --volumes --remove-orphans
    docker-compose -f docker-compose.dev.yml down --rmi all --volumes --remove-orphans
    docker system prune -f
    echo " Limpieza completada"
    ;;
    
  *)
    echo "Uso: $0 {build|build-dev|run|run-dev|stop|logs|logs-dev|clean}"
    echo ""
    echo "Comandos disponibles:"
    echo "  build      - Construir imagen de producción"
    echo "  build-dev  - Construir imagen de desarrollo"
    echo "  run        - Ejecutar contenedor de producción"
    echo "  run-dev    - Ejecutar contenedor de desarrollo"
    echo "  stop       - Detener todos los contenedores"
    echo "  logs       - Ver logs de producción"
    echo "  logs-dev   - Ver logs de desarrollo"
    echo "  clean      - Limpiar contenedores e imágenes"
    ;;
esac 