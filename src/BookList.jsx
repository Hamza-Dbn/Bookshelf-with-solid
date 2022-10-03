import { For } from "solid-js";

export function BookList(props) {
  const totalBooks = () => props.books.length;
  return (
    <ul>
      <h2>My Books ({totalBooks()})</h2>
      <For each={props.books}>
        {(book) => {
          return (
            <li>
              {book.title}{" "}
              <span style={{ "font-style": "italic" }}>({book.author})</span>
            </li>
          );
        }}
      </For>
    </ul>
  );
}
