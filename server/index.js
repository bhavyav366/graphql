const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const { gql } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')



// mongodb connection
const URL = "mongodb+srv://bhavya:bhavya12345@atlascluster.t5lfxfj.mongodb.net/";

mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB Connected');
        // Your code here
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });




const startServer = async() => {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app }); // Change apolloServerServer to apolloServer
    app.listen(4000, () => console.log("Server is running at http://localhost:4000"));
};

startServer();