import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api'],
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@abstracts': path.resolve(__dirname, 'src/styles/abstracts'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/components/organisms'),
            '@templates': path.resolve(__dirname, 'src/components/templates'),
            '@atoms': path.resolve(__dirname, 'src/components/atoms'),
            '@tools': path.resolve(__dirname, 'src/tools'),
        },
    },
});
