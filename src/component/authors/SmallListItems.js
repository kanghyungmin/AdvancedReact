import React from "react";

export const SmallAuthorListItems = ({ author }) => {
  const { name, age } = author;
  return (
    <p>
      Name : {name}, Age : {age}
    </p>
  );
};
