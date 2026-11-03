import { Router } from 'express'
import { getPackageInfo, getRuntimeInfo } from '../../utils/appInfo.js'
const router = Router()
router.get('/info', (_req, res) => { const info = { ...getPackageInfo(), ...getRuntimeInfo() }; return res.set('Cache-Control', 'no-store').status(200).json(info) })
export default router
