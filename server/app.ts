import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from 'compression'
import jsend from 'jsend'
import * as router from './routes'
import { notFound, handleError } from './providers/v1/errors'
import { httpLogger } from './services/logger'
import { environment, expressPort as port } from './config'

const app = express()

app.use(cors())
app.use(httpLogger(environment))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(helmet())
app.use(compression())
app.use(jsend.middleware)
app.use('/', router.v1)
app.use('/v1/', router.v1)
app.use('*', notFound)
app.use(handleError)
app.set('port', port)

export default app
