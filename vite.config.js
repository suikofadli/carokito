import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { hash } from "./resources/js/utils";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.js",
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `[name]` + hash + `.js`,
                chunkFileNames: `[name]` + hash + `.js`,
                assetFileNames: `[name]` + hash + `.[ext]`,
            },
        },
    },
});
