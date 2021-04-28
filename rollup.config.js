import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist',
      format: 'es',
    },
    // {
    //   dir: 'dist/iife',
    //   format: 'iife',
    // },
  ],
  preserveModules: false,
  external: Object.keys(pkg.dependencies),
  plugins: [
    postcss({
      extract: false,
      modules: true,
      plugins: [autoprefixer()],
    }),
    resolve({ extensions: ['.jsx', '.js', '.tsx'] }),
    babel({
      extensions: ['.jsx', '.js', '.tsx'],
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
    }),
    json(),
    commonjs({}),

    //terser(),
  ],
};
