import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface CustomerAttributes {
  id?: number
  name: string
  createdAt?: Date
  updatedAt?: Date
}
export interface CustomerModel
  extends Model<CustomerAttributes>,
    CustomerAttributes {}

export type CustomerStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): CustomerModel
}

export const CustomerFactory = (sequelize: Sequelize): CustomerStatic =>
  sequelize.define('Customers', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }) as CustomerStatic
