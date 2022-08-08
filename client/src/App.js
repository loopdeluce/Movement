import logo from "./logo.svg";
import "./App.css";

function App() {
  function handleClick() {
    fetch("/cookie_click")
      .then((r) => r.json())
      .then(console.log("click"));
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Cookies-Sessions test click</button>
    </div>
  );
}

export default App;
