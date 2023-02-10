import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
      </header>
      <body>
        <div className="container">
          <div className="row well mb-3">
            <div className="col-md-3 col-sm-3">
              <button
                type="button"
                className="btn btn-secondary btn-lg disabled"
              >
                Add Inventory
              </button>
            </div>
            <div className="col-md-3 col-sm-3">
              <button
                type="button"
                className="btn btn-secondary btn-lg disabled"
              >
                Check Inventory
              </button>
            </div>
            <div className="col-md-3 col-sm-3">
              <button
                type="button"
                className="btn btn-secondary btn-lg disabled"
              >
                Sell Items
              </button>
            </div>
          </div>

          <div className="row well mb-3">
            <div className="col-md-6">
              <h5>There are 8 items in the inventory!!</h5>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
