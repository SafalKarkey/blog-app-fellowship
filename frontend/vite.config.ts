import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
    // Optional: Configure server for development
    server: {
      port: 5173,
      host: true, // Allow external connections
    },
    // Optional: Configure build output
    // build: {
    //   outDir: 'dist',
    //   assetsDir: 'assets',
    //   sourcemap: command === 'serve', // Source maps only in dev
    // },
  }
})


