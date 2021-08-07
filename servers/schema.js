import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Apartment {
    id: ID
    image: String!
    title: String!
    price: String!
    description: String!
    beds: Int!
    baths: Int!
    dimension: String!
    areacode: String!
    LocationId: String!
    slug: String!
    location:[Location!]!
  }

  type Location {
    id: ID
    image: String!
    capital: String!
    slug: String!
    apartments: [Apartment!]!
  }

  type Query {
    apartments: [Apartment!]!
    apartment(id: ID!): Apartment
    locations: [Location!]!
    location(id: ID!): Location
  }

  input LocationInput {
    image: String!
    capital: String!
    slug: String!
  }
  input ApartmentInput {
    image: String!
    title: String!
    price: String!
    description: String!
    beds: Int!
    baths: Int!
    dimension: String!
    areacode: String!
    LocationId: String!
    slug: String!
  }
  type Mutation{
    createLocation(location:LocationInput):Location
    createApartment(apartment:ApartmentInput):Apartment
    deleteLocation(id: String): String
    deleteApartment(id:String):String
  }
`;