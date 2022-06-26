import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['./js/main.js'],
    bundle: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11'],
    outdir: './dist',
    watch:true
}).then(response=>console.log(response)).catch(error => console.log(error));