// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CommentResponse, Comment, User } = initSchema(schema);

export {
  CommentResponse,
  Comment,
  User
};