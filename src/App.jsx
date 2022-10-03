import { createSignal } from "solid-js";
import { BookList } from "./BookList";
import { AddBook } from "./AddBook";

const initialBooks = [
  { title: "Why Nations Fail", author: "Daniel Acemoglu" },
  { title: "Prisoners of Geography", author: "Tim Marshall" },
  { title: "Weapon Wizards", author: "Yaakov Katz & Amir Bohbot" },
];

function Bookshelf(props) {
  const [books, setBooks] = createSignal(initialBooks);

  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks} />
    </div>
  );
}

function App() {
  return <Bookshelf name="Hamza" />;
}

export default App;
