import request from 'supertest'
import { describe, it, expect } from 'vitest'
import { getPackageInfo } from '../src/utils/appInfo.js'
import app from '../src/app.js'
describe('GET /version', () => { it('returns the exact application version with HTTP 200', async () => { const res = await request(app).get('/version'); expect(res.status).toBe(200); expect(res.body).toEqual({ version: getPackageInfo().version }) }); it('returns JSON without caching', async () => { const res = await request(app).get('/version'); expect(res.headers['content-type']).toMatch(/application\/json/); expect(res.headers['cache-control']).toBe('no-store') }) })
