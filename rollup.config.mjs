import { readFileSync } from 'fs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const pkg = JSON.parse(readFileSync('./package.json'));

const env = process.env.NODE_ENV || 'development';

export default [
  // ESM and CJS
  {
    input: './lib/index.ts',
    plugins: [
      peerDepsExternal(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      typescript()
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
  {
    input: './dist/lib/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
