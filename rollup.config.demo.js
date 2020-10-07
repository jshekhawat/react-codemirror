import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'


export default {
    input: 'demo/index.js',
    output: {
        dir: 'public',
        inlineDynamicImports: true,   
        format: 'cjs',
        sourcemap: true,
        external: [
            "react",
            "react-dom",
            "codemirror"
        ]
    },  
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