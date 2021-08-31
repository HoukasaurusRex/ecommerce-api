import * as cdk from '@aws-cdk/core'
import { EcommerceEBStack } from './constructs/eb'
import { appConfig } from './config'

const app = new cdk.App()
const env = { account: appConfig.account, region: appConfig.region }
new EcommerceEBStack(app, `${appConfig.name}-eb`, { env })
