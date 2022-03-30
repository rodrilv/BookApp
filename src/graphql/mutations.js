/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooks = /* GraphQL */ `
  mutation CreateBooks(
    $input: CreateBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    createBooks(input: $input, condition: $condition) {
      id
      title
      author
      description
      ISBN
      createdAt
      updatedAt
    }
  }
`;
export const updateBooks = /* GraphQL */ `
  mutation UpdateBooks(
    $input: UpdateBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    updateBooks(input: $input, condition: $condition) {
      id
      title
      author
      description
      ISBN
      createdAt
      updatedAt
    }
  }
`;
export const deleteBooks = /* GraphQL */ `
  mutation DeleteBooks(
    $input: DeleteBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    deleteBooks(input: $input, condition: $condition) {
      id
      title
      author
      description
      ISBN
      createdAt
      updatedAt
    }
  }
`;
