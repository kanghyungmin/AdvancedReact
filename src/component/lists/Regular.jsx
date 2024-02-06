import React from "react";

export const ReularList = ({ items, sourceName, ItemComponent }) => {
  console.log(items, sourceName, ItemComponent);
  const temp = { ...{ [sourceName]: items[0] } };
  console.log(`temp=${JSON.stringify(temp)}`);

  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};
