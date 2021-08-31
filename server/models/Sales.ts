import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface SaleAttributes {
  id?: number
  createdAt?: Date
  updatedAt?: Date
}
export interface SaleModel extends Model<SaleAttributes>, SaleAttributes {}

export type SaleStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): SaleModel
}

export const SaleFactory = (sequelize: Sequelize): SaleStatic =>
  sequelize.define('Sales', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
  }) as SaleStatic
