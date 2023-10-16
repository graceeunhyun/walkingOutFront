import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import IterationSample from "./IterationSample";
import Counter from "./Counter";
import Average from "./Average";
import SaasComponent from "./util/SaasComponent";

function App() {
  return (
    <>
      <div>
        <SaasComponent />
        {/* <IterationSample />
        <Average /> */}
      </div>
    </>
  );
}

export default App;
