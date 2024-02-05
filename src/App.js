import "./App.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SplitScreen } from "./component/split-screen";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "blue" }}>{title}</h2>;
};

function App() {
  return (
    <SplitScreen
      // Left={LeftSideComp}
      // Right={RightSideComp}
      leftWidth={1}
      rightWidth={3}
    >
      <LeftSideComp title={"Right"} />
      <RightSideComp title={"Left"} />
    </SplitScreen>
  );
}

export default App;
