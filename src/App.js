import { UncontrolledFlow } from "./component/uncontrolled-flow";

const StepOne = ({ goNext }) => {
  <>
    <h1>Step #1</h1>
    <button onClick={goNext}>Next</button>
  </>;
};

const StepTwo = ({ goNext }) => {
  <>
    <h1>Step #2</h1>
    <button onClick={goNext}>Next</button>
  </>;
};
const StepThree = ({ goNext }) => {
  <>
    <h1>Step #3</h1>
    <button onClick={goNext}>Next</button>
  </>;
};

function App() {
  return (
    <>
      <UncontrolledFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
