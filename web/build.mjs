import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
await build({absWorkingDir:root,entryPoints:['web/entry.jsx'],outfile:'web-game.js',bundle:true,minify:true,platform:'browser',format:'iife',jsx:'automatic',loader:{'.js':'jsx'},alias:{'react-native':'react-native-web'},nodePaths:[root+'web/node_modules'],define:{'process.env.NODE_ENV':'"production"'}});
