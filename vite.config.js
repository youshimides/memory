
import { defineConfig } from "vite";
import inspect from "vite-plugin-inspect";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    base:"/memory/",
  plugins:
   [inspect(),
    ViteImageOptimizer({
         png: {
            quality: 30,
            },
      }),
   ],
   
});