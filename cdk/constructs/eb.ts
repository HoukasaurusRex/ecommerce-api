import * as cdk from '@aws-cdk/core'
import * as eb from '@aws-cdk/aws-elasticbeanstalk'
import * as iam from '@aws-cdk/aws-iam'
import * as s3assets from '@aws-cdk/aws-s3-assets'
import { environment, appConfig } from '../config'

const { solutionStackName, dbName, dbPassword, dbUsername, ebZipArchivePath, instancePort } = appConfig.eb

export class EcommerceEBStack extends cdk.Stack {
  readonly ebEnv: eb.CfnEnvironment
  constructor(scope: cdk.App, prefix: string, props?: cdk.StackProps) {
    super(scope, prefix, props)
    const EBInstanceRole = new iam.Role(this, `${prefix}-ec2-role`, {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    })
    EBInstanceRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName('AWSElasticBeanstalkWebTier')
    )

    const profileName = `${prefix}-instance-profile`
    new iam.CfnInstanceProfile(this, profileName, {
      instanceProfileName: profileName,
      roles: [EBInstanceRole.roleName],
    })
    const node = this.node
    const platform = node.tryGetContext('platform')

    const envVars = [
      ['RDS_USERNAME', dbUsername],
      ['RDS_PASSWORD', dbPassword],
      ['RDS_DB_NAME', dbName],
      ['PORT', instancePort]
    ]
    // Issue deploying database: https://github.com/aws/aws-cdk/issues/7838
    // Workaround is to configure in elasticbeanstalk console,
    // alternative solution could be creating an RDS cdk construct and importing credentials
    const dbOptions = [
      ['DBEngine', 'postgres'],
      ['DBUser', dbUsername],
      ['DBPassword', dbPassword],
      ['DBInstanceClass', 'db.t2.micro'],
      ['DBAllocatedStorage', '5'],
      ['DBEngineVersion', '12']
    ]

    // General Option Settings: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html
    const optionSettingProperties: eb.CfnEnvironment.OptionSettingProperty[] = [
      {
        namespace: 'aws:autoscaling:launchconfiguration',
        optionName: 'InstanceType',
        value: 't2.micro',
      },
      {
        namespace: 'aws:autoscaling:launchconfiguration',
        optionName: 'IamInstanceProfile',
        value: profileName,
      },
      {
        namespace: 'aws:elasticbeanstalk:application',
        optionName: 'Application Healthcheck URL',
        value: '/',
      },
      {
        namespace: 'aws:elb:listener',
        optionName: 'InstancePort',
        value: instancePort,
      },
      ...dbOptions.map(([optionName, value]) => ({
        namespace: 'aws:rds:dbinstance',
        optionName,
        value,
      })),
      ...envVars.map(([optionName, value]) => ({
        namespace: 'aws:elasticbeanstalk:application:environment',
        optionName,
        value,
      })),
    ]
    const applicationName = `${prefix}-${environment}`

    const ebZipArchive = new s3assets.Asset(this, applicationName, {
      path: ebZipArchivePath,
    })

    const app = new eb.CfnApplication(this, `${prefix}-app-${environment}`, {
      applicationName,
      description: 'Node.js ecommerce app',
    })

    const appVersionProps = new eb.CfnApplicationVersion(
      this,
      `${prefix}-app-version-${environment}`,
      {
        applicationName,
        sourceBundle: {
          s3Bucket: ebZipArchive.s3BucketName,
          s3Key: ebZipArchive.s3ObjectKey,
        },
      }
    )

    const env = new eb.CfnEnvironment(this, `${prefix}-env-${environment}`, {
      environmentName: `${prefix}-env-${environment}`,
      applicationName,
      platformArn: platform,
      solutionStackName,
      optionSettings: optionSettingProperties,
      versionLabel: appVersionProps.ref,
    })

    appVersionProps.addDependsOn(app)
    this.ebEnv = env
  }
}
