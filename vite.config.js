import { defineConfig } from 'vite';
import path from 'path';
import handlebars from 'vite-plugin-handlebars';
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { hulakPlugins } from 'vite-plugin-hulak-tools';
import fs from 'fs';

const partialDirs = [
  path.resolve(__dirname, 'src/html/components'),
  path.resolve(__dirname, 'src/html/components/header'),
  path.resolve(__dirname, 'src/html/components/home'),

]
const pagesDir = path.resolve(__dirname, 'src/html/pages');
const pages = Object.fromEntries(
  fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.html'))
    .map(file => [
      file.replace('.html', ''),
      path.resolve(pagesDir, file)
    ])
);

export default defineConfig(({ mode }) => {
  const isDeploy = mode === "deploy";
  const basePath = isDeploy ? "/Flowers/" : "/";
  return{

    root: 'src',
     base: basePath,
    appType: 'mpa',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      hulakPlugins({
        enableHandlebars: true,
        handlebarsOptions: {
          partialDirectory: 'src/html/components',
        },
      }),
      handlebars({
        partialDirectory: partialDirs,
        watch: true,
      }),
      createHtmlPlugin({
        minify: false,
        inject: false,
      }),
  
      svgSpritePlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/img/icons')],
        symbolId: 'icons-[name]',
        inject: 'body-last',
        customDomId: 'svg-sprite',
        svgoConfig: false,
      }),
  
      {
        name: 'hmr-hbs-partials',
        configureServer(server) {
          server.watcher.add(partialDirs);
          server.watcher.on('change', file => {
            if (partialDirs.some(dir => file.startsWith(dir))) {
              server.ws.send({ type: 'full-reload' });
            }
          });
        },
      },
    ],
    server: {
      watch: {
        usePolling: true,
      },
    },
  
    build: {
      minify: 'esbuild',
      outDir: path.resolve(__dirname, 'dist'),
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'src/index.html'),
          ...pages
        },
        output: {
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          assetFileNames: ({ name }) => {
            if (name && name.endsWith('.css')) return 'css/[name].css';
            return 'assets/[name][extname]';
          },
        },
      },
    },
  }
});