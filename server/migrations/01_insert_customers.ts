import { QueryInterface } from 'sequelize'
import { Customers } from '../db'

export default {
  up: async (query: QueryInterface): Promise<void> => {
    await query.bulkInsert(Customers.tableName, [
      {
        name: 'fred johnson',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joe miller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'chrisjen avasarala',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    
  },
  down: async (query: QueryInterface): Promise<void> => {
    await query.bulkDelete(Customers.tableName, {})
  },
}
