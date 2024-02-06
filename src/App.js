import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { Modal } from "./component/Modal";
import { LargeBookListItem } from "./component/books/LargeListItems";
import { CurrentUserLoader } from "./component/current-user-loader";
import { DataSource } from "./component/data-source";
import { ResourceLoader } from "./component/resource-loader";
import { UserInfo } from "./component/user-info";
import { UserLoader } from "./component/user-loader";
import axios from "axios";

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

function App() {
  return (
    <>
      <DataSource
        getData={async () => {
          const response = await axios.get("http://localhost:9090/users/3");
          return response.data;
        }}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
