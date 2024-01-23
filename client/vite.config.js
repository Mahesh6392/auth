// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // Ensure there is no alias conflicting with 'axios'
    },
  },
});
