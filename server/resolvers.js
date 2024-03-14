const Post = require('./Post');

//resolvers for hello and getAll
const resolvers = {
    Query: {
        hello: () => {
            return "Hello World";
        },

        getAll: async() => {
            return await Post.find();
        },
    },
//resolvers for mutations
    Mutation: {
//post create resolver
        createPost: async(parent, args, context, info) => {
            const { title, description } = args.post;
            const post = await new Post({ title, description }).save();
            return post;

        },
//update post resolver
        updatePost: async(parent, args, context, info) => {
            const { id } = args;
            const { title, description } = args.post;
            const post = await Post.findByIdAndUpdate(
                id, 
            { title, description }, 
            { new: true });//ensures updated post is returned
            return post;
        },
//deletion resolver
        deletePost: async(parent, args, context, info) => {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return "Deleted";
        },
    }
};
module.exports = resolvers;