import { useState, useEffect } from "react";

export const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = userState(null);
    const [user, setUser] = useState(null);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/user/${userId}`);
      setInitialUser(response.data);
      setUser(response.data);
    })();
  }, []);

  return <Component {...props} user={user} />;
};
