const {GraphQLServer} = require('graphql-yoga')

const typeDefs =`
 type Query {
     helloworld: String!
     cars: [Car!]!
 }

 type Car {
     make: String!
     model: String!
     year: Int!
     color: String!
     id: Int!
 }

 type Mutation {
     addCar(make: String!, model: String!, year: Int!, color: String!): Car!
 }
`

//random comment


const cars = [
    {
        make: "Honda",
        model: "Civic",
        year: 1969,
        color: "Red",
        id: 0
    },
    {
        make: "Ford",
        model: "Raptor",
        year: 2018,
        color: "White",
        id: 1
    },    {
        make: "Ford",
        model: "Fiesta",
        year: 1998,
        color: "Red",
        id: 2
    },    {
        make: "Dodge",
        model: "Dart",
        year: 2009,
        color: "Blue",
        id: 3
    },


]

const resolvers = {
    Query: {
        helloworld: ()=> "Hello team :D",
        cars: ()=> cars
    },
    Mutation: {
        addCar: (context, args) => {
            const {
                make,
                model,
                year,
                color
            } = args
            const newCar = {
                make,
                model,
                year,
                color,
                id: cars.length
            }
            cars.push(newCar)
            return newCar
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('Yay on port 4000!')
})