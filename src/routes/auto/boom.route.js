import { Router } from 'express'
const router = Router()
router.get('/boom', (_req, _res, next) => { const error = new Error('Boom!'); error.status = 500; next(error) })
export default router
