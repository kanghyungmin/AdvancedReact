import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);
  console.log(`userId=${userId}`);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:9090/users/${userId}`);
      console.log(`data = ${response.data}`);
      setUser(response.data);
    })();
  }, [userId]);

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
