const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} = require('graphql');
const {movieType} = require('./types.js');
let {movies} = require('./data.js');
const _ = require('lodash');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost";


//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: function () {
                console.log(1111)
                return "Hello World";
            }
        },
        movies_by_id: {
                type: movieType,
                args: {
                    id: { type: GraphQLString }
                },
                resolve: function (source, args) {                    
                    return _.find(movies, { id: args.id });
                   
                }
            },
        movies_all: {
                type: movieType,
                resolve: function () {                    
                    return movies
                    
                }
            },
        
    }
});

exports.queryType = queryType;