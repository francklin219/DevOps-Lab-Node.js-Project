import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app.js'
describe('GET /info', () => { it('returns execution info', async () => { const res = await request(app).get('/info'); expect(res.status).toBe(200); expect(res.body).toHaveProperty('name'); expect(res.body).toHaveProperty('version'); expect(res.body).toHaveProperty('node'); expect(res.body).toHaveProperty('uptime') }) })
