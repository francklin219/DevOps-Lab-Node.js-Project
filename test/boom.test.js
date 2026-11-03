import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app.js'
describe('GET /boom', () => { it('passes a simulated HTTP 500 error through the global handler', async () => { const res = await request(app).get('/boom'); expect(res.status).toBe(500); expect(res.headers['content-type']).toMatch(/application\/json/); expect(res.body).toEqual({ error: true, message: 'Simulated API failure' }) }) })
