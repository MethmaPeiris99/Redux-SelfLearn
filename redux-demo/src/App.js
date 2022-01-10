import './App.css';
import {store} from "./components/Store/store";
import {useEffect} from "react";

function App() {

    const display = () =>{
        console.log("Store: ",store())
    }

    useEffect(() => {
        display();
    });

  return (
    <div className="App">
      <header className="App-header">
          <body>

          </body>
      </header>
    </div>
  );
}

export default App;
