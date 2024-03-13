import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3020,
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    build: {
        outDir: "./build",
    },
    base: "/ree-s-mac-studio-ucla-ux-ree-chen-2024/",
});
