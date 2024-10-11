import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import fs from 'fs';
import path from 'path';

const loadCerts = (fullchain, privkey) => {
  try {
    return {
      key: fs.readFileSync(path.resolve(privkey)),
      cert: fs.readFileSync(path.resolve(fullchain)),
    };
  } catch (error) {
    throw new Error(
      'vite.config.ts: Не смог загрузить файлы сертификатов: ' + error.message,
    );
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const https =
    env.HTTPS_ENABLED === 'true'
      ? loadCerts(env.HTTPS_PRIVKEY, env.HTTPS_FULLCHAIN)
      : undefined;

  return {
    plugins: [react()],
    base: '',
    server: {
      port: env.PORT,
      open: false,
      host: true,
      strictPort: true,
      https,
    },
    preview: {
      open: false,
      port: env.PORT,
      host: true,
      strictPort: true,
    },
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    resolve: {
      alias: [
        {
          find: '~',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
        {
          find: '~api',
          replacement: fileURLToPath(new URL('./src/api', import.meta.url)),
        },
        {
          find: '~auth',
          replacement: fileURLToPath(new URL('./src/auth', import.meta.url)),
        },
        {
          find: '~assets',
          replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
        },
        {
          find: '~pages',
          replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
        },
        {
          find: '~components',
          replacement: fileURLToPath(
            new URL('./src/components', import.meta.url),
          ),
        },
        {
          find: '~context',
          replacement: fileURLToPath(new URL('./src/context', import.meta.url)),
        },
        {
          find: '~utils',
          replacement: fileURLToPath(new URL('./src/utils', import.meta.url)),
        },
        {
          find: '~widgets',
          replacement: fileURLToPath(new URL('./src/widgets', import.meta.url)),
        },
        {
          find: '~scss',
          replacement: fileURLToPath(new URL('./src/scss', import.meta.url)),
        },
        {
          find: 'src/',
          replacement: fileURLToPath(new URL('./src/', import.meta.url)),
        },
        {
          find: '~hooks',
          replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)),
        },
        {
          find: '~themes',
          replacement: fileURLToPath(new URL('./src/themes', import.meta.url)),
        },
        {
          find: '~types',
          replacement: fileURLToPath(new URL('./src/types', import.meta.url)),
        },
        {
          find: '~styles',
          replacement: fileURLToPath(new URL('./src/styles', import.meta.url)),
        },
        {
          find: '~icons',
          replacement: fileURLToPath(new URL('./src/icons', import.meta.url)),
        },
        {
          find: '~features',
          replacement: fileURLToPath(
            new URL('./src/features', import.meta.url),
          ),
        },
        {
          find: '~store',
          replacement: fileURLToPath(new URL('./src/store', import.meta.url)),
        },
        {
          find: '~routes',
          replacement: fileURLToPath(new URL('./src/routes', import.meta.url)),
        },
      ],
    },
  };
});
