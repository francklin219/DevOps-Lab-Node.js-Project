import { describe, it, expect } from 'vitest'
import { errorHandler } from '../../src/utils/errorHandler.js'
function mockRes () { return { statusCode: 0, body: null, status (code) { this.statusCode = code; return this }, json (body) { this.body = body; return this } } }
describe('errorHandler', () => { it('uses the default error shape', () => { const res = mockRes(); errorHandler({}, {}, res, () => {}); expect(res.statusCode).toBe(500); expect(res.body).toEqual({ error: true, message: 'Internal Server Error' }) }); it('respects an explicit status and message', () => { const res = mockRes(); errorHandler({ status: 503, message: 'Unavailable' }, {}, res, () => {}); expect(res.statusCode).toBe(503); expect(res.body.message).toBe('Unavailable') }) })
