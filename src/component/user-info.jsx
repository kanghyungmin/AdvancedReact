import axios from "axios";
import { useCurrenctUser } from "./current.user.hook";
import { useResource } from "./resource.hook";
import { useUser } from "./user.hook";
import { useDataSource } from "./data-source.hook";

export const UserInfo = ({ userId }) => {
  //   const user = useResource(`http://localhost:9090/users/${userId}`);
  const user = useDataSource(async () => {
    const response = await axios.get(`http://localhost:9090/users/3`);
    return response.data;
  });
  console.log(`users=${user}`);
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
          return <li key={book}>{book}</li>;
        })}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
