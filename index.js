const {GraphQLServer} = require('graphql-yoga')

const typeDefs =`
 type Query {
     helloworld: String!
 }
`


const cars = [
    {
        make: "Honda",
        model: "Civic",
        year: 1969,
        color: "Red"
    },
    {
        make: "Ford",
        model: "Raptor",
        year: 2018,
        color: "White"
    },    {
        make: "Ford",
        model: "Fiesta",
        year: 1998,
        color: "Red"
    },    {
        make: "Dodge",
        model: "Dart",
        year: 2009,
        color: "Blue"
    },


]

const resolvers = {
    Query: {
        helloworld: ()=> "Hello team :D"
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('Yay on port 4000!')
})