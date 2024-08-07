import 'App.css';
import Product from "components/Product/Product"
import Context from "hooks/Context/Context"
function App() {
  return (
    <div className="App">
      <h1>Hello from etax</h1>
      {/* <Product></Product> */}

      <Context></Context>
    </div>
  );
}

export default App;


