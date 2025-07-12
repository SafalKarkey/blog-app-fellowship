// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// const base = import.meta.env.VITE_BASE_PATH || '/';

// // https://vite.dev/config/
// export default defineConfig({
//   base,
//   plugins: [react()],
// })

import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { ConfigEnv } from 'vite';

export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
  });
};


