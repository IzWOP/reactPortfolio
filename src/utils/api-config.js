import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import API from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';

Amplify.configure(awsconfig);
Amplify.register(Auth);
Amplify.register(API);