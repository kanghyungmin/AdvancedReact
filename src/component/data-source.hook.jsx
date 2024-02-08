import axios from "axios";
import { useEffect, useState } from "react";

export const useDataSource = (getData) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await axios.getData();
      setResource(data);
    })();
  }, [getData]);
  return resource;
};
