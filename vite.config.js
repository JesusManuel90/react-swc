import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['react-swc.onrender.com', 'localhost', '127.0.0.1'],
    host: '0.0.0.0',
    port: 3000
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
