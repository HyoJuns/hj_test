import babel from 'esbuild-plugin-babel';
import esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';
import commonjsPlugin from '@chialab/esbuild-plugin-commonjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('Build...')

esbuild
    .build({
        entryPoints : [
            path.join(__dirname, 'build', 'index.js')
        ],
        bundle : true,
        outfile : path.join(__dirname, "dist", "hj_min_server.js"),
        // plugins: [babel()]
        plugins : [commonjsPlugin()]
    })
    .then(() => {
        console.log('Success')
    })
    .catch(() => {
        console.log('Error')
        process.exit(1)
    })