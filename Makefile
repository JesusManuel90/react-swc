.PHONY: help build build-dev run run-dev stop logs logs-dev clean

help: ## Mostrar esta ayuda
	@echo " Comandos disponibles para React-SWC Frontend"
	@echo "=============================================="
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Construir imagen de producción
	@echo " Construyendo imagen de producción..."
	docker build -t react-swc-frontend .
	@echo " Imagen construida exitosamente"

build-dev: ## Construir imagen de desarrollo
	@echo " Construyendo imagen de desarrollo..."
	docker build -f Dockerfile.dev -t react-swc-frontend-dev .
	@echo " Imagen de desarrollo construida exitosamente"

run: ## Ejecutar contenedor de producción
	@echo " Ejecutando contenedor de producción..."
	docker-compose up -d
	@echo " Contenedor ejecutándose en http://localhost:3000"

run-dev: ## Ejecutar contenedor de desarrollo
	@echo " Ejecutando contenedor de desarrollo..."
	docker-compose -f docker-compose.dev.yml up -d
	@echo " Contenedor de desarrollo ejecutándose en http://localhost:5173"

stop: ## Detener todos los contenedores
	@echo " Deteniendo contenedores..."
	docker-compose down
	docker-compose -f docker-compose.dev.yml down
	@echo " Contenedores detenidos"

logs: ## Ver logs de producción
	@echo " Mostrando logs del contenedor de producción..."
	docker-compose logs -f frontend

logs-dev: ## Ver logs de desarrollo
	@echo " Mostrando logs del contenedor de desarrollo..."
	docker-compose -f docker-compose.dev.yml logs -f frontend-dev

clean: ## Limpiar contenedores e imágenes
	@echo "🧹 Limpiando contenedores e imágenes..."
	docker-compose down --rmi all --volumes --remove-orphans
	docker-compose -f docker-compose.dev.yml down --rmi all --volumes --remove-orphans
	docker system prune -f
	@echo " Limpieza completada"

status: ## Mostrar estado de los contenedores
	@echo " Estado de los contenedores:"
	@docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

restart: stop run ## Reiniciar contenedor de producción

restart-dev: stop run-dev ## Reiniciar contenedor de desarrollo 