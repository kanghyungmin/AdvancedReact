import React from "react";

export const NumberdList = ({ items, sourceName, ItemComponent }) => {
  console.log(items, sourceName, ItemComponent);
  const temp = { ...{ [sourceName]: items[0] } };
  console.log(`temp=${JSON.stringify(temp)}`);

  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};
