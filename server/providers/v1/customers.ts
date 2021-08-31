import { NextFunction, Request, Response } from 'express'
import { ValidationError } from '../../services/validator'
import { Companys, Customers } from '../../db'

export const postCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const customer = await Customers.create(req.body)
    res.jsend.success({ customer })
  } catch (error) {
    next(error)
  }
}
export const getCustomers = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const customers = await Customers.findAll({ include: Companys })
    res.jsend.success({ customers })
  } catch (error) {
    next(error)
  }
}
export const putCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const customer = await Customers.findByPk(req.params.id, { include: Companys })
    if (!customer) throw new ValidationError('Customer not found')
    await customer.update(req.body)
    res.jsend.success({ customer })
  } catch (error) {
    next(error)
  }
}
export const deleteCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const customer = await Customers.findByPk(req.params.id)
    if (!customer) throw new ValidationError('Customer not found')
    await customer.destroy()
    res.jsend.success({ customer })
  } catch (error) {
    next(error)
  }
}
