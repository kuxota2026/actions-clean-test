import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      'tests/**',      // ← 【追加】Playwrightのテストフォルダを除外
      '**/*.spec.ts',   // ← 【追加】.spec.ts ファイル（Playwright用）を除外
    ],
    environment: 'jsdom',
    globals: true,
  },
})