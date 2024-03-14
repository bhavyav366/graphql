const { gql } = require("apollo-server-express");

//get data from post of this schema type
//query for hello and getall
const typeDefs = gql `

  type Post {
    id: ID
    title: String
    description: String
  }

  type Query {
    hello:String
    getAll: [Post]

}

input PostInput {
    title: String
    description: String
  }

  type Mutation {
   
    createPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    deletePost(id: String): String
  }
`;

module.exports = typeDefs;