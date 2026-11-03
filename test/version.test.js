import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app.js'
describe('GET /version', () => { it('returns a nonempty version and HTTP 200', async () => { const res = await request(app).get('/version'); expect(res.status).toBe(200); expect(typeof res.body.version).toBe('string'); expect(res.body.version.length).toBeGreaterThan(0) }) })
