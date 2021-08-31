import { Sequelize } from 'sequelize'
import { dbConfig } from './config'
import { CustomerFactory } from './models/Customers'
import { CompanyFactory } from './models/Companys'
import { ProductFactory } from './models/Products'
import { SaleFactory } from './models/Sales'

const sequelize = new Sequelize(dbConfig)
const Customers = CustomerFactory(sequelize)
const Companys = CompanyFactory(sequelize)
const Products = ProductFactory(sequelize)
const Sales = SaleFactory(sequelize)
Customers.belongsTo(Companys)
Companys.hasMany(Customers)
Companys.hasMany(Products)
Products.belongsTo(Companys)
Products.hasMany(Sales)
Sales.belongsTo(Products)

export { Customers, Companys, Products, Sales }
export default sequelize
