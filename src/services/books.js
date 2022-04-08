import { API, graphqlOperation } from "aws-amplify";
import { createBooks, updateBooks, deleteBooks } from "../graphql/mutations";
import { getBooks, listBooks } from "../graphql/queries";
import {
  onCreateBooks,
  onDeleteBooks,
  onUpdateBooks,
} from "../graphql/subscriptions";

const list = async () => {
  try {
    const books = await API.graphql(graphqlOperation(listBooks));
    return books.data.listBooks.items;
  } catch (error) {
    console.error({ error });
  }
};

const onCreate = async (subFunction) => {
  const subscription = API.graphql(graphqlOperation(onCreateBooks)).subscribe({
    next: (bookData) => {
      subFunction();
    },
  });
  return subscription;
};

const onDelete = async (subFunction) => {
  const subscription = API.graphql(graphqlOperation(onDeleteBooks)).subscribe({
    next: (bookData) => {
      subFunction();
    },
  });
  return subscription;
};

const onUpdate = async (subFunction) => {
  const subscription = API.graphql(graphqlOperation(onUpdateBooks)).subscribe({
    next: (bookData) => {
      subFunction();
    },
  });
  return subscription;
};

const create = async (book) => {
  try {
    const newBook = await API.graphql(
      graphqlOperation(createBooks, { input: book })
    );
  } catch (error) {
    console.log("No pude traer información");
  }
};

const Delete = async (book) => {
  try {
    const bookDeleted = await API.graphql(
      graphqlOperation(deleteBooks, { input: { id: `${book}` } })
    );
  } catch (error) {
    console.log(book);
    console.log(error);
  }
};

const Update = async (book) => {
  try {
    const booksUpdated = await API.graphql(
      graphqlOperation(updateBooks, { input: book })
    );
  } catch (error) {
    console.log(error);
  }
};

export { list, create, onCreate, Delete, onDelete, Update, onUpdate };
