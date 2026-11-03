import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app.js'
describe('GET /info', () => { it('returns application identity and runtime information as JSON', async () => { const res = await request(app).get('/info'); expect(res.status).toBe(200); expect(res.headers['content-type']).toMatch(/application\/json/); expect(typeof res.body.name).toBe('string'); expect(typeof res.body.version).toBe('string'); expect(res.body.node).toMatch(/^v/); expect(res.body.uptime).toBeGreaterThanOrEqual(0) }); it('disables caching for runtime information', async () => { const res = await request(app).get('/info'); expect(res.headers['cache-control']).toBe('no-store') }) })
