import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
    	alias: {
      		"@": path.resolve(__dirname, "src"),
    	},
    },
    server: {
      host: '0.0.0.0',
      port: command === 'serve' ? Number(process.env.VITE_PORT) || 2315 : undefined,
      open: command === 'serve' ? process.env.VITE_OPEN_BROWSER === 'true' : false,
    },
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
    },
  }
})
