import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'

const external = [
    "react",
    "react-dom",
    "codemirror"
]

const commonOpts = {
    input: 'index.js',
    external: external,
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        resolve(),
        postcss(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'         
        }),
        commonjs(),
    ]
}

export default [
    {
        ...commonOpts,
        output: {
            file: 'dist/esm/index.js',
            inlineDynamicImports: true,   
            format: "esm",            
        }
    },{
    ...commonOpts,
    output: {
        file: 'dist/cjs/index.js',
        inlineDynamicImports: true,   
        format: "cjs",
        exports: "named"      
        }
    }   
]