import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // 👈 allows other devices to connect
    port: 5173         // optional, just to be explicit
  }
});
