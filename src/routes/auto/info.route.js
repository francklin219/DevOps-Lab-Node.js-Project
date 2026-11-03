import { Router } from 'express'
import { getPackageInfo, getRuntimeInfo } from '../../utils/appInfo.js'
const router = Router()
router.get('/info', (_req, res) => res.status(200).json({ ...getPackageInfo(), ...getRuntimeInfo() }))
export default router
