import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import * as connect from 'aws-cdk-lib/aws-connect';

export class AwsCdkDataStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const connectInstance = new connect.CfnInstance(this, 'MyConnectInstance', {
      identityManagementType: 'CONNECT_MANAGED', // options: CONNECT_MANAGED | SAML | EXISTING_DIRECTORY
      attributes: {
        inboundCalls: true,
        outboundCalls: true,
      } 
    });
  }
}
