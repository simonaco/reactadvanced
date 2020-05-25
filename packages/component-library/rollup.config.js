// node-resolve will resolve all the node dependencies
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import bundleSize from 'rollup-plugin-bundle-size'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/component.bundle.js',
    format: 'cjs',
  },
  // All the used libs needs to be here
  external: [
    'react',
    'react-dom',
    'prop-types',
    'styled-components',
    'styled-system',
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      namedExports: {
        'react-is': ['typeOf', 'isElement', 'isValidElementType'],
      },
    }),
    terser(),
    bundleSize(),
  ],
}
