import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
// import Word from "./Word";
import { useState, useEffect } from "react";

export default function Day() {
  //dummy.words
  const day = useParams().day;

  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, []);

  return (
    <>
      <h1></h1>
    </>
  );
}
