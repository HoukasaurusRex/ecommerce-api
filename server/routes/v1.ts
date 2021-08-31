import express from 'express'
import indexController from '../controllers/v1/index'
import customerController from '../controllers/v1/customers'
import companyController from '../controllers/v1/companys'
import productController from '../controllers/v1/products'
import saleController from '../controllers/v1/sales'

const v1 = express.Router()

v1.use('/', indexController)
v1.use('/customers', customerController)
v1.use('/companys', companyController)
v1.use('/products', productController)
v1.use('/sales', saleController)

export { v1 }
