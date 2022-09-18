import "./App.css";
import Tweets from "./Components/Tweets";

function App() {
  return (
    <>
      <div className="container">
        <div className="app-title">
          <h1 className="header">Tweet App</h1>
          <span className="underline"></span>
        </div>
        <Tweets />
      </div>
    </>
  );
}

export default App;
