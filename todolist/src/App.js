import Lists from "./components/Lists";
import AddButton from "./components/AddButton";
function App() {
  return (
    <div>
      <div className="container px-lg-5">
        <div className="row">
          <AddButton />
        </div>
        <div className="row">
          <h1>Today</h1>
        </div>
        <p style={{ color: "#DC143C" }}>High</p>
        <p style={{ color: "#FFDAB9" }}>Mid</p>
        <p style={{ color: "#B0E0E6" }}>Low</p>
      </div>
      <Lists />
    </div>
  );
}

export default App;
