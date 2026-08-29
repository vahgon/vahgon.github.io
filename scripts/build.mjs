import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./_js/site.anim.js'],
  bundle: true,
  minify: true,
  treeShaking: true,
  outdir: './assets/js/dist',
})
