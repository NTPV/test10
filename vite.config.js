import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/test10/', // Укажите имя вашего репозитория
  plugins: [vue()],
  // Другие настройки, если необходимо
});