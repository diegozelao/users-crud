import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import * as path from 'path'

const projectRootDir = path.resolve(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // alias: [{ find: '@', replacement: path.resolve(projectRootDir, 'src') }],
    alias: {
      '@': path.resolve(projectRootDir, 'src'),
    }
  },
  plugins: [react(), alias()],
  server: {
    port: 3001
  }
})
