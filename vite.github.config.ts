import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath,URL} from 'node:url';
const base=process.env.GITHUB_PAGES_BASE_PATH || '/';
export default defineConfig({
 plugins:[react()],
 base,
 resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},
 define:{'process.env.NEXT_PUBLIC_BASE_PATH':JSON.stringify(base.replace(/\/$/,''))},
 build:{outDir:'github-dist',emptyOutDir:true},
});
