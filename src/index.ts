var { graphql, buildSchema } = require('graphql');

// 定义一个模式
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// 定义一个模式查询
var root = { hello: () => 'Hello world!' };

// 查询
graphql(schema, '{ hello }', root).then((response) => {
	console.log(response);
});
