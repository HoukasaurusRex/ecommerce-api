export const appConfig = {
  name: 'ecommerce-app',
  account: process.env.ACCOUNT_ID,
  region: process.env.REGION,
  eb: {
    solutionStackName: '64bit Amazon Linux 2 v5.4.4 running Node.js 14',
    dbUsername: process.env.RDS_USERNAME || 'username',
    dbPassword: process.env.RDS_PASSWORD || 'password',
    dbName: process.env.RDS_DATABASE || 'ecommerceAppDB',
    ebZipArchivePath: `${__dirname}/../../server`,
    instancePort: '3000'
  },
} as const
