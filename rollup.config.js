import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import { resolve } from 'path';
export default [
  {
    input: './src/index.js',
    external:['react','clsx'],
    plugins: [
      nodeResolve(),
      commonjs(),
    ],
    output: [
      { format: 'cjs', file: "jsx-runtime/index.js", exports: 'auto',sourcemap:true },
      { format: 'esm', file: 'jsx-runtime/index.mjs',sourcemap:true},
    ],

  },
  {
    input: './src/index.dev.js',
    external:['react','clsx'],
    plugins: [
      nodeResolve(),
      commonjs(),
    ],
    output: [
      { format: 'cjs', file: "jsx-dev-runtime/index.js", exports: 'auto',sourcemap:true },
      { format: 'esm', file: 'jsx-dev-runtime/index.mjs',sourcemap:true},
    ],

  },
  {
    input: resolve(__dirname, './src/index.d.ts'),
    external:['react','clsx'],
    output: [{ file: resolve(__dirname, './jsx-runtime/index.d.ts'), format: 'es' },
    { file: resolve(__dirname, './jsx-dev-runtime/index.d.ts'), format: 'es' }],
    plugins: [
      nodeResolve(),
      commonjs(),
      dts()
    ],

  },
];
