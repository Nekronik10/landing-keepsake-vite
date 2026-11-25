import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';

function loadPugData() {
  const dataDir = path.resolve('src/data');
  const readJson = (name) => JSON.parse(fs.readFileSync(path.join(dataDir, name), 'utf-8'));

  return {
    site: readJson('site.json'),
    sections: readJson('sections.json'),
    works: readJson('works.json'),
  };
}

export default defineConfig(({ command }) => {
  const pugData = loadPugData();

  return {
    base: command === 'build' ? '/landing-keepsake-vite/' : '/',
    publicDir: 'public',
    plugins: [
      vituum({
        pages: {
          dir: './src/pages',
          root: './src',
          normalizeBasePath: true,
        },
        data: pugData,
      }),
      pug({
        root: './src',
        data: pugData,
        globals: [],
      }),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  };
});
