// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// const base = import.meta.env.VITE_BASE_PATH || '/';

// // https://vite.dev/config/
// export default defineConfig({
//   base,
//   plugins: [react()],
// })

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load env variables based on current mode (development, production, etc)
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
  });
};

