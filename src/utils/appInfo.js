import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const dir = path.dirname(fileURLToPath(import.meta.url))
export function getPackageInfo () { const pkg = JSON.parse(fs.readFileSync(path.join(dir, '..', '..', 'package.json'), 'utf8')); return { name: pkg.name, version: pkg.version } }
export function getRuntimeInfo () { return { node: process.version, uptime: process.uptime() } }
