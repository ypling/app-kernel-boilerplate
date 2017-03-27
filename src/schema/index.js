/**
 * Created by leonardli on 3/19/17.
 */

import {buildSchema} from 'graphql';
import users from './queries/users';

export const schema = buildSchema(`
  type Query {
    users : [User]
  }
  
  type User{
    id: ID!
    name: String
  }
`);

export const root = {
  users
};

