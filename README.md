# 🚀 React-SWC Frontend - Panel de Administración

Un panel de administración moderno y elegante construido con React, Vite y Tailwind CSS, que incluye un sistema completo de autenticación, gestión de usuarios y posts.

## ✨ Características Principales

- **🔐 Autenticación completa** con JWT y localStorage
- **📊 Dashboard responsivo** con métricas en tiempo real
- **👥 Gestión de usuarios** (CRUD completo)
- **📝 Gestión de posts** con paginación y búsqueda
- **🔔 Sistema de notificaciones** personalizado y elegante
- **🎨 Diseño moderno** con gradientes y efectos visuales
- **🐳 Completamente dockerizado** para desarrollo y producción
- **⚡ Vite + SWC** para máxima velocidad de desarrollo

## 🏗️ Estructura del Proyecto

```
react-swc/
├── 📁 src/                          # Código fuente principal
│   ├── 📁 api/                      # Servicios de API
│   │   └── fakeAuth.js             # Autenticación simulada
│   ├── 📁 components/               # Componentes reutilizables
│   │   ├── 📁 auth/                 # Componentes de autenticación
│   │   │   └── LoginForm.jsx       # Formulario de login
│   │   ├── 📁 ui/                   # Componentes de interfaz base
│   │   │   ├── Card.jsx            # Componente de tarjeta
│   │   │   ├── Modal.jsx           # Modal base
│   │   │   ├── SearchBar.jsx       # Barra de búsqueda
│   │   │   ├── Sidebar.jsx         # Barra lateral
│   │   │   ├── Pagination.jsx      # Paginación
│   │   │   └── ToastModal.jsx      # Sistema de notificaciones
│   │   ├── 📁 users/                # Componentes de gestión de usuarios
│   │   │   ├── Avatar.jsx          # Avatar de usuario
│   │   │   ├── RoleBadge.jsx       # Badge de rol
│   │   │   ├── UserActions.jsx     # Acciones de usuario
│   │   │   ├── UserModal.jsx       # Modal de usuario
│   │   │   ├── UsersHeader.jsx     # Encabezado de usuarios
│   │   │   └── 📁 table/           # Tabla de usuarios
│   │   │       ├── UserRow.jsx     # Fila de usuario
│   │   │       └── UsersTable.jsx  # Tabla principal
│   │   └── 📁 posts/                # Componentes de posts
│   │       ├── PostCard.jsx        # Tarjeta de post
│   │       └── SearchBar.jsx       # Búsqueda de posts
│   ├── 📁 constants/                # Constantes de la aplicación
│   │   ├── auth.js                 # Constantes de autenticación
│   │   ├── post.js                 # Constantes de posts
│   │   ├── routes.constant.js      # Rutas de la aplicación
│   │   └── users.js                # Constantes de usuarios
│   ├── 📁 context/                  # Contextos de React
│   │   └── 📁 auth/                # Contexto de autenticación
│   │       └── AuthContext.jsx     # Proveedor de autenticación
│   ├── 📁 hooks/                    # Hooks personalizados
│   │   ├── 📁 auth/                # Hooks de autenticación
│   │   │   ├── useAuth.js          # Hook principal de auth
│   │   │   └── useLoginForm.js     # Hook del formulario de login
│   │   ├── 📁 users/                # Hooks de gestión de usuarios
│   │   │   ├── useUsers.js         # Hook principal de usuarios
│   │   │   └── useSearchUser.js    # Hook de búsqueda de usuarios
│   │   ├── 📁 posts/                # Hooks de posts
│   │   │   └── usePosts.js         # Hook de posts
│   │   └── 📁 ui/                   # Hooks de interfaz
│   │       └── useToast.js         # Hook de notificaciones
│   ├── 📁 layouts/                  # Layouts de la aplicación
│   │   ├── AuthLayout.jsx          # Layout para autenticación
│   │   └── DashboardLayout.jsx     # Layout del dashboard
│   ├── 📁 pages/                    # Páginas de la aplicación
│   │   ├── 📁 auth/                # Páginas de autenticación
│   │   │   └── LoginPage.jsx       # Página de login
│   │   └── 📁 dashboard/           # Páginas del dashboard
│   │       ├── DashboardPage.jsx   # Página principal
│   │       ├── UsersPage.jsx       # Página de usuarios
│   │       └── PostsPage.jsx       # Página de posts
│   ├── 📁 routes/                   # Configuración de rutas
│   │   ├── AppRoutes.jsx           # Rutas principales
│   │   ├── ProtectedRoute.jsx      # Ruta protegida
│   │   └── PublicRoute.jsx         # Ruta pública
│   ├── App.jsx                      # Componente principal
│   ├── main.jsx                     # Punto de entrada
│   ├── index.css                    # Estilos globales
│   └── index.js                     # Archivo de índice
├── 📁 public/                       # Archivos públicos
│   └── vite.svg                     # Icono de Vite
├── 🐳 Docker/                       # Configuración de Docker
│   ├── Dockerfile                   # Imagen de producción
│   ├── Dockerfile.dev               # Imagen de desarrollo
│   ├── docker-compose.yml           # Producción
│   ├── docker-compose.dev.yml       # Desarrollo
│   ├── .dockerignore                # Archivos excluidos
│   ├── docker-scripts.sh            # Scripts automatizados
│   └── Makefile                     # Alternativa con make
├── 📄 package.json                  # Dependencias y scripts
├── 📄 vite.config.js                # Configuración de Vite
├── 📄 tailwind.config.js            # Configuración de Tailwind
├── 📄 postcss.config.js             # Configuración de PostCSS
├── 📄 eslint.config.js              # Configuración de ESLint
└── 📄 README.md                     # Esta documentación
```

## 🚀 Instalación y Ejecución

### 📋 Prerrequisitos

- **Node.js**: 20.19+ o 22.12+ (Opcional)
- **npm**: 9.0+ o **yarn**: 1.22+
- **Docker**: 20.10+ (recomendado, para containerización)

### 🔧 Instalación Local

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd react-swc

# Instalar dependencias
npm install
# o
yarn install

# Ejecutar en modo desarrollo
npm run dev
# o
yarn dev
```

### 🐳 Ejecución con Docker (Recomendado)

#### Desarrollo (con Hot Reload)
```bash
# Construir imagen de desarrollo
./docker-scripts.sh build-dev

# Ejecutar contenedor de desarrollo
./docker-scripts.sh run-dev

# La aplicación estará disponible en: http://localhost:5173
```

#### Producción
```bash
# Construir imagen de producción
./docker-scripts.sh build

# Ejecutar contenedor de producción
./docker-scripts.sh run

# La aplicación estará disponible en: http://localhost:3000
```

#### Comandos Útiles
```bash
# Ver todos los comandos disponibles
./docker-scripts.sh

# Ver logs
./docker-scripts.sh logs-dev      # Desarrollo
./docker-scripts.sh logs          # Producción

# Detener contenedores
./docker-scripts.sh stop

# Limpiar todo
./docker-scripts.sh clean
```

### 🔄 Alternativa con Make

```bash
# Ver todos los comandos
make help

# Desarrollo
make build-dev
make run-dev

# Producción
make build
make run

# Detener
make stop
```

## 🔑 Credenciales de Prueba

- **Usuario**: `admin`
- **Contraseña**: `1234`

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
npm run lint         # Ejecutar ESLint
```

## 🎨 Tecnologías Utilizadas

- **⚛️ React 19** - Biblioteca de interfaz de usuario
- **⚡ Vite 7** - Herramienta de construcción rápida
- **🦀 SWC** - Compilador rápido de Rust
- **🎨 Tailwind CSS 4** - Framework de CSS utilitario
- **🔄 React Router 7** - Enrutamiento de la aplicación
- **🎯 Lucide React** - Iconos modernos y ligeros
- **📡 Axios** - Cliente HTTP para peticiones API
- **🐳 Docker** - Containerización completa

## 🔔 Sistema de Notificaciones

El proyecto incluye un sistema de notificaciones personalizado (`ToastModal`) que ofrece:

- **4 tipos de notificaciones**: Success, Error, Warning, Info
- **Modal de confirmación** para acciones destructivas
- **Diseño consistente** con la paleta de colores del proyecto
- **Animaciones suaves** y efectos visuales elegantes

### Uso Rápido

```jsx
import { useToast } from './hooks/ui/useToast';
import ToastModal from './components/ui/ToastModal';

const MyComponent = () => {
  const { toast, showSuccess, showError, showConfirm, closeToast } = useToast();

  const handleSuccess = () => {
    showSuccess('¡Éxito!', 'Operación completada correctamente');
  };

  const handleDelete = () => {
    showConfirm(
      'Confirmar eliminación',
      '¿Estás seguro de eliminar este elemento?',
      () => console.log('Eliminado')
    );
  };

  return (
    <div>
      <button onClick={handleSuccess}>Mostrar Éxito</button>
      <button onClick={handleDelete}>Eliminar</button>
      
      <ToastModal
        isOpen={toast.isOpen}
        onClose={closeToast}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onConfirm={toast.onConfirm}
        confirmText={toast.confirmText}
        cancelText={toast.cancelText}
        showConfirmButton={toast.showConfirmButton}
      />
    </div>
  );
};
```

## 🚀 Despliegue

### Despliegue Local con Docker

```bash
# Construir imagen de producción
docker build -t react-swc-frontend:latest .

# Ejecutar contenedor
docker run -d -p 3000:3000 --name react-swc-frontend react-swc-frontend:latest
```

### Despliegue en Producción

```bash
# Construir imagen final
docker build -t react-swc-frontend:latest .


## 🔧 Configuración

### Variables de Entorno

```bash
# .env
NODE_ENV=development
VITE_APP_TITLE=React SWC Frontend
VITE_API_URL=http://localhost:3001
```

## 🐛 Solución de Problemas

### Problemas Comunes

#### Puerto ya en uso
```bash
# Ver qué está usando el puerto
sudo lsof -i :5173
sudo lsof -i :3000

# Detener el proceso
sudo kill -9 <PID>
```

#### Problemas de Docker
```bash
# Limpiar contenedores e imágenes
./docker-scripts.sh clean

# Reconstruir sin cache
docker build --no-cache -t react-swc-frontend .
```

#### Problemas de Dependencias
```bash
# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install
```