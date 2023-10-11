import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import IterationSample from "./IterationSample";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <IterationSample />
        <MyComponent name="React" favoriteNumbers={1} />
      </header>
    </div>
  );
}

export default App;
