import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface ProductAttributes {
  id?: number
  name: string
  createdAt?: Date
  updatedAt?: Date
}
export interface ProductModel
  extends Model<ProductAttributes>,
    ProductAttributes {}

export type ProductStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): ProductModel
}

export const ProductFactory = (sequelize: Sequelize): ProductStatic =>
  sequelize.define('Products', {
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
  }) as ProductStatic
