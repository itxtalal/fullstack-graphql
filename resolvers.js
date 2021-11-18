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
      console.log("QUERY => pet")
      return models.Pet.findOne(input)
    }
  },

  // Return the mutated object after mutation, 
  // Apollo Server needs to update its cache for data consistency

  Mutation: {
    newPet(_, {input}, ctx) {
      const pet = ctx.models.Pet.create(input)
      return pet
    }
  },

  // Field Level Resolvers
  Pet: {
    owner(_, __, ctx) {
      console.log('Pet => owner')
      // return ctx.models.User.findById(pet.user)
      return ctx.models.User.findOne()
    }
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  },
  User: {
    // Passing user or _ in the first argument means the same
    // Field Resolvers call the Query resolvers for Type (User) first
    // Then they resolve the fields
    pets(user, __, ctx) {
      console.log("User => pets")
      // Returning all the Pets for now
      // As the database has only one user
      // No logic implemented for finding pets of specific user
      return ctx.models.Pet.findMany()
    }
  }
}
