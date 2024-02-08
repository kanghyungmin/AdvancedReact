import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrenctUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:9090/current-user");
      setUser(response.data);
    })();
  }, []);
  return user;
};
