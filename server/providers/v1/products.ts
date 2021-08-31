import { NextFunction, Request, Response } from 'express'
import { ValidationError } from '../../services/validator'
import { Companys, Products, Sales } from '../../db'

export const postProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await Products.create(req.body)
    res.jsend.success({ product })
  } catch (error) {
    next(error)
  }
}
export const getProducts = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await Products.findAll({ include: [Companys, Sales]})
    res.jsend.success({ products })
  } catch (error) {
    next(error)
  }
}
export const putProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await Products.findByPk(req.params.id, { include: [Companys, Sales]})
    if (!product) throw new ValidationError('Product not found')
    await product.update(req.body)
    res.jsend.success({ product })
  } catch (error) {
    next(error)
  }
}
export const deleteProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await Products.findByPk(req.params.id)
    if (!product) throw new ValidationError('Product not found')
    await product.destroy()
    res.jsend.success({ product })
  } catch (error) {
    next(error)
  }
}
