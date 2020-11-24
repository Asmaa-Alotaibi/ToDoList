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
      </div>
      <Lists />
    </div>
  );
}

export default App;
