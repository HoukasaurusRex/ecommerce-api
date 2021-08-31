import { NextFunction, Request, Response } from 'express'
import { ValidationError } from '../../services/validator'
import { Companys, Customers, Products } from '../../db'

export const postCompanys = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const company = await Companys.create(req.body)
    res.jsend.success({ company })
  } catch (error) {
    next(error)
  }
}
export const getCompanys = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const companys = await Companys.findAll({ include: [Products, Customers] })
    res.jsend.success({ companys })
  } catch (error) {
    next(error)
  }
}
export const putCompanys = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const company = await Companys.findByPk(req.params.id, { include: [Products, Customers] })
    if (!company) throw new ValidationError('Company not found')
    await company.update(req.body)
    res.jsend.success({ company })
  } catch (error) {
    next(error)
  }
}
export const deleteCompanys = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const company = await Companys.findByPk(req.params.id)
    if (!company) throw new ValidationError('Company not found')
    await company.destroy()
    res.jsend.success({ company })
  } catch (error) {
    next(error)
  }
}
