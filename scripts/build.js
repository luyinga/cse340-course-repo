import { cpSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const outDir = resolve(rootDir, 'dist');

mkdirSync(outDir, { recursive: true });
cpSync(resolve(rootDir, 'public'), resolve(outDir, 'public'), { recursive: true });
cpSync(resolve(rootDir, 'src/views'), resolve(outDir, 'views'), { recursive: true });
cpSync(resolve(rootDir, 'server.js'), resolve(outDir, 'server.js'));
cpSync(resolve(rootDir, 'package.json'), resolve(outDir, 'package.json'));

console.log(`Build complete. Output written to ${outDir}`);
