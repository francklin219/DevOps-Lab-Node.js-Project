import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app.js'
describe('GET /boom', () => { it('returns HTTP 500 and JSON error', async () => { const res = await request(app).get('/boom'); expect(res.status).toBe(500); expect(res.body.error).toBe(true); expect(res.body.message).toBe('Boom!') }) })
