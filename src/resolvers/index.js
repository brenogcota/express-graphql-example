const crypto = require('crypto')
const products = require('../data')

const productResolvers = {
    Query: {
        product: (_, args) => {
            return products.find(product => product.id === args.id)
        },
        products: (_, args) => {
            return products
        }
    },
    Mutation: {
        create: (_, args) => {
            products.push({ ...args, id: crypto.randomUUID()})
            return products
        }
    }
}

const rootResolver = {}

const resolvers = [
    rootResolver,
    productResolvers,
]

module.exports = resolvers
