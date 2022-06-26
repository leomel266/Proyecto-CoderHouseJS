import esbuild from 'esbuild';

esbuild.buildSync({
    entryPoints: ['./js/main.js'],
    bundle: true,
    minify: true,
    target: ['chrome58', 'firefox57', 'safari11'],
    outdir: './dist',
})