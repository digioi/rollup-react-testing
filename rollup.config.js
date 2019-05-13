import pkg from './package.json';
import babel from 'rollup-plugin-babel';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve'
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

import livereload from 'rollup-plugin-livereload'

const ComponentName = pkg.componentName;

const extensions = [ '.mjs', '.js', '.jsx', '.json', ".ts", ".tsx" ]

const browserTargets = pkg.browswerlist || "";

const externals = false ? Object.keys(pkg.dependencies || {}) : undefined;

const commonjsConfig = true ? {
  extensions,
  modulesOnly: false,
  include: 'node_modules/**',

} : {}

const resolveConfig = true ? {
  extensions,
  namedExports: {
    'node_modules/react/index.js': ['Fragments', 'useEffect', 'useState', 'Children', 'Component', 'PropTypes', 'createElement'],
  },
  dedupe: ['react']
} : {}

const babelConfig = true ? {
  babelrc: false,
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
    '@babel/preset-react',
    // [
    //   "@babel/preset-typescript",
    //   {
    //     "isTSX": true,
    //     "allExtensions": true
    //   }
    // ],
  ],
  plugins: [
    // "styled-jsx/babel"
  ]
} : {}


const outputConfig = {
  file: pkg.main,
  format: "iife",
  name: ComponentName,
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@react-pdf/renderer': "ReactPDF",
  },
}

let RollupPlugins = [
  resolve(resolveConfig),
  commonjs(commonjsConfig),
  babel(babelConfig),
  globals(),
  builtins(),
]

if (process.env['LIVE'] ){
  RollupPlugins - [...RollupPlugins, serve({ open: true, contentBase: ['dist', 'demo'] }), livereload()]
}

const rollupConfig = {
  input: pkg.entry,
  output: outputConfig,
  external: externals,
  plugins: RollupPlugins
};

const { plugins, ..._config } = rollupConfig
console.log("Base Config:", _config)
console.log("Plugins:")
console.log("  =Babel:", babelConfig)
console.log("  =Resolve:", resolveConfig)
console.log("  =CommonJS:", commonjsConfig)
 
export default rollupConfig;