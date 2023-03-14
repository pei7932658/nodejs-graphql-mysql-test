const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLInt,
        GraphQLFloat, 
        GraphQLObjectType} = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Visit = require("./visit")

// Defines the queries
module.exports = {
    visits: {
        type: new GraphQLList(type),
        args: {
            Service_name: {
                type: GraphQLString
            },
            Service_Time: {
                type: GraphQLString
            },
            Service_Status: {
                type: GraphQLString
            },
            limit: {
                type: GraphQLInt
            },
            order: {
                type: GraphQLString
            }
        },
        resolve: Visit.findMatching.bind(Visit)
    },
    visit: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Visit.getByID.bind(Visit)
    }
}