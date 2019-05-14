import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import { minify } from 'uglify-es'
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve'
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

import livereload from 'rollup-plugin-livereload'

const ComponentName = pkg.componentName;

const extensions = [ '.mjs', '.js', '.jsx', '.json', ".ts", ".tsx" ]

const browserTargets = pkg.browswerlist || "";

const externals = true ? Object.keys(pkg.peerDependencies || {}) : undefined;

const commonjsConfig = true ? {
  extensions,
  // modulesOnly: false,
  include: 'node_modules/**',
  namedExports: {
    'react': ['Fragment', 'useEffect', 'useState', 'Children', 'Component', 'PropTypes', 'createElement'],
    'react-dom': ['render'],
    'react-pdf/dist/entry': ['pdfjs', 'Document', 'Page'],
    'react-pdf/dist/entry.parcel': ['pdfjs', 'Document', 'Page']
  }
} : {}

const resolveConfig = true ? {
  extensions,
  dedupe: ['react', 'react-dom']
} : {}

const babelConfig = true ? {
  babelrc: false,
  extensions,
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  presets: [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": browserTargets,
        loose: true,
      }
    ],
    [
      "@babel/preset-typescript",
      {
        "isTSX": true,
        "allExtensions": true
      }
    ],
    '@babel/preset-react',
  ],
  plugins: ['macros']
} : {}


const outputConfig = {
  file: pkg.main,
  format: "umd",
  name: ComponentName,
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
}

let RollupPlugins = [
  babel(babelConfig),
  replace({
    'process.env.NODE_ENV': JSON.stringify(
      process.env ? 'production' : 'development'
    )
  }),
  resolve(resolveConfig),
  commonjs(commonjsConfig),
  // builtins(),
  globals(),
  uglify({}, minify),
]

if (process.env['LIVE'] ){
  RollupPlugins - [...RollupPlugins, serve({ open: true, contentBase: ['dist', 'demo'] }), livereload()]
}

const rollupConfig = {
  input: pkg.entry,
  output: outputConfig,
  external: externals,
  plugins: RollupPlugins,
};

const { plugins, ..._config } = rollupConfig
console.log("Base Config:", _config)
console.log("Plugins:")
console.log("  =Babel:", babelConfig)
console.log("  =Resolve:", resolveConfig)
console.log("  =CommonJS:", commonjsConfig)
 
export default rollupConfig;