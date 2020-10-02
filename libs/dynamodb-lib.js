import AWS from 'aws-sdk';

const client = new AWS.DynamoDB.DocumentClient();
// using promise form of dynamoDB methods to manage async code
// expose dynamo methods needed for guide
// https://serverless-stack.com/chapters/add-a-create-note-api.html
export default {
  get: (params) => client.get(params).promise(),
  put: (params) => client.put(params).promise(),
  query: (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise(),
};