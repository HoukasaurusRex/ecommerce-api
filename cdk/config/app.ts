export const appConfig = {
  name: 'ecommerce-app',
  account: process.env.ACCOUNT_ID,
  region: process.env.REGION,
  rds: {
    username: process.env.RDS_USERNAME || 'username',
    password: process.env.RDS_PASSWORD || 'password',
    database: process.env.RDS_DATABASE || 'ecommerceAppDB',
  },
  eb: {
    solutionStackName: '64bit Amazon Linux 2 v5.4.4 running Node.js 14',
    dbUsername: process.env.RDS_USERNAME || 'username',
    dbPassword: process.env.RDS_PASSWORD || 'password',
    dbName: process.env.RDS_DATABASE || 'ecommerceAppDB',
  },
} as const
