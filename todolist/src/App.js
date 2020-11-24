import Lists from "./components/Lists";

function App() {
  return (
    <div>
      <div className="container px-lg-5">
        <div className="row">
          <button type="button" className="btn btn-outline-primary ">
            New Task
          </button>
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
