import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface CompanyAttributes {
  id?: number
  name: string
  createdAt?: Date
  updatedAt?: Date
}
export interface CompanyModel
  extends Model<CompanyAttributes>,
    CompanyAttributes {}

export type CompanyStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): CompanyModel
}

export const CompanyFactory = (sequelize: Sequelize): CompanyStatic =>
  sequelize.define('Companys', {
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
  }) as CompanyStatic
