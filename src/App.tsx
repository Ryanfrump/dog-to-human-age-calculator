import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <header>
        <h1>Dog to Human Age Calculator</h1>
        <p>
          Ever wonder how old you dog really is well I have a solution for yah
        </p>
      </header>
      <main className="main-container">
        <Calculator />
      </main>
    </>
  );
}

export default App;
