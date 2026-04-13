import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/setupTests.ts',
		exclude: [...configDefaults.exclude],
	},
});
