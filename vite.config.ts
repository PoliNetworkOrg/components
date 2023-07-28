import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import tspaths from "vite-tsconfig-paths"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/components/",
  plugins: [
    react(),
    svgr(),
    tspaths(),
    dts({
      include: "src/**/*",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "@polinetwork/components",
      fileName: format => `index.${format}.js`,
    },
  },
})
