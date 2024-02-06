import axios from "axios";
import React, { useEffect, useState } from "react";

export const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setresource] = useState(null);
  //   console.log(`userId=${userId}`);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setresource(data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          //   console.log("True", i);
          return React.cloneElement(child, { [resourceName]: resource });
        }
        // console.log("False");
        return child;
      })}
    </>
  );
};
