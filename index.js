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
     deleteCar(id: Int!): [Car]!
     changeCar(make:String, model:String, year:Int, color:String, id: Int!): Car!
 }
`

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
        },
        deleteCar: (context, args) => {
            cars.splice(args.id,1)
            return cars
        },
        changeCar: (context, args) => {
            const editedCar = {
                make: args.make,
                model: args.model,
                year: args.year,
                color: args.color
            }

            let index = cars.findIndex((val)=>{
                return val.id === args.id
            })
            console.log(cars[index])
            let updateMake = args.make ? args.make : cars[index].make
            let updateModel = args.model ? args.model : cars[index].model
            let updateYear = args.year ? args.year : cars[index].year
            let updateColor = args.color ? args.color : cars[index].color
            cars[index] = Object.assign(cars[index], {make:updateMake, model:updateModel, year:updateYear, color:updateColor})
            return cars[index]
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