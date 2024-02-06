import axios from "axios";
import React, { useEffect, useState } from "react";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:9090/current-user", {
        // headers: {
      });
      //   console.log(response.data);
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          console.log("True", i);
          return React.cloneElement(child, { user });
        }
        console.log("False");
        return child;
      })}
    </>
  );
};
