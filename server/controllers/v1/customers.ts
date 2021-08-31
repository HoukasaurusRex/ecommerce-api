import express from 'express'
import * as customerProvider from '../../providers/v1/customers'
const router = express.Router()

router.post('/', customerProvider.postCustomers)
router.get('/', customerProvider.getCustomers)
router.put('/:id', customerProvider.putCustomers)
router.delete('/:id', customerProvider.deleteCustomers)

export default router
