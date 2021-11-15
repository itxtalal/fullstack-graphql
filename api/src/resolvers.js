/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

/**
* GRAPHQL has default resovlers for every field of Types
* Thats Why we can get fields by Querying without writing
* any field level resolvers
 */
module.exports = {
  Query: {
    pets(_, {input}, {models}) {
      return models.Pet.findMany(input || {})
    },
    pet(_, {input}, {models}) {
      return models.Pet.findOne(input)
    }
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}
