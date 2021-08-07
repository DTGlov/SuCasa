import { gql } from "@apollo/client";


export const GET_LOCATIONS = gql`
query{
locations{
    id
    image
    capital
}
}
`

export const GET_ALL_APARTMENTS = gql`
query{
    apartments{
        id
        image
        title
        description
        beds
        baths
        dimension
        
    }
}
`
export const GET_SINGLE_APARTMENT = gql`
  query ($id: ID!) {
    apartment(id: $id) {
      image
      description
      areacode
      beds
      baths
      dimension
      price
    }
  }
`;

export const GET_SINGLE_LOCATION = gql`
  query ($id: ID!) {
    location(id: $id) {
      slug
      apartments {
        id
        image
        title
        description
        beds
        baths
        dimension
      }
    }
  }
`;