import { resolve } from 'path';
import { defineConfig } from 'vite';
import sharedViteConfig from '../shared/src/util/vite';

export default defineConfig({
    ...sharedViteConfig,
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'ui',
            fileName: 'index',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
        },
    },
});
