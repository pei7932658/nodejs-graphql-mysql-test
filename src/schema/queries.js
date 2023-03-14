const { GraphQLObjectType } = require('graphql')
const baconQueries = require('../model/bacon/queries')
const visitQueries = require('../model/visits/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        bacon: baconQueries.bacon,
        bacons: baconQueries.bacons,
        visit: visitQueries.visit,
        visits: visitQueries.visits
    }
})