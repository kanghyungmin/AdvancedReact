import { logProps } from "./component/log-props";
import { UserInfo } from "./component/user-info";

const UserInfoWrapper = logProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapper test={"test"} b="I am be" c={21} />
    </>
  );
}

export default App;
