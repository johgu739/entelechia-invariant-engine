import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: false, // CRITICAL: Disable tree-shaking to ensure all invariant imports are preserved
  noExternal: [], // Allow external deps
})

