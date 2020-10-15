import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import dotenv from 'dotenv'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import { version, main, module, browser } from './package.json'
import livereload from 'rollup-plugin-livereload'
const banner = `/**
 * rollup-kit-template v${version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`

const envParse = dotenv.config({
  path: `./.env.${process.env.NODE_ENV}`
})

let env = envParse.parsed

let { SDK_TEMP_VERSION } = env

let terserOptions = {}
if (process.env.NODE_ENV === 'production') {
  terserOptions.compress = {
    drop_debugger: true,
    drop_console: true,
    pure_funcs: ['console.log'] // 移除console
  }
}

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: main,
      format: 'cjs'
    },
    {
      banner,
      file: module,
      format: 'es'
    },
    {
      banner,
      file: browser,
      format: 'umd',
      name: 'index'
    }
  ],
  plugins: [
    resolve({
      mainFields: ['module', 'main'],
      browser: true,
      // main 和 browser 属性将使插件决定将那些文件应用到bundle中
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    livereload(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.SDK_TEMP_VERSION': JSON.stringify(SDK_TEMP_VERSION)
    }),
    process.env.NODE_ENV !== 'development' && terser(terserOptions)
  ]
}
