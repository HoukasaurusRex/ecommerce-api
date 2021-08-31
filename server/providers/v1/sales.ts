import { NextFunction, Request, Response } from 'express'
import { ValidationError } from '../../services/validator'
import { Products, Sales } from '../../db'

export const postSales = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const sale = await Sales.create(req.body)
    res.jsend.success({ sale })
  } catch (error) {
    next(error)
  }
}
export const getSales = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const sales = await Sales.findAll({ include: Products })
    res.jsend.success({ sales })
  } catch (error) {
    next(error)
  }
}
export const putSales = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const sale = await Sales.findByPk(req.params.id, { include: Products })
    if (!sale) throw new ValidationError('Customer not found')
    await sale.update(req.body)
    res.jsend.success({ sale })
  } catch (error) {
    next(error)
  }
}
export const deleteSales = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const sale = await Sales.findByPk(req.params.id)
    if (!sale) throw new ValidationError('Customer not found')
    await sale.destroy()
    res.jsend.success({ sale })
  } catch (error) {
    next(error)
  }
}
