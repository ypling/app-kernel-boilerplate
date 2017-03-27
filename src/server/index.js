/**
 * Created by leonardli on 3/19/17.
 */
import express from 'express'
import graphqlHTTP from 'express-graphql';
import {root, schema} from '../schema';

const app = express();
const port = process.env.PORT || 5000;


app.use(graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: {}
}));

app.listen(port, () => console.log(`Now browse to localhost:${port}/`));

