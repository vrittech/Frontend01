import "./App.css";
import ClassComponentDemo from "./ClassComponentDemo";
import ComponentLifeCycle from "./ComponentLifeCycle";
import ComponentUnmounting from "./ComponentUnmounting";
import ComponentUpdating from "./ComponentUpdating";
function App() {
  let name = "Ruby";
  return (
    <div className="App">
      {/* <ClassComponentDemo /> */}
      {/* <ComponentLifeCycle name1={name} /> */}
      {/* <ComponentUpdating updatedName="Javascript" />
      <ComponentUnmounting /> */}
      {/* <ComponentUnmounting /> */}
    </div>
  );
}

export default App;
