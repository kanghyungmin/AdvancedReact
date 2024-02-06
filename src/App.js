import { Modal } from "./component/Modal";
import { LargeBookListItem } from "./component/books/LargeListItems";

import { books } from "./db/books";

function App() {
  console.log(books);
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
      {/* items={authors}
        sourceName={"book"}
        ItemComponent={LargeBookListItem} */}
    </>
  );
}

export default App;
