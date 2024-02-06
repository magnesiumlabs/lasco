// ============================================================================================= //
//                                             VITE                                              //
// ============================================================================================= //

import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'Lasco'
        },
        rollupOptions: {
            output: {
                banner: '/*! Lasco v${version} */',
                assetFileNames: (assetInfo) => {
                    return assetInfo.name === 'style.css' ? 'lasco.css' : assetInfo.name;
                }
            }
        }
    }
});
