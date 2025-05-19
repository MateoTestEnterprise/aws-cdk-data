#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkDataStack } from '../lib/aws-cdk-data-stack';

const app = new cdk.App();
new AwsCdkDataStack(app, 'AwsCdkDataStack');