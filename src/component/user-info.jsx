export const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};
  console.log(books);
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age : {age} years</p>
      <p>Country : {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => {
          {
            console.log(book);
          }
          <li key={book}>{book}</li>;
        })}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
