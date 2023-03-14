let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Visit',
    description: 'A Visit',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        Wait_time: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Visit_Status: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Date_of_Birth: {
            type: new GraphQLNonNull(GraphQLString)
        },
        MRN: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Account_number: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        Service_name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Service_date: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Service_Time: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Provider: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Service_Status: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Service_Location: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Memo: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})