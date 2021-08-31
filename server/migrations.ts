import Umzug from 'umzug'
import { umzugOptions } from './config'
import logger from './services/logger'

const umzug = new Umzug(umzugOptions)

;(async () => {
  await umzug.up()
  logger.info('All migrations performed successfully')
  process.exit()
})().catch(async(error) => {
  logger.error(error)
  await umzug.down()
  process.exit(1)
})
