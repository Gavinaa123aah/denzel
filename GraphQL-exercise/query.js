const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql');
const {movieType} = require('./types.js');
const {directorType} = require('./types.js');
let {movies} = require('./data.js');
let {directors} = require('./data.js');
const _ = require('lodash');


//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,

            resolve: function () {
                return "Hello World";
            }
        },
        movie: {
                type: movieType,
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: function (source, args) {
                    return _.find(movies, { id: args.id });
                }
            },
        director: {
                type: directorType,
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: function (source, args) {
                    return _.find(directors, { id: args.id });
                }
            }
        
    }
});

exports.queryType = queryType;