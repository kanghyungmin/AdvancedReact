// import { GreenSmallButton, RedButton } from "./component/composition";

import { RedButton, SmallRedButton } from "./component/partial";

function App() {
  return (
    <>
      <RedButton text="I am red!" />
      <SmallRedButton text="I am small and red" />
    </>
  );
}

export default App;
