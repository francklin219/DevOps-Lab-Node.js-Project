import { describe, it, expect } from 'vitest'
import { getPackageInfo, getRuntimeInfo } from '../../src/utils/appInfo.js'
describe('appInfo helpers', () => { it('provides package identity', () => { const info = getPackageInfo(); expect(info.name).toBeTruthy(); expect(info.version).toBeTruthy() }); it('provides runtime fields', () => { const info = getRuntimeInfo(); expect(info.node).toMatch(/^v/); expect(info.uptime).toBeGreaterThanOrEqual(0) }) })
