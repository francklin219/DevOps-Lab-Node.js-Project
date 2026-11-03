import { Router } from 'express'
import { getPackageInfo } from '../../utils/appInfo.js'
const router = Router()
router.get('/version', (_req, res) => { const { version } = getPackageInfo(); return res.set('Cache-Control', 'no-store').status(200).json({ version }) })
export default router
