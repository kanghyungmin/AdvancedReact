import axios from "axios";
import { useState } from "react";

export const includeUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    });

    const onChangeUser = (update) => {
      setUser({
        ...user,
        ...updates,
      });
    };

    const onPostUser = async () => {
      const response = await axios.post(`/user/${userId}`, {
        user,
      });
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
      />
    );
  };
};
