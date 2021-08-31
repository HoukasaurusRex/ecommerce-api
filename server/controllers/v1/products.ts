import express from 'express'
import * as productProvider from '../../providers/v1/products'
const router = express.Router()

router.post('/', productProvider.postProducts)
router.get('/', productProvider.getProducts)
router.put('/:id', productProvider.putProducts)
router.delete('/:id', productProvider.deleteProducts)

export default router
