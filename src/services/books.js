import { API, graphqlOperation } from "aws-amplify";
import { createBooks, updateBooks, deleteBooks } from "../graphql/mutations";
import { getBooks, listBooks } from "../graphql/queries";
import { onCreateBooks } from "../graphql/subscriptions";

const list = async () => {
  try {
    const books = await API.graphql(graphqlOperation(listBooks));
    return books.data.listBooks.items;
  } catch (error) {
    console.error({ error });
  }
};

const create = async (book) => {
  try {
    const newBook = await API.graphql(
      graphqlOperation(createBooks, { input: book })
    );
  } catch (error) {}
};

const onCreate = async (subFunction) =>{
    const subscription = API
    .graphql(graphqlOperation(onCreateBooks))
    .subscribe({
        next: (bookData) => {
            subFunction();
        },
    });
    return subscription;
}
export { list, create, onCreate }
