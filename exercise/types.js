const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
} = require('graphql');
const _ = require('lodash');
// Define Movie Type
movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        link: {type: GraphQLString},
        id: { type: GraphQLString },
        metascore: { type: GraphQLInt },
        poster: { type: GraphQLString },
        rating: { type: GraphQLFloat },    
        synopsis: { type: GraphQLString },
        title: { type: GraphQLString },
        votes: { type: GraphQLString },
        year: {type: GraphQLInt}

    }
});

exports.movieType = movieType;
