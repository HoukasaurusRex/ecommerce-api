import express from 'express'
import * as saleProvider from '../../providers/v1/sales'
const router = express.Router()

router.post('/', saleProvider.postSales)
router.get('/', saleProvider.getSales)
router.put('/:id', saleProvider.putSales)
router.delete('/:id', saleProvider.deleteSales)

export default router
