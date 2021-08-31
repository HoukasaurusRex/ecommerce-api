import express from 'express'
import * as companyProvider from '../../providers/v1/companys'
const router = express.Router()

router.post('/', companyProvider.postCompanys)
router.get('/', companyProvider.getCompanys)
router.put('/:id', companyProvider.putCompanys)
router.delete('/:id', companyProvider.deleteCompanys)

export default router
