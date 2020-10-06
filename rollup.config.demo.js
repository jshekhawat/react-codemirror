import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

export default {
    input: 'demo/index.js',
    output: {
        file: 'demo/bundle.js',
        format: 'cjs',
        sourcemap: true
    },
    externals: [
        "react",
        "react-dom"
    ],
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        resolve(),
        babel({
            exclude: 'node_modules/**'         
        }),
        commonjs(),
    ]
}