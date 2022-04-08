/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooks = /* GraphQL */ `
  query GetBooks($id: ID!) {
    getBooks(id: $id) {
      id
      title
      status
      author
      description
      publish_date
      ISBN
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBooksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        status
        author
        description
        publish_date
        ISBN
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
