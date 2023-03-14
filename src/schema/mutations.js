const { GraphQLObjectType } = require('graphql')
const baconMutation = require('../model/bacon/mutations')
const visitMutation = require('../model/visits/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addBacon: baconMutation.addBacon,
        updateBacon: baconMutation.updateBacon,
        addVisit: visitMutation.addVisit,
        updateVisit: visitMutation.updateVisit
    }
})